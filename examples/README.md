## Review
`$('_selector_')` vs. `querySelectorAll('_selector_')`
  - both 'selectors' are doing the same thing
  - $ is bringing in entire new library with making it a jQuery element
    - returns jq wrapped elements (returns as an array)
    - has jquery methods attached to it (like `.addClass()`, `.removeClass()`, `.append()`, etc.)
    - cuts down on a lot of code; jq reads more like a sentence and vanilla js requires a lot more code..
    ```js
      //vanilla JS:
        var divs = document.querySelectorAll('div');
        for (var i = 0; i < divs.length; i++) {
          divs[i].classList.add('coolDiv');
        }
      //jQuery:
        $('div').addClass('coolDiv');
    ```
    **JQuery good for:**
    1. handy for event listeners (like in example above--much more simple conceptually and in writing out code)
      - cutting out that for loop to manipulate elements all at once...
    2. DOM manipulation (grabbing elements, adding/removing elements from DOM)

- "Back Button" (hw day14):
  - ```js
    functio renderAlbum(albumNumber){
      $('#container').empty();
      //now make a section to put into the DOM
      var album = $('<section class="album"></section>'); //just putting the album back in to dom
    }
    ```
## AJAX
  - asynchronous javascript and xml
  - more of a concept than it's explicit definition
  - set of practices and guidelines of how we build web applications
  - why use?
    - data array of objets that we used in previous assignments
    - send/receive some data from a server somewhere and then I can do something with that data once it's accessed
  - **VERBS** - _CRUD_
    1. Create
      - POST
    2. Read
      - GET
        - technically, when you go to Etsy.com, you're making a 'get request' to etsy (asking for the data that etsy has)
        - check out _"Network"_ tab in chrome editor
          - select specific name and then view "response" tab
          - when it gets a response back from the server, it will render the get-request in the HTML
          - header tab will show the "Request Method:" as "GET"
    3. Update
      - PUT
    4. Delete
      - DELETE
      - CRUD apps --can do all 4 verbs with data
        - HTTP: counterparts (POST, GET, PUT, DELETE)
        - eve
    - **API**
      - Application interface
      - Refers (usually) to the way the computer can interact with some data (for this application)
      - Usually make API public
        - etsy makes their API data public so when the user goes to the webpage, the user can view the info associated with an item (via API's public status using the GET requests)

## JSON
  - JavaScript Object Notation
    - a way of passing data around (giving/receiving data) in JS
  - Defining characteristics:
    - _keys_ are always in "double quotes"
    - does not allow trailing commas at end of objects
  - accessing properties of an {}
    - dot.notation or bracket[notation]

  - EVENT LOOP
    - the call stack (data structure that store the info of where we are in the js code)
      - the program can run one code at a time
      - blocking
        - slow things on stack could be blocked
    - ...watch the video on Jess' notes for today...
