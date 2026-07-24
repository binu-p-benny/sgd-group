"use client";

import { useActionState } from 'react';
import { adminLogin } from '@/lib/actions/admin';
import styles from './login.module.css';

const initialState = { error: null };

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(adminLogin, initialState);

  return (
    <form action={formAction} className={styles.form}>
      <h1 className={styles.title}>Admin Login</h1>
      <p className={styles.sub}>Enter the password to view form submissions.</p>
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        autoFocus
        className={styles.input}
      />
      {state.error && <p className={styles.error}>{state.error}</p>}
      <button type="submit" className={styles.button} disabled={pending}>
        {pending ? 'Checking...' : 'Log in'}
      </button>
    </form>
  );
}
