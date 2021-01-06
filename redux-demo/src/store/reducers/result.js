import * as actionType from '../actions/actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            console.log(state)
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.result
                }),
            };
        case actionType.DELETE_RESULT:
            const updatedArray = state.results.filter(item => item.id !== action.resultElId);
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: updatedArray
                })
            };
        default:
            break;
    }
    return state;
};

export default reducer;