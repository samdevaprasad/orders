import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBCardText, MDBCol } from 'mdbreact';
import { deleteItem, retrieveAllItems, uploadItem } from './../../actions/itemActions';
import styles from './Items.module.css';

// component contains the ability to view, upload and delete Walmart InHome items
class ItemsComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputItemValue: '',
      uploadMessageText: ''
    }
  }

  componentDidUpdate(prevProps) {
    // if we recieve a different upload message from the server make sure to retrieve latest list of items
    if (this.props.uploadMessage !== prevProps.uploadMessage) {
      this.props.actions.retrieveAllItems();
      this.setState({ uploadMessageText: this.props.uploadMessage });
    }
  }

  componentWillMount(){
    // initial retrieve of items right before component mounts
    this.props.actions.retrieveAllItems();
  }
  
  // function that creates the html template for the upload item card
  createUploadCard = () => {
    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardBody>
            <MDBCardText>Upload or delete an item</MDBCardText>
            <MDBInput label="Enter item name here" value={this.state.inputItemValue} onChange={this.updateItemValue}/>
            <MDBBtn color='primary' className={styles.uploadBtn} onClick={this.uploadItem}>Upload</MDBBtn>
            <MDBBtn color='danger' className={styles.uploadBtn} onClick={this.deleteItem} href="#">Delete</MDBBtn>
            {this.state.uploadMessageText}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }

  // function that creates the item results table
  createItemsTable = () => {
    const { items } = this.props;
    const itemsList = [];
    // sort items alphabetically desc order
    items.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    })
    items.map(item => {
      itemsList.push(<tr key={`${item.id}`}>
        <td className={styles.itemTableRow}>{item.name}</td>
      </tr>);
    });
    return (
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th className={styles.itemTableHeader}>Items (Sorted Alphabetically)</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {itemsList}
        </MDBTableBody>
      </MDBTable>
    );
  }

  // api call to delete item from db
  deleteItem = () => {
    this.props.actions.deleteItem(this.state.inputItemValue);
  }

  // api call to upload item to db
  uploadItem = () => {
    this.props.actions.uploadItem(this.state.inputItemValue);
  }

  // set the state of the value in the item upload textbox
  updateItemValue = evt => {
    this.setState({ inputItemValue: evt.target.value, uploadMessageText: '' });
  }

  render(){
    return (
      <div className={styles.itemsContainer}>
        <div className={styles.row}>
          <div className={styles.cardContainer}>{this.createUploadCard()}</div>
          <div>{this.createItemsTable()}</div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  items: state.itemReducers.items,
  uploadMessage: state.itemReducers.uploadMessage
});

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      deleteItem: bindActionCreators(deleteItem, dispatch),
      retrieveAllItems: bindActionCreators(retrieveAllItems, dispatch),
      uploadItem: bindActionCreators(uploadItem, dispatch)
    }
  }
};

export const Items = connect(mapStateToProps, mapDispatchToProps)(ItemsComponent);