import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBCardText, MDBCol } from 'mdbreact';
import { deleteUser, retrieveAllUsers, uploadUser } from './../../actions/userActions';
import styles from './Users.module.css';

// component contains the ability to view, upload and delete Walmart InHome users
class UsersComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputUserValue: '',
      uploadMessageText: ''
    }
  }

  componentDidUpdate(prevProps) {
    // if we recieve a different upload message from the server make sure to retrieve latest list of users
    if (this.props.uploadMessage !== prevProps.uploadMessage) {
      this.props.actions.retrieveAllUsers();
      this.setState({ uploadMessageText: this.props.uploadMessage });
    }
  }

  componentWillMount(){
    // initial retrieve of users right before component mounts
    this.props.actions.retrieveAllUsers();
  }
  
  // function that creates the html template for the upload user card
  createUploadCard = () => {
    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardBody>
            <MDBCardText>Upload or delete a user</MDBCardText>
            <MDBInput label="Enter name here" value={this.state.inputUserValue} onChange={this.updateUserValue}/>
            <MDBBtn color='primary' className={styles.uploadBtn} onClick={this.uploadUser}>Upload</MDBBtn>
            <MDBBtn color='danger' className={styles.uploadBtn} onClick={this.deleteUser}>Delete</MDBBtn>
            {this.state.uploadMessageText}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }

  // function that creates the user results table
  createUsersTable = () => {
    const { users } = this.props;
    const usersList = [];
    // sort users alphabetically desc order
    users.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    })
    users.map(user => {
      usersList.push(<tr key={`${user.id}`}>
        <td className={styles.userTableRow}>{user.name}</td>
      </tr>);
    });
    return (
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th className={styles.userTableHeader}>Names (Sorted Alphabetically)</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {usersList}
        </MDBTableBody>
      </MDBTable>
    );
  }

  // api call to delete user from db
  deleteUser = () => {
    this.props.actions.deleteUser(this.state.inputUserValue);
  }

  // api call to upload user to db
  uploadUser = () => {
    this.props.actions.uploadUser(this.state.inputUserValue);
  }

  // set the state of the value in the user upload textbox
  updateUserValue = evt => {
    this.setState({ inputUserValue: evt.target.value, uploadMessageText: '' });
  }

  render(){
    return (
      <div className={styles.usersContainer}>
        <div className={styles.row}>
          <div className={styles.cardContainer}>{this.createUploadCard()}</div>
          <div>{this.createUsersTable()}</div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  users: state.userReducers.users,
  uploadMessage: state.userReducers.uploadMessage
});

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      deleteUser: bindActionCreators(deleteUser, dispatch),
      retrieveAllUsers: bindActionCreators(retrieveAllUsers, dispatch),
      uploadUser: bindActionCreators(uploadUser, dispatch)
    }
  }
};

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);