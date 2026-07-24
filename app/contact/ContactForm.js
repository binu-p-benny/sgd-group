"use client";

import { useActionState } from 'react';
import { submitContact } from '@/lib/actions/submissions';
import styles from './contact.module.css';

const initialState = { error: null, success: false };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.success) {
    return (
      <div className={styles.formCard}>
        <h2 className={styles.formTitle}>Thank you!</h2>
        <p>We&apos;ve received your message and will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Connect with Us</h2>
      <form className={styles.form} action={formAction}>
        <div className={styles.field}>
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className={styles.field}>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className={styles.field}>
          <input type="tel" name="phone" placeholder="Phone" />
        </div>
        <div className={styles.field}>
          <textarea name="message" rows={4} placeholder="Message" required />
        </div>
        {state.error && <p className={styles.errorMsg}>{state.error}</p>}
        <button type="submit" className={styles.submit} disabled={pending}>
          {pending ? 'Sending...' : 'Send a message'}
        </button>
      </form>
    </div>
  );
}
