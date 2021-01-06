import * as actionType from './actionTypes';

export const saveResult = (res) => {
    // Here we can put the logic code to treat the data
    return {
        type: actionType.SUBTRACT,
        result: res
    };
}

export const storeResult = (res) => {
    // Normally, we have to return a javascript object which contains the action
    // But with redux-thunk, we can return an async/sync function => difference!
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionType.DELETE_RESULT,
        resultElId: resElId
    };
};