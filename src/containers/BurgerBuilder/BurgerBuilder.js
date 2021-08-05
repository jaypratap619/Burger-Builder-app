import React, { Component } from 'react';
import Aux from './../../hoc/Auxilary/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 0.5,
    meat: 0.4,
    cheese: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updateParchaseState = ingredients => {
        const sum = Object.keys(ingredients)
            .map(igkey => ingredients[igkey])
            .reduce((sum, el)=> sum = sum+ el, 0);
        this.setState({purchasable: sum >0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICE[type];
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updateParchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const newCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const priceSubtraction = INGREDIENT_PRICE[type];
        const newPrice = oldPrice - priceSubtraction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updateParchaseState(updatedIngredients);
    }

    purchaseHandler = () =>{
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing: false})
    }
    purchaseContinueHandler = () =>{
        alert('You Continue');
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients = {this.state.ingredients} 
                        purchaseCancelled = {this.purchaseCancelHandler}
                        purchaseContinue = {this.purchaseContinueHandler}
                        price = {this.state.totalPrice}
                        />
                </Modal >
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}  
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;