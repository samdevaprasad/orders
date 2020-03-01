import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveAllUsers, uploadNewUser } from './actions/userActions';
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

const mapStateToProps = state => ({
  users: state.userReducers.users
});

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      retrieveAllUsers: bindActionCreators(retrieveAllUsers, dispatch),
      uploadNewUser: bindActionCreators(uploadNewUser, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);