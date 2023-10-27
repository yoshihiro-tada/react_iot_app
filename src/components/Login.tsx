import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('');
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    {/* await ←非同期処理の完了を待ちたいが、何故かエラーが出る */} 
    try {
      auth.signInWithEmailAndPassword(email.value, password.value);
      navigate('/');
    } catch(error:any) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <h2>ログイン</h2>
      {error && <p style={{ color:'red' }}>{error}</p>}
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" />
        </div>
        <div>
          <button>ログイン</button>
          {/*
          <Button variant="contained"  size="small" sx={{fontSize: 12}}>ログイン</Button>
          */}
        </div>
      </form>
      <div className={styles.signup_link}>※ユーザー登録は<Link to={'/signup'}>こちら</Link>から</div>
    </>
  );

};

export default Login;