import { RESET_OPTION, SET_OPTION } from "../../misc/consts"

const initialState = {
    option: 'programation, design & sound',
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
        default:
            return {...state}
    }
}