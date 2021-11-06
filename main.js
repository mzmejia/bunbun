//console.log('Does this thing work?');

// Line comment

/* 
Extended comment
until you close it
*/


/*

Primary Pseudocode for adding selections to an item to be stored in the cart

- capture the selection from the flavor and store it in a variable
    - the inner html text of the name 
    - the image attached to it

- capture the selection from the glaze and store it in a variable
    -  the inner html text of the glaze name 

- capture the selection from the quantity and store it in a variable
    - the inner html text of the quantity name 
    
- When the quantity is selected, add those elements into a blank state of a cart item

- Update the cart total to be a multiple of the quantity in said item(s) 

- If another item is added, make sure it is ADDED to the cart value, not in replace of it

- Try to reset the value of the variables after maybe? Will it override the current selection?

*/


/* ---------------------------------------------TEST with local storage---------------------------------------------

const storageInput = document.querySelector('.storage')
const text = document.querySelector('.text')
const button = document.querySelector('.button')
const storedInput = localStorage.getItem('textInput')

if (storageInput) {
  text.textContent = storedInput
}

storage.input.addEventListener (input,letter => {
  text.textContent = letter.target.value
})

const saveToLocalStorage = () => {
  localStorage.setItem('textInput', text.textContent)
}

button.addEventListener('click', saveToLocalStorage)

*/












//---------------------------------------------Flavor selection functions---------------------------------------------
/* 
NOTE: I built this page to mimic what I was creating. The entire process of selecting and adding an item takes place
with 3 seperate pages (flavor,glaze, and qunatity). Everytime I would store those variables in one page,
it would automatically be lost when trying to update the element within a cart. Because of this, I have
not tried to add an element to the cart because I could not even get it to update properly. I believe I
have a good idea on how to add a new element, so am planning on working on that as well
*/


//------------------------------------------------------------ Flavor selections

//------------ Variables for original element
function flavOriginal () {
  window.newFlavor = document.getElementById('flavorOriginal').innerHTML;
  console.log("Selected flavor is: " + newFlavor);
  window.newPic = document.getElementById('flavorOriginalPic').getAttribute("src");
  console.log(newPic);
  //Change interior of the cart element
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newFlavor); //change flavor
  cartImage.src = (newPic);
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'block';
  quantityDiv.style.display = 'none';
  
}

//------------ Variables for blackberry element
function flavBlackberry () {
  window.newFlavor = document.getElementById('flavorBlackberry').innerHTML;
  console.log("Selected flavor is: " + newFlavor);
  window.newPic = document.getElementById('flavorBlackberryPic').getAttribute("src");
  console.log(newPic);
  //Change interior of the cart element
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newFlavor); //change flavor
  cartImage.src = (newPic);
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'block';
  quantityDiv.style.display = 'none';
}

//------------ Variables for walnut element
function flavWalnut () {
  window.newFlavor = document.getElementById('flavorWalnut').innerHTML;
  console.log("Selected flavor is: " + newFlavor);
  window.newPic = document.getElementById('flavorWalnutPic').getAttribute("src");
  //Change interior of the cart element
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newFlavor); //change flavor
  cartImage.src = (newPic);
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'block';
  quantityDiv.style.display = 'none';
}

//------------ Variables for pumpkin spice element
function flavPumpkin () {
  window.newFlavor = document.getElementById('flavorPumpkin').innerHTML;
  console.log("Selected flavor is: " + newFlavor);
  window.newPic = document.getElementById('flavorPumpkinPic').getAttribute("src");
  console.log(newPic);
  //Change interior of the cart element
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newFlavor); //change flavor
  cartImage.src = (newPic);
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'block';
  quantityDiv.style.display = 'none';
}

//------------ Variables for caramel pecan element
function flavCaramel () {
  window.newFlavor = document.getElementById('flavorCaramel').innerHTML;
  console.log("Selected flavor is: " + newFlavor);
  window.newPic = document.getElementById('flavorCaramelPic').getAttribute("src");
  console.log(newPic);
  //Change interior of the cart element
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newFlavor); //change flavor
  cartImage.src = (newPic);
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'block';
  quantityDiv.style.display = 'none';
}

//------------ Variables for gluten free element
function flavGlutenFree () {
  window.newFlavor = document.getElementById('flavorGlutenFree').innerHTML;
  console.log("Selected flavor is: " + newFlavor);
  window.newPic = document.getElementById('flavorGlutenFreePic').getAttribute("src");
  console.log(newPic);
  //Change interior of the cart element
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newFlavor); //change flavor
  cartImage.src = (newPic);
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'block';
  quantityDiv.style.display = 'none';
}


//------------------------------------------------------------ Glaze selections


//------------ Variables for none glaze
function glazeNone () {
  window.newGlaze = document.getElementById('glazeNone').innerHTML;
  console.log("Selected glaze is: " + newGlaze);
  //Change interior of the cart element
  document.getElementsByClassName('cartGlaze')[0].innerHTML = ("Glaze: " + newGlaze); //change glaze
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'none';
  quantityDiv.style.display = 'block';
}


//------------ Variables for sugar glaze
function glazeSugar () {
  window.newGlaze = document.getElementById('glazeSugar').innerHTML;
  console.log("Selected glaze is: " + newGlaze);
  //Change interior of the cart element
  document.getElementsByClassName('cartGlaze')[0].innerHTML = ("Glaze: " + newGlaze); //change glaze
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'none';
  quantityDiv.style.display = 'block';
}


//------------ Variables for vanilla glaze
function glazeVanilla () {
  window.newGlaze = document.getElementById('glazeVanilla').innerHTML;
  console.log("Selected glaze is: " + newGlaze);
  //Change interior of the cart element
  document.getElementsByClassName('cartGlaze')[0].innerHTML = ("Glaze: " + newGlaze); //change glaze
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'none';
  quantityDiv.style.display = 'block';
}


//------------ Variables for choco glaze
function glazeChoco () {
  window.newGlaze = document.getElementById('glazeChoco').innerHTML;
  console.log("Selected glaze is: " + newGlaze);
  //Change interior of the cart element
  document.getElementsByClassName('cartGlaze')[0].innerHTML = ("Glaze: " + newGlaze); //change glaze
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'none';
  quantityDiv.style.display = 'block';
}



//------------------------------------------------------------ Quantity selections


//------------ Variables for 1
function quantity1 () {
  window.newQuantity = document.getElementById('quantity1').innerHTML;
  console.log("Selected glaze is: " + newQuantity);
  window.newOrderTotal = document.getElementById('orderTotal').innerHTML;
  window.newOrderTotalNumber = newQuantity * 1;
  window.multiplier = 3;
  window.theOrderTotal = newOrderTotalNumber * multiplier;
  console.log("Order total is: " + theOrderTotal);
  //Change interior of the cart element
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newFlavor + ' x' + newQuantity); //change flavor and quantity
  document.getElementsByClassName('cartOrderTotal')[0].innerHTML = ('Order total: $' + theOrderTotal);
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'none';
  quantityDiv.style.display = 'block';
}


//------------ Variables for 3
function quantity3 () {
  window.newQuantity = document.getElementById('quantity3').innerHTML;
  console.log("Selected glaze is: " + newQuantity);
  window.newOrderTotal = document.getElementById('orderTotal').innerHTML;
  window.newOrderTotalNumber = newQuantity * 1;
  window.multiplier = 3;
  window.theOrderTotal = newOrderTotalNumber * multiplier;
  console.log("Order total is: " + theOrderTotal);
  //Change interior of the cart element
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newFlavor + ' x' + newQuantity); //change flavor and quantity
  document.getElementsByClassName('cartOrderTotal')[0].innerHTML = ('Order total: $' + theOrderTotal);
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'none';
  quantityDiv.style.display = 'block';
}


//------------ Variables for 6
function quantity6 () {
  window.newQuantity = document.getElementById('quantity6').innerHTML;
  console.log("Selected glaze is: " + newQuantity);
  window.newOrderTotal = document.getElementById('orderTotal').innerHTML;
  window.newOrderTotalNumber = newQuantity * 1;
  window.multiplier = 3;
  window.theOrderTotal = newOrderTotalNumber * multiplier;
  console.log("Order total is: " + theOrderTotal);
  //Change interior of the cart element
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newFlavor + ' x' + newQuantity); //change flavor and quantity
  document.getElementsByClassName('cartOrderTotal')[0].innerHTML = ('Order total: $' + theOrderTotal);
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'none';
  quantityDiv.style.display = 'block';
}

//------------ Variables for 12
function quantity12 () {
  window.newQuantity = document.getElementById('quantity12').innerHTML;
  console.log("Selected glaze is: " + newQuantity);
  window.newOrderTotal = document.getElementById('orderTotal').innerHTML;
  window.newOrderTotalNumber = newQuantity * 1;
  window.multiplier = 3;
  window.theOrderTotal = newOrderTotalNumber * multiplier;
  console.log("Order total is: " + theOrderTotal);
  //Change interior of the cart element
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newFlavor + ' x' + newQuantity); //change flavor and quantity
  document.getElementsByClassName('cartOrderTotal')[0].innerHTML = ('Order total: $' + theOrderTotal);
  //Switch over/toggle to the glaze div
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'none';
  quantityDiv.style.display = 'block';
  var showItem = document.getElementById('itemNumber1');
  var hideText = document.getElementById('placeholderText');
  showItem.style.display = 'flex';
  hideText.style.display = 'none';

}





//------------ Show and hide divs - used in the selected elements and the "go back" buttons

function showFlavorDiv() {
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'block';
  glazeDiv.style.display = 'none';
  quantityDiv.style.display = 'none';
}

function showGlazeDiv() {
  var flavorDiv = document.getElementById('mainFlavorDiv');
  var glazeDiv = document.getElementById('mainGlazeDiv');
  var quantityDiv = document.getElementById('mainQuantityDiv')
  flavorDiv.style.display = 'none';
  glazeDiv.style.display = 'block';
  quantityDiv.style.display = 'none';
}





//------------ Change the interior html text to the correct variables (newflavor)
//------------ Test for the flavor portion
function addFlavorTest() {
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newFlavor); //change flavor
  cartImage.src = (newPic);
  //document.getElementsById("cartImage").src=newPic; //change thumbnail picture
}

//------------ Code to combine the quantity and flavor elements into the cart description, as well as the glaze and pic
//------------ It works, but only if the process does not span across multiple pages before being updated in the cart
function addCartDescription() {
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newFlavor + ' x' + newQuantity); //change flavor and quantity
  document.getElementsByClassName("cartImage")[0].src = (newPic); //change thumbnail picture
  document.getElementsByClassName('cartDescription')[0].innerHTML = (newGlaze); //change glaze

}



//---------------------------------------------Failed attempts and some information as to why---------------------------------------------

 /*----Hide and show divs with with code found on stackverflow. I didnt like how it worked, so decided to resturcture it
and use different functions built into each selected Element. Also wanted to give users a chance to go back a Step and used a button to show 
that action*/

/*

function hideMainDiv() {
  var x = document.getElementById("mainFlavorDiv");
  var y = document.getElementById("mainGlazeDiv");
  var z = document.getElementById("mainQuantityDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
  if (x.style.display === "none") {
    y.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

*/


//----Hide and show divs with jquery. Dont understand how to load it, so didnt work. lets use css instead
/*
$("#mainFlavorDiv").on('click', function() {
  $('#mainFlavorDiv').fadeIn();
  $('#mainGlazeDiv').fadeOut();
});
*/






//------------------------------ Old ------------------------------

  
//------------ Attempted to use local storage to create and save variables from other pages
//------------ and then call them in the cart page, but it failed.

/*

var someVarName = "value";
localStorage.setItem("someVarKey", someVarName);

//And in any page (like when the page has loaded), get it like:

var someVarName = localStorage.getItem("someVarKey");


function addFlavor () {
  document.getElementsByClassName('cartDescription')[0].innerHTML = localStorage.getItem(newFlavorItem);
}

function flavOriginal () {
  //newFlavor = document.getElementById('flavorOriginal').innerHTML;
  //localStorage.setItem(newFlavor,newFlavorItem);

function flavOriginal () {
  newFlavorItem = localStorage.setItem(document.getElementById('flavorOriginal').innerHTML),newFlavorItem);
  console.log("Selected flavor is: " + localStorage.getItem(newFlavorItem));
  window.newPic = document.getElementById('flavorOriginalPic');
}

*/



//------------ Attempted to create a new html "flow" page that would hide and show the div of the cart
//------------ so that the variables would not have to be stored and could be accsessed in real time,
//------------ but JS kept saying the function was undefined, even when just trying to use console.log
//------------ CODE from: https://sebhastian.com/javascript-show-hide-div-onclick-toggle/#:~:text=To%20display%20or%20hide%20a,which%20is%20block%20)%20to%20none%20.

/*
var targetDiv = document.getElementById("showOrHideTarget");
var btn = document.getElementById("showOrHide");

function showOrHideDiv () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};

function showOrHideDiv () {
  console.log('received');
}


const targetDiv = document.getElementById("showOrHideTarget");
const btn = document.getElementById("showOrHide");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
*/



//------------ Attempted to loop through the different cards/objects that were within the same class.
//------------ swas unable to get it to write anything in console.log, much less tanslate over content

/*
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', flavor)
} else {
  flavor()
}  
*/

/*
function flavor() {
  var flavorChanger = document.getElementsByClassName('textChanger1'); //make class name flavorSelector
  for (var i = 0; i < flavorChanger.length, i++;) {
    var flavorChange = flavorChanger[i];
    console.log(flavorChange)
    //flavorChange.addEventListener('click',changeFlavor);
  }
}


function changeFlavor(event) {
  console.log(flavorChange)
}
*/

/*
function ultimateChange() {
  function changeTheInnerText() {
    var textChange = document.getElementsByClassName('textChanger1')[0].innerHTML;
    return textChange;
  }
    function cartItemCreatorFlavor1() {
      document.getElementsByClassName('cartDescription')[0].innerText = textChange;
    }
}
*/

/*
$('div.jsTest').click(function(){
  GetContent("xxx");
});
*/



//------------ Attempted to select the inner text within each class to be stored as their own variable
//------------ but was unable to make it "stick". Continued to result in undefiened. Tried to follow along with pseudocode

/*
function cartItemCreatorGlaze() {
  var glazeItem = document.getElementsByClassName('card').innertext
}

function cartItemCreatorQuantity() {
  var quantityItem = document.getElementsByClassName('card').innertext
}

function cartItemAdd() {
  //select the specific elements within a cart card and change the inner html to match the innerhtml from these variables
  //add the item to the cart
  //can we reset the variables from here?
//}
*/




//------------ Undecipherable failed attempts

/*

var itemSelector = document.getElementByClassName('split right') {
  //var title = itemSelector.innertext
  console.log(itemSelector)
}
*/


/*
function itemCreatorFlavor() {
  var selectTheFlavor = document.getElementByClassName('NAME')
  var selectedFlavor = selectTheFlavor.innertext
  console.log(selectedFlavor)
}
*/

//var TestClick = document.getElementByClassName('card')
//console.log(TestClick)

/*
function addToCartClicked(event) {
  var button = event.target
  var flavorItem = button.parentElement.parentElement
  var title = shopItem.getElementByClassName('column')[0].innertext
  console.log(title)
}
*/

/*
function cartItemCreatorFlavor() {
  console.log('hello world');
  //document.write("welcome to Javatpoint"); 
}
*/

/*
function cartItemCreatorFlavor() {
  var testItem = document.getElementsByClassName('jsTest')[0].innerHTML;
  console.log(testItem);
  //document.write("welcome to Javatpoint"); 
}
*/

/*
function changeTheInnerText() {
  var textChange = document.getElementsByClassName('textChanger1')[0].innerHTML;
  console.log(textChange);
  cartItemCreatorFlavor1();
}
*/
//create a button that will change the interior text, call the item creator function 1, and see if it will rplicate

/*
//this one works!!! attached straight to the div of the actual element and it prints the current html element, replace the text with the text from the textChange
function cartItemCreatorFlavor1() {
  var flavorChange = document.getElementsByClassName('textChanger1')[1].innerHTML;
  var quantityChange = document.getElementsByClassName('textChanger2')[0].innerHTML;
  //var glazeChange = document.getElementsByClassName('textChanger3')[0].innerHTML;
  document.getElementsByClassName('cartDescription')[0].innerHTML = flavorChange + " x" + quantityChange;
  //document.getElementsByClassName('cartGlaze')[0].innerHTML = glazeChange;

  //var testItem1 = document.getElementsByClassName('cartDescription')[0].innerHTML;
  //console.log(testItem1);
  //document.write("welcome world"); 
}
*/

/*
function flavor() {
  if (document.getElementById('number1').innerHTML = 'Original') {
    console.log('yeah orginal worked')
    var newFlavor = document.getElementById('number1').innerHTML;
    console.log(newFlavor)
  } else {
    console.log('no man')
  } 
}

function flavor2() {
  if (document.getElementById('number2').innerHTML = 'Blackberry') {
    console.log('yeah blackberry worked')
    var newFlavor = document.getElementById('number2').innerHTML;
    console.log(newFlavor)
  } else {
    console.log('no man')
  } 
}
*/