import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users';


// function* testing(){
//   while(true){
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// }
class App extends Component {

  constructor(props){
    super(props);
    this.props.getUsersRequest();
  }
  render() {
    // const iterator = testing();
    // console.log(iterator.next());
    // runs all the code until the next yield statement
    // we do not block the UI while waiting for some functions to run
    // we control and expect when to enter and get out of functions


    // under the hood Saga runs under the while(true) loop

    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
    return (
      <div>
        Test
      </div>
    )
  }
}

export default connect(null, {
  getUsersRequest
})(App);
