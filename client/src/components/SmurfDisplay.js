//Task List:
//1. Import in all needed components and library methods.
import React from 'react';
import { connect } from 'react-redux'
import { getSmurfs } from './../actions'
import { initialState } from './../reducers'


export class SmurfDisplay extends React.Component {
    
    state = initialState

    componentDidMount(){
        getSmurfs();
        console.log('this.state: ', this.state)    
        
    }
    
    
    render() {
        return(<div>
            
        </div>)
    }
}

//2. Connect all needed redux state props and action functions to the component before exporting.
const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      error: state.error
    };
  };

  export default connect(mapStateToProps, { getSmurfs })(SmurfDisplay);

//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.