import { DECREMENT_ACTION , INCREMENT_ACTION } from "./counter.action";

export function counterReducer(currentState = 100 , action){
    const payload = action.payload;
    const type = action.type;
    console.log("counterReducer" , currentState , action)

    if (type === INCREMENT_ACTION.type){
        return currentState + 10;

}

if(type === DECREMENT_ACTION.type){
    return currentState - 10;
}

return currentState;

}