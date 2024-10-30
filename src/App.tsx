import React from 'react';
import { HeaderTop } from './components/HeaderTop';
import styles from './App.module.scss';
import { HeaderBottom } from './components/HeaderBottom';




function App() {
  return (
    <div className={styles.wrapperApp}>
          <HeaderTop />
          <HeaderBottom />
    </div>
  );
}

export default App;
