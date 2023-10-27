import { auth } from '../firebase';
import { AuthProvider } from '../context/AuthContext';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    auth.createUserWithEmailAndPassword(email.value, password.value);
  };

  return (
    <>
      <AuthProvider>
      <h2>ユーザー登録</h2>
      <form className={styles.signup_form} onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" />
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