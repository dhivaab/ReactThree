import {Types} from '../actions/types'

const INITIAL_STATE = {
    users: [],
    loading: false
}

export default function users(state=INITIAL_STATE, action) {
    switch(action.type) {
        case Types.GET_USERS_SUCCESS: {
            return {
                ...state,
                loading: true,
                users: action.users
            }
        }    
        case Types.GET_USERS_REQUEST: {
            return {
                ...state,
            }
        }
    
        default: {
            return state;
        }       
    }
}