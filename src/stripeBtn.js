import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

let checkoutTotal = 0;
document.addEventListener('DOMContentLoaded', () => {
  const checkoutBtn = document.getElementsByClassName('StripeCheckout')[0];
  checkoutBtn.addEventListener('click', () => {
    const totalLbl = (document.getElementsByClassName('total'))[0].innerHTML;
    const total = parseInt(totalLbl.replace('Total: $', ''));
    checkoutTotal = (total * 100)
  });  
});

const stripeBtn = () => {
  const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;
  
  const onToken = token => {
    const body = {
      amount: checkoutTotal,
      token: token
  }; 

  axios.post("http://localhost:8000", body).then(response => {
    alert("Payment Success");
  }).catch(error => {
    alert("Payment Error" + error);
    });
  };  
  
  return (
    <StripeCheckout
      label="Checkout" 
      name="ShoppingCart" 
      description="Full cart"
      panelLabel="Checkout"
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};

export default stripeBtn;