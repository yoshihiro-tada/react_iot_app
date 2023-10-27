import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
      navigate('/');
    })
    .catch((error:any) => {
      switch (error.code) {
        case 'auth/invalid-email':
          setError('正しいメールアドレスの形式で入力してください。');
          break;
        case 'auth/user-not-found':
          setError('メールアドレスかパスワードに誤りがあります。');
          break;
        case 'auth/wrong-password':
            setError('メールアドレスかパスワードに誤りがあります。');
            break;
        default:
          setError('メールアドレスかパスワードに誤りがあります。');
          break;
      }
    });
  }

  return (
    <>
      <h2>ログイン</h2>
      {/*
      {error && <p style={{ color:'red' }}>{error}</p>}
      */}
      <form className={styles.login_form} onSubmit={handleSubmit}>
        {error && <p style={{ color:'red' }}>{error}</p>}
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