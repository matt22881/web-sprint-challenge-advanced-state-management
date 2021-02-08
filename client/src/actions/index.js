import axios from 'axios';

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
export const START_FETCHING = 'START_FETCHING'
export const SMURFS_FETCHED = 'SMURFS_FETCHED'
export const FETCHING_FAILED = 'FETCHING_FAILED'
export const CLEAR_ERROR = 'CLEAR_ERROR';


export const getSmurfs = () => {
  return (dispatch) => {
    
  //              - dispatch actions that indicate if we are waiting for a server response
    dispatch({ type: CLEAR_ERROR });
    dispatch({ type: START_FETCHING });

    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log('res: ', res)
        // debugger
        dispatch({ type: SMURFS_FETCHED, payload: res })
      })
      //              - dispatch an error text action if an error is returned from the server
      .catch(err => {
        console.log('error getting smurfs from api: ', err)
        dispatch({ type: FETCHING_FAILED, payload: err.message })
    })
}
}
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.