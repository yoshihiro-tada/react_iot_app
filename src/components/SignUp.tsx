import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

import { AuthProvider } from '../context/AuthContext';
import styles from './SignUp.module.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [ error, setError ] = useState('');
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    createUserWithEmailAndPassword(auth,email.value, password.value).then(() => {
      navigate('/');
    })
    .catch((error:any) => {
      console.log(error.code);
      switch (error.code){
        case 'auth/invalid-email':
          setError('正しいメールアドレスの形式で入力してください。');
          break;
        case 'auth/weak-password':
          setError('パスワードは6文字以上を設定する必要があります。');
          break;
        case 'auth/email-already-in-use':
          setError('そのメールアドレスは登録済みです。');
          break;
        default:
          setError('メールアドレスかパスワードに誤りがあります。');
          break;
      }
    });
};

  return (
    <>
      <AuthProvider>
      <h2>ユーザー登録</h2>
      <form className={styles.signup_form} onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder='password'/>
        </div>
        <div>
          <button>登録</button>
          {/* 何故かButtonがうまく機能しないのでMUIを使わずに運用する
          <Button variant="contained"  size="small" sx={{fontSize: 12}}>登録</Button>
          */}
        </div>
      </form>
      <div className={styles.login_link}>※ログインは<Link to={'/login'}>こちら</Link>から</div>
      </AuthProvider>
    </>
  );
};

export default SignUp;