//Pseudocode:
//Calculate the total cost using the following calculatins
//Multiply Price of Refill times number of refills
//Subtract $10 if couplon is true
//Give a 25% discount if subscription is true
// Both subtract $10 and apply 25% discount if both coupon and discount are true


function finalCost({ pricePerRefill,refills, subscription,coupon }) {
  if (subscription && coupon)
    return ((pricePerRefill*refills) * 0.75) - 10;
  else if (subscription)
    return (pricePerRefill*refills) * 0.75;
  else if (coupon)
    return (pricePerRefill*refills) - 10;
  else
    console.log("Unable to calculate total");
}

  
const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
}

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
}


console.log ("Your grand total is $" + finalCost(rocky));


