import React from 'react';
import './cart.css';
import StripeBtn from '../../stripeBtn';


class Cart extends React.Component {
    componentDidMount() {
        //Removes inline Styling on Stripe button element onload
        const stripeStyle = document.getElementsByClassName('StripeCheckout')[0];
        const spanStyle = stripeStyle.children[0];
        spanStyle.style = '';
        stripeStyle.style = '';
        stripeStyle.background = '';
        //Removes the oncllick styles added by Stripe
        stripeStyle.addEventListener('click', () => {
            spanStyle.style = '';
            stripeStyle.style = '';
            stripeStyle.background = '';
        });
        //Removes Individual Items from cart
        const removeCartItemButtons = document.getElementsByClassName('cart-remove');

        for (let i = 0; i < removeCartItemButtons.length; i++) {
            let button = removeCartItemButtons[i];
            button.addEventListener('click', (event) => {
                let buttonClicked = event.target;
                buttonClicked.parentElement.remove();
                updateCart();
            });
        }
        //Remove entire cart
        const parent = document.getElementsByClassName('cart-item');
        const styles = document.styleSheets[2].cssRules[0].style;
        const clearButton = document.getElementById('cart-clear');
        clearButton.addEventListener('click', () => {
            while (parent.length > 0) {
                parent[0].remove();
                updateCart();
            }
            if (parent.length === 0) {
                styles.setProperty("display", "none");
            }
        });
        //Checks for Quantity changes
        const quantity = document.getElementsByClassName('quantity');
        for (let i = 0; i < quantity.length; i++) {
            let input = quantity[i];
            input.addEventListener('change', (event) => {
                let target = event.target;
                if (isNaN(target.value) || target.value <= 0) {
                    target.value = 1;
                }
                updateCart();
            });
        }
        //Adding to cart
        const items = document.getElementsByClassName('item');
        for (let i = 0; i < items.length; i++) {
            let button = items[i];
            button.addEventListener('click', (event) => {
                let buttonClicked = event.target;
                let item = buttonClicked.parentElement;
                let title = item.getElementsByClassName('title')[0].innerText;
                let price = item.getElementsByClassName('prices')[0].innerText;
                let img = item.getElementsByClassName('img')[0].src;
                addItemToCart(title, price, img);
                updateCart();
            });
        }
        function addItemToCart(title, price, img) {
            let cartRow = document.createElement('div');
            cartRow.classList.add('cart-item');
            let cartItem = document.getElementById('cart');
            let cartTitle = document.getElementsByClassName('cart-title');
            for (let i = 0; i < cartTitle.length; i++) {
                if (cartTitle[i].innerText === title) {
                    cartTitle[i].parentElement.getElementsByClassName('quantity')[0].value++;
                    return;
                }
            }
            const cartRowContents = `
                <img src="${img}" alt="no img"></img>
                <h3 class="cart-title">${title}</h3>
                <p class="price">${price}</p>
                <input class="quantity" type="number" min="1" max="10" value="1"/>
                <button class="cart-remove">X</button>`;
            cartRow.innerHTML = cartRowContents;
            cartItem.insertBefore(cartRow, document.getElementsByClassName('cart-fixed-bottom')[0]);
            cartRow.getElementsByClassName('cart-remove')[0].addEventListener('click', (event) => {
                let buttonClicked = event.target;
                buttonClicked.parentElement.remove();
                updateCart();
            });
            cartRow.getElementsByClassName('quantity')[0].addEventListener('change', (event) => {
                let target = event.target;
                if (isNaN(target.value) || target.value <= 0) {
                    target.value = 1;
                }
                updateCart();
            });
        }
        //Updates Cart total
        function updateCart() {
            const prices = document.getElementsByClassName('price');
            const quantity = document.getElementsByClassName('quantity')
            const totals = document.getElementsByClassName('total');
            let total = 0
            let cartQuantity = 0;
            for (let i = 0; i < prices.length; i++) {
                let values = parseFloat(prices[i].innerText) * quantity[i].value;
                total = total + values;
                if (quantity[i].value >= 1) {
                    cartQuantity += quantity[i].valueAsNumber;
                }
            }
            if (document.getElementsByClassName('cart-item').length >= 0) {
                document.getElementsByClassName('nav-links')[0].innerText = `Cart ${cartQuantity}`;
            }
            totals[0].innerHTML = "Total: $" + total.toFixed(2);
        }
    }

    render() {
        return (
            <div id="cart">
                <div className="cart-fixed-bottom">
                    <div id="checkout"><StripeBtn /></div>
                    <button id="cart-clear">Clear Cart</button>
                    <h3 className="total">Total: $0.00</h3>
                </div>
            </div>
        );
    }
}

export default Cart;
