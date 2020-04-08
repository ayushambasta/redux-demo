import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <div className="AppContent">
        <h1>I am all yours!</h1>
        <br /> <br />
        <input type="text" id="fname" name="fname" placeholder="Change Name Here!"/>  
        <br /><br />
        <button onClick= {() => {props.addList(onClick())}}>Replace</button>
        <br /> <br />
        <div className="res">
            <h5>My name is {props.counter}!</h5>
        </div>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
      return {
        addList: (data) => {dispatch({type: 'UPDATE', title: data})}
      }
}
const onClick = () => {
  let val =  document.getElementById("fname").value;  
  document.getElementById("fname").value = "";
  document.getElementById("fname").placeholder = "Change Again!";
  return val;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
