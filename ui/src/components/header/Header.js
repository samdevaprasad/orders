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
            <strong className="white-text">Walmart InHome Solutions</strong>
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
                    <MDBDropdownItem href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Notifications</MDBDropdownItem>
                    <MDBDropdownItem href="https://www.youtube.com/watch?v=oHg5SJYRHA0">History</MDBDropdownItem>
                    <MDBDropdownItem href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Settings</MDBDropdownItem>
                    <MDBDropdownItem href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Logout</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
        </MDBNavbar>
        );
    }
}
