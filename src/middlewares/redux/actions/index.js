import { RESET_OPTION, SET_OPTION, SET_LANGUAGE } from "../../misc/consts";

export function setOption(e){
    return{
        type: SET_OPTION,
        payload: e
    }
}

export function resetOption(){
    return { type: RESET_OPTION }
}

export function setLanguage(e){
    return { 
        type: SET_LANGUAGE,
        payload: e
    }
}