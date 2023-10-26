import { auth } from '../../../firebase';
import { useAuthContext } from '../../../context/AuthContext';

const Welcome = () => {
  const { user } = useAuthContext();
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    auth.createUserWithEmailAndPassword(email.value, password.value);
  };

  return (
    <>
      <p>↓ここにメールアドレスではなく名前を表示させたい。<br />※firestoreを活用する。</p>
      {user?.email ? <p>メール：{user.email}</p> : null}
    </>
  );
};

export default Welcome;