import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    //This cpould be a functional components

    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate');
    }
    render(){
        const summary = Object.keys(this.props.ingredients)
        .map(igkey => {
            return (
                <li key = {igkey}>
                    <span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {this.props.ingredients[igkey]}
                </li>
            );
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A Delicious burger with following ingredients :-</p>
            <ul>
                {summary}
            </ul>
            <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout ?</p>
            <Button btnType= 'Danger' clicked = {this.props.purchaseCancelled}>Cancel</Button>
            <Button btnType= 'Success' clicked = {this.props.purchaseContinue}>Continue</Button>
        </Aux>
        
    );
    }
}
export default OrderSummary;