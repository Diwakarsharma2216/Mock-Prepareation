//Complete the reducer function logic inside the curly braces {}

import { CHANGE_THEME } from "./actionTypes";

// the theme initstate shouldbe light
const initstate={
    theme:"light"
}
const themeReducer = (state=initstate,action) => {
   switch(action.type){
    case CHANGE_THEME:{
        return {
            theme:action.payload
        }
    }
    default:{
        return state
    }
   }
};

export { themeReducer };
