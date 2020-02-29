import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveAllUsers } from './actions/userActions';

class App extends Component {

  componentWillMount(){
    this.props.retrieveAllUsers();
  }

  render() {
    return (
      <div>Hello World Sam</div>
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