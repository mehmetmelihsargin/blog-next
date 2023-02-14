'use client'
import './globals.css';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  )
}
