// Event Listener
document.getElementById("placeOrder").addEventListener("click", placeOrder);

// Event Function
function placeOrder() {
  let size = document.getElementById("size").value;
  let topping1 = document.getElementById("topping1").value;
  let topping2 = document.getElementById("topping2").value;

  let orderInfo = `You have ordered a ${size.toLowerCase()} pizza with: \n  
    <ul>
    <li> ${topping1.toLowerCase()}</li>
    <li>${topping2.toLowerCase()} </li>
    </ul>
    Thank you for ordering from <a href='https://www.pizza73.com/store/1/delivery'>Pizza 73</a>! your pizza will be ready in 20 minutes!
    <p id="pizza"><img width="300px" src="img/Pizza.avif"/></p>`;

  document.getElementById("orderInfo").innerHTML = orderInfo;
}

/*
  Check Your Understanding:

  Part A:
  - Update the above code so it is a pizza order.
  - There are 3 inputs: one for the size, and two for toppings.
  - Output should be displayed on the website as "Your ______ pizza with _____ and ______ will be ready in 20 minutes!"

  Part B: Update the previous section so that 
  - the toppings appear as an unordered list like this:
  
      You have ordered a pizza with:
          - ham
          - pineapple
          
      Thank you for ordering from Pizza 73! You pizza will be ready in 20 minutes.
      
  - an image of a pizza appears under the order output

  - have the "Pizza 73" be a hyperlink that takes the user to Pizza 73's homepage.

  -innerHTML can add text as well as tags
  -e.g. document .getElementById("thing").innerHTML = "<p>Hello <a href='?'> WORLD </a> </P>"
  
*/
