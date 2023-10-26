import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

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