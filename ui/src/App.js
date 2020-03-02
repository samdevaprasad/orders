import React, { Component } from 'react';
import styles from './App.module.css';

import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Items } from './components/items/Items';
import { Orders } from './components/orders/Orders';
import { Users } from './components/users/Users';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <Users/>
          <Items />
          <Orders />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;