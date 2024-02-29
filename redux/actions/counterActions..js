import { INCREASE, DECREASE, RESET } from "./actionTypes";

//actions are objects

//action creators are function that returns objects

export const incerase=()=>{
    return{
        TYPE:INCREASE
    }
}

export const decrease=()=>{
    return{
        TYPE:DECREASE
    }
}

export const reset=()=>{
    return{
        TYPE:RESET
    }
}