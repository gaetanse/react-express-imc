const INITIAL_STATE = {
    imcs : []
}

function ImcReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD-IMC': {
            return{
                ...state,
                imcs: [...state.imcs, action.payload]
            }
        }
        case 'CLEAR': {
            return{
                ...state,
                imcs: []
            }
        }
        default: return state
    }
}

export default ImcReducer