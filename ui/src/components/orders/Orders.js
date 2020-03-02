import React, { Component } from "react";
import { connect } from 'react-redux';
import { MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBCardText, MDBCol } from 'mdbreact';

import styles from './Orders.module.css';

// component contains the ability to view, upload and delete Walmart InHome orders
class OrdersComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemSelected: 0,
      uploadMessageText: '',
      userSelected: 0
    }
  }

  createDropDownOptions = options => {
    const optionsList = [];
    options.map(option => {
      optionsList.push(<option key={`${option.id}`} value={`${option.id}`}>{option.name}</option>);
    });
    return optionsList;
  }

  // function that creates the html template for the upload item card
  createUploadCard = () => {
    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardBody>
            <MDBCardText>Upload or delete an item</MDBCardText>
            <div className={styles.orderSelectDropDown}>
              <select className="browser-default custom-select" onChange={this.updateSelectedUser}>
                <option>Choose your user</option>
                {this.createDropDownOptions(this.props.users)}
              </select>
            </div>
            <div className={styles.orderSelectDropDown} onChange={this.updateSelectedItem}>
              <select className="browser-default custom-select">
                <option>Choose your item</option>
                {this.createDropDownOptions(this.props.items)}
              </select>
            </div>
            <MDBBtn color='primary' className={styles.uploadBtn} onClick={this.uploadUser}>Upload</MDBBtn>
            {this.state.uploadMessageText}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }

  uploadUser = () => {
    
  }

  updateSelectedItem = evt => {
    this.setState({ itemSelected: evt.target.value });
  }

  updateSelectedUser = evt => {
    this.setState({ userSelected: evt.target.value });
  }



  render(){
    return (
      <div>
        <div className={styles.row}>
          {this.createUploadCard()}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  users: state.userReducers.users,
  items: state.itemReducers.items
});


export const Orders = connect(mapStateToProps, null)(OrdersComponent);