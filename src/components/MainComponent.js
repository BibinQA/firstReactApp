import React, { Component } from 'react';

import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent'
import { DISHES } from '../shared/dishes.js'
import Header from './HeaderComponent'
import Footer from './FooterComponent';
//import './App.css';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };

    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }
    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        );
    }

}

export default Main;
