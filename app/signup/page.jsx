'use client';
import React, {useId, useState} from 'react';
import {useFormik} from 'formik';
import Navbar from '@/components/Navbar';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../../firebase';
import {async} from '@firebase/util';
import {doc, setDoc, Timestamp} from 'firebase/firestore';

function Signup() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    setemail('');
    setpassword('');
    const {user} = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    ).then(result => {
      const ref = doc(db, 'users', result.user.uid);
      const docRef = setDoc(ref, {
        email,
        password,
        created: Timestamp.now(),
      });
      setDoc(doc(db, 'posts', result.user.uid), {posts: []});
      return user;
    });
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

export default Signup;
