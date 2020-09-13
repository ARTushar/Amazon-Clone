import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route, withRouter } from 'react-router-dom';
import Checkout from './Checkout';
import { connect } from 'react-redux';
import { addToBasket } from '../redux/ActionCreators';
import { BasketContext, AddToBasketContext } from '../context/context'

const mapStateToProps = state => {
    return {
        basket: state.basket
    }
};

const mapDispatchToProps = dispatch => ({
    addToBasket: (item) => dispatch(addToBasket(item))
});


class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="main">
                <Header basketCount={this.props.basket.items.length}/>
                <Switch>
                    <Route path="/checkout">
                        <BasketContext.Provider value={this.props.basket}>
                            <Checkout />
                        </BasketContext.Provider>
                    </Route>
                    <Route path="/">
                        <AddToBasketContext.Provider value={this.props.addToBasket}>
                            <Home />
                        </AddToBasketContext.Provider>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));