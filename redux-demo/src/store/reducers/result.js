import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(item => item.id !== action.resultElId);
    return updateObject(state, {
        results: state.results.concat({
            id: new Date(),
            value: updatedArray
        })
    });
};

const restoreResult = (state, action) => {
    return updateObject(state, {
        results: state.results.concat({
            id: new Date(),
            value: action.result
        })
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return restoreResult(state, action);
        case actionType.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
};

export default reducer;