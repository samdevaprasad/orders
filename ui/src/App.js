import React, { Component } from 'react';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Users } from './components/users/Users';
import styles from './App.module.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <Users/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;