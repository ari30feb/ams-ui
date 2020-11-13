import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavItem, NavbarToggler, Jumbotron, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen : false
        };
    }
    toggleNav(){

        this.setState({
            isNavOpen : !this.state.isNavOpen
        })

    }
    render(){
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">AMS</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar> 
                            <Navbar navbar>
                                <UncontrolledDropdown>
                                    <DropdownToggle nav caret>
                                        Field
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            Add
                                        </DropdownItem>
                                        <DropdownItem>
                                            Info
                                        </DropdownItem>
                                        <DropdownItem>
                                            Timeline
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown>
                                    <DropdownToggle nav caret>
                                        Activity
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            Add
                                        </DropdownItem>
                                        <DropdownItem>
                                            Update
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown>
                                    <DropdownToggle nav caret>
                                        Crop
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            Add
                                        </DropdownItem>
                                        <DropdownItem>
                                            Update
                                        </DropdownItem>
                                        <DropdownItem>
                                            Assign
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown>
                                    <DropdownToggle nav caret>
                                        Vehicle
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            Add
                                        </DropdownItem>
                                        <DropdownItem>
                                            Update
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Navbar>
                            <NavbarText>
                             Login
                            </NavbarText>
                        </Collapse>
                    </div>
                    
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Agri Management System </h1>
                                <p>This is for managing farms and tracking activities</p>
                            </div>
                        </div>
                     </div>
                </Jumbotron>
                
            </React.Fragment>
            
            
        );
    }
}
export default Header;