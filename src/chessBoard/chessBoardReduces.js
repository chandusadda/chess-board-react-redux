import { CREATE_TABLE, CLICK_TABLE } from './chessBoardTypes'

const initialState = {id:'0000'}

const chessBoardReduces = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TABLE: return {...state,rows:action.payload}
        case CLICK_TABLE: return {...state, id:action.payload.target.id}
        default: return state
    }
}

export default chessBoardReduces