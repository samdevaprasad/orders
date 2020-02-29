import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

export class Header extends Component {
    state = {
    isOpen: false
    };

    toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
    return (
        <MDBNavbar color="blue" dark expand="md">
        <MDBNavbarBrand>
            <strong className="white-text">Walmart InHome Delivery Solutions</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
            </MDBNavbarNav>
            <MDBNavbarNav right>

            <MDBNavItem>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="https://venmo.com/sammydollabills">Notifications</MDBDropdownItem>
                    <MDBDropdownItem href="https://venmo.com/sammydollabills">History</MDBDropdownItem>
                    <MDBDropdownItem href="https://venmo.com/sammydollabills">Settings</MDBDropdownItem>
                    <MDBDropdownItem href="https://venmo.com/sammydollabills">Logout</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
        </MDBNavbar>
        );
    }
}
