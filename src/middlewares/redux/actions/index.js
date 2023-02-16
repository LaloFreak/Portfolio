import { RESET_OPTION, SET_OPTION } from "../../misc/consts";

export function setOption(e){
    return{
        type: SET_OPTION,
        payload: e
    }
}

export function resetOption(){
    return { type: RESET_OPTION }
}