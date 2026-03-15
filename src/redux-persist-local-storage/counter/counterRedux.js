import { configureStore } from "@reduxjs/toolkit";

const ACTION_TYPE = {
    INCREMENT : "INCREMENT",
    DECREMENT : "DECREMENT"
}

function increaseCount(payload={}){
    return{
        type : ACTION_TYPE.INCREMENT,
        payload
    }
}

function decreaseCount(payLoad={}){
    return{
        type : ACTION_TYPE.DECREMENT,
        payLoad
    }
}

function countReducer(prevState={count:0}, action){
    switch(action.type)
    {
        case ACTION_TYPE.INCREMENT:
            return({count : prevState.count+1});
        case ACTION_TYPE.DECREMENT:
            return({count : prevState.count-1});
        default:
            return(prevState);
    }
}

export {increaseCount, decreaseCount}
export default countReducer;