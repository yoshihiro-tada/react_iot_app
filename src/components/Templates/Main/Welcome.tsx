import { auth } from '../../../firebase';
import { useAuthContext } from '../../../context/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Welcome = () => {
  const { user } = useAuthContext();
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    createUserWithEmailAndPassword(auth,email.value, password.value);
  };

  return (
    <>
      <p>↓ここにメールアドレスではなく名前を表示させたい。<br />※fcreateirestoreを活用する。</p>
      {user?.email ? <p>メール：{user.email}</p> : null}
    </>
  );
};

export default Welcome;