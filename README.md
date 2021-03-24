## Making a plan

1) Decide on text and add to index.html
2) Create button with ID
    -tells us when to launch the quiz (when user clicks)
3) TDD JS countsAsYes function 
    -takes user input (string), outputs Boolean
    -"yesss" should return True, "Nah" should return False, etc.
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
6) Style page - intro, three sections, image, headers, unordered list, ordered list, fonts, color scheme (coolors.co)
7) Stretch goals

