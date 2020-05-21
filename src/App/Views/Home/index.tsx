import React from 'react'
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.app__header}>
        <p>
          Edit <code>src/App/Views/Home/index.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default Home;
