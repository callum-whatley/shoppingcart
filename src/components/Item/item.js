import React from 'react';
import './item.css';

class Item extends React.Component {

    render() {
        return (
        <div>
            <div className="item">
                <img className="img" src="/img/healthy.jpg" alt="no img"></img>
                <h2 className="title">Avocado</h2>
                <h3 className="prices">1.00</h3>
                <p>Delicious super food</p>
                <button className="cart-add">Add to Cart</button>
            </div>
            <div className="item">
                <img className="img" src="/img/healthy.jpg" alt="no img"></img>
                <h2 className="title">Health Food</h2>
                <h3 className="prices">2.00</h3>
                <p>Stay healthy with these items</p>
                <button className="cart-add">Add to Cart</button>
            </div>
            <div className="item">
                <img className="img" src="/img/candy.jpg" alt="no img"></img>
                <h2 className="title">Candy</h2>
                <h3 className="prices">3.00</h3>
                <p>Yummy Yummy</p>
                <button className="cart-add">Add to Cart</button>
            </div>
            <div className="item">
                <img className="img" src="/img/hotdog.jpg" alt="no img"></img>
                <h2 className="title">Hotdog</h2>
                <h3 className="prices">4.00</h3>
                <p>Almost 100% not dog</p>
                <button className="cart-add">Add to Cart</button>
            </div>
            <div className="item">
                <img className="img" src="/img/hotdog.jpg" alt="no img"></img>
                <h2 className="title">Wiener</h2>
                <h3 className="prices">5.00</h3>
                <p>We are not liable</p>
                <button className="cart-add">Add to Cart</button>
            </div>
            <div className="item">
                <img className="img" src="/img/hotdog.jpg" alt="no img"></img>
                <h2 className="title">Frankfurter</h2>
                <h3 className="prices">6.00</h3>
                <p>Its German</p>
                <button className="cart-add">Add to Cart</button>
            </div>
        </div>
        );
    }
}

export default Item;