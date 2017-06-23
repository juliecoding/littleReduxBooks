export function selectBook(book) {
    //selectBook is an actioncreator it needs to return an action, an object with a type property 
    //Usually 2 values: a type and a payload (piece of data that describes the action undertaken)
    return {
        type: 'BOOK_SELECTED', //All caps
        payload: book
    }
}



//Created on an event
//An action creator is a function that returns an action but also an object... that is sent to all reducers 

//An action creator is just a function that returns an action, 
//and an action is just an object that flows through all of our different reducers
//Reducers can then use that action to produce a different value for its particular piece of state.
//Our goal here is to give our user the ability to clikc on a book and see more information about it.