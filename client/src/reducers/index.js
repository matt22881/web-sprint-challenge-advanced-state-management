import {    START_FETCHING, SMURFS_FETCHED, FETCHING_FAILED, CLEAR_ERROR, getSmurfs } from './../actions'

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text

export const initialState = {
    smurfs: getSmurfs(),
    isFetching: false,
    error: ''
}

//2. Setup your reducer to take the state and action as peremeters
const reducer = (state = initialState, action)=>{
    //3. Add in cases to your reducer to handle:
    switch (action.type) {
        //      - The start of an api call
        case START_FETCHING: {
            return {
                ...state, isFetching: true, error: ''
            }
        }
        //      - The end of an api call
        case SMURFS_FETCHED: {
              return {
                  ...state, 
                  smurfs: action.payload,
                  isFetching: false
            }
        }
        //      - Setting Error Text
        case FETCHING_FAILED: {
            return {
              ...state,
              error: action.payload,
              isFetching: false
            }
        }
        case CLEAR_ERROR: {
            return {
                ...state, error: ''
            }
        }
        default:
            return state
    }
}

export default reducer

//      - The adding a smurf to the smurf list when added into payload
//      - Any other state changes you see as necessary