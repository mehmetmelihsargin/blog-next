'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { login } from '@/store/auth';
import { useDispatch } from 'react-redux';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch()
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      console.log("Giriş Yapildi")
      dispatch(login(user));
      return user;
    } catch (error) {
      console.log(error)
    }

  };
  return (
    <main>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center border-2"
      >
        <label htmlFor="email">Email Address</label>
        <input
          className="border-2"
          id="email"
          name="email"
          type="email"
          onChange={e => setemail(e.target.value)}
          value={email}
        />
        <label htmlFor="email">Password</label>
        <input
          className="border-2"
          id="password"
          name="password"
          type="password"
          onChange={e => setpassword(e.target.value)}
          value={password}
        />

        <button
          type="submit"
          className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block border border-current bg-white px-8 py-3">
            Submit
          </span>
        </button>
      </form>
    </main>
  );
}

export default Login;
