## Making a plan

1) Decide on text and add to index.html
2) Create button with ID
    -tells us when to launch the quiz (when user clicks)
3) TDD JS countsAsYes function 
    -takes user input (string), outputs Boolean
    -"yesss" should return True, "Nah" should return False, etc.

    Style page - intro, three sections, image, headers, unordered list, ordered list, fonts, color scheme (coolors.co)
4) Import countsAsYes, reference DOM elements & add event listener to button to start quiz
5) Run quiz
    a) Confirm user wants to take quiz
        -use confirm call
        -if not, return
    b) Ask user's name
        -use prompt call
    c) Three yes/no q's 
        -use prompt calls
        -use countsAsYes to determine if correct
        -track # of correct answers
            -test with console.log
    d) Alert user quiz is complete and print # correct answers with message
6) Stretch goals



<!-- 1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps -->
