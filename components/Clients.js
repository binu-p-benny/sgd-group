"use client";

import styles from './Clients.module.css';

const logos = [
  '/client1.png',
  '/client2.png',
  '/client3.png',
  '/client4.png',
  '/client5.png',
  '/client6.png',
  '/client7.png',
  '/client8.png'
];

export default function Clients() {
  // Duplicate the logos array to create a seamless infinite loop
  const doubleLogos = [...logos, ...logos];

  return (
    <section className={styles.clients} id="clients">
      {/* <div className="container">
        <div className={styles.header}>
          <p className={styles.title}>Major Clients</p>
        </div>
      </div> */}

      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {doubleLogos.map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              <img src={logo} alt={`Client ${index + 1}`} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
