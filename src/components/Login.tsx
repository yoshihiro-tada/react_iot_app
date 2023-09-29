import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    auth.signInWithEmailAndPassword(email.value, password.value);
  };

  return (
    <>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
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
        </div>
        <div>
          ユーザー登録は<Link to={'/signup'}>こちら</Link>から
        </div>
      </form>
    </>
  );

};

export default Login;