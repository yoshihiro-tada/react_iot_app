import React, { FormEvent, useState } from 'react';
import { auth } from '../firebase';
import { AuthProvider } from '../context/AuthContext';

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
          <button>登録</button>
        </div>
      </form>
      </AuthProvider>
    </>
  );
};

export default SignUp;