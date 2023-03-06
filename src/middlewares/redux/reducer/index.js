import { RESET_OPTION, SET_OPTION, SET_LANGUAGE } from "../../misc/consts"

const initialState = {
    option: 'programation, design & sound',
    language: 'EN'
}


export default function rootReducer(state = initialState, action){
    switch(action.type){
        case SET_OPTION:
            return {
                ...state,
                option: action.payload
            }
        case RESET_OPTION:
            return {
                ...state,
                option: 'programation, design & sound'
            }
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        default:
            return {...state}
    }
}