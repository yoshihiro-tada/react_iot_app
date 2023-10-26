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
      <p>メール：{user.email}</p>
    </>
  );
};

export default Welcome;