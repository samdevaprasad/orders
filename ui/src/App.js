import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveAllUsers } from './actions/userActions';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

class App extends Component {

  componentWillMount(){
    this.props.retrieveAllUsers();
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  retrieveAllUsers: () => {
    dispatch(retrieveAllUsers())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);