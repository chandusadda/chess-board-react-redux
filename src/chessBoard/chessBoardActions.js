import { CREATE_TABLE, CLICK_TABLE } from './chessBoardTypes'

export  const ChessBoardCreateAction = (rows) => { 
    return { type: CREATE_TABLE, payload: rows }
}

export  const ChessBoardClickActions = (id='0000') => { 
    return { type: CLICK_TABLE, payload: id }
}
