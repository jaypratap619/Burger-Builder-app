import React, { Component } from 'react';
import Aux from '../Auxilary/Auxilary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerCloseHandle = ()=> {
        this.setState({showSideDrawer: false})
    }
    SideDrawerToggleHandler = () =>{
        this.setState((prevState) => { return {showSideDrawer: !prevState.showSideDrawer}})
    }
    render() {
        return (
            <Aux>
                <Toolbar drawToggleClicked = {this.SideDrawerToggleHandler}/>
                <SideDrawer show = {this.state.showSideDrawer} closed = {this.SideDrawerCloseHandle} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;