import React, { Component } from 'react';
import classes from './Modal.css'
import Aux from '../../../hoc/Auxilary/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(){
        return this.props.show === true;
    }
    componentWillUpdate(){
        console.log('[Modal] WillUpdate');
    }
    render(){
        return(
            <Aux>
                <Backdrop show = {this.props.show} clicked = {this.props.ModalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>   
        );    
    }
}
export default Modal;