import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Button from '@mui/material/Button';

const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    {/* await ←非同期処理の完了を待ちたいが、何故かエラーが出る */} auth.signInWithEmailAndPassword(email.value, password.value);
    navigate('/');
  };

  return (
    <>
      <h2>ログイン</h2>
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
            <button><Button variant="contained"  size="small" sx={{fontSize: 12}}>ログイン</Button></button>
        </div>
      </form>
      <div className={styles.signup_link}>※ユーザー登録は<Link to={'/signup'}>こちら</Link>から</div>
    </>
  );

};

export default Login;