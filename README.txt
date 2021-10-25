UPDATED READ ME
10/24/21

Attempted to work with JS and create variables within pages that were then directly manipulated into a blank state of a card to be added to my cart, but I ran into a lot of difficulties.

I was not able to make my script work, and faced countless “undefined” errors with my functions. I started to realize some of the mistakes I was making (ex. Duplicating a function and keeping it the same function name as the original, even though I made the original into a comment), but the hardest difficulty I faced was storing the variables that were selected.

My site is built into 3 distinct pages for creating an order, the flavor page (houses the flavor name and thumbnail image), the glaze page (houses the selection of glaze), and the quantity page (houses the quantity which in turn would be used to effect the total of a cart). I was able to manipulate a blank cart item with choices (i.e. select the original flavor, add it to the cart, and see the cart items innerHTML update to the innerHTML of the original selection), but was unable to store the variables and access those selected values once a new page loaded. 

I attempted to use the following methods: local and global variables - “window. Var”, local storage methods (.setItem and .getItem), for loops after calling all the elements of a class, event and event listeners to trigger actions from one function directly into the function effecting the cart, etc. I even tried to recreate the process by making it a one pager that had divs interchanging with one another and housing a cart overlay at all times, but just keep it hidden until it was triggered (thinking that way it would not have to be refreshed), but was unable to get that to work. All in all, this has been a relatively frustrating assignment but I am determined to solve it. 

I created an example page showcasing that the code I wrote does in fact select, store, and update a cart item (found in flow.html), and a test page I worked on (newcarttest.html - the code related to this page is currently commented so the interactivity will not work) and I am hoping it can give you a better understanding of what I attempted to do. Also included comments throughout my JS code to aid in understanding. I kept most of my original failures of code just in case there is a chance they could be salvaged, or I realized I was on the right track.



------------------------------------------------------------------------------------------------


ORIGINAL README
10/16/21

Help with the flows:

1. Select and customize product
  - Start a new order
  - Select original
  - Select sugar milk glaze
  - Select a batch of 3
  - Proceed to checkout
2. Walk through checkout and recieve confirmation
    - Fill out details
    - Fill out address
    - Fill out payment
    - Review information submitted
    - Place order
    - Recieve confirmation




Extra work done:

- I wanted to make everything as interactive as possible
  - Normal, hover, active, and past states for:
      - links
      - buttons
      - product cards (just hover)
      - internal navigation buttons (no hover states, just clickable)
      - form elements
          - input (including focus)
          - selection (including focus)
- I added multiple pages to the order and checkout flow
    - I wanted to stay true to the nature of my prototype and take the user on an actual walkthrough of the project
    - To clarify, there are no extra flows for customizing a product

