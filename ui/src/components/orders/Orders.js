import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCol  } from 'mdbreact';

import { retrieveOrders, uploadOrder } from './../../actions/orderActions';
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

  clearUploadMessage() {
    this.setState({ uploadMessageText: '' });
  }

  componentDidUpdate(prevProps) {
    // if we recieve a different upload message from the server make sure to retrieve latest list of orders
    if (this.props.uploadMessage !== prevProps.uploadMessage) {
      this.props.actions.retrieveOrders();
      this.setState({ uploadMessageText: this.props.uploadMessage });
      // removes the success or error message after 5 seconds.  future could come up with a better solution.
      setTimeout(() => { this.clearUploadMessage() }, 5000);
    }
  }

  componentWillMount(){
    this.props.actions.retrieveOrders();
  }

  createDropDownOptions = options => {
    const optionsList = [];
    options.map(option => {
      optionsList.push(<option key={`${option.id}`} value={`${option.id}`}>{option.name}</option>);
    });
    return optionsList;
  }


  createOrdersTable = () => {
    const { orders } = this.props;
    const ordersList = [];
    orders.map(order => {
      ordersList.push(<tr key={`${order.id}`}>
        <td className={styles.orderTableRow}>{order.user_name}</td>
        <td className={styles.orderTableRow}>{order.item_name}</td>
      </tr>);
    });
    return (
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th className={styles.orderTableHeader}>User</th>
            <th className={styles.orderTableHeader}>Item</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {ordersList}
        </MDBTableBody>
      </MDBTable>
    );
  }

  // function that creates the html template for the uploading an order
  createUploadCard = () => {
    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardBody>
            <MDBCardText>Upload a new order</MDBCardText>
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
    if (this.state.userSelected !== 0 && this.state.itemSelected !== 0){
      this.props.actions.uploadOrder(this.state.itemSelected, this.state.userSelected);
    }
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
          <div className={styles.cardContainer}>{this.createUploadCard()}</div>
          {this.createOrdersTable()}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  items: state.itemReducers.items,
  orders: state.orderReducers.orders,
  uploadMessage: state.orderReducers.uploadMessage,
  users: state.userReducers.users
});

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      retrieveOrders: bindActionCreators(retrieveOrders, dispatch),
      uploadOrder: bindActionCreators(uploadOrder, dispatch)
    }
  }
};

export const Orders = connect(mapStateToProps, mapDispatchToProps)(OrdersComponent);