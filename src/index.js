import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

// Create react component (class component)
class App extends React.Component {
  
  //THIS IS NOT MANDATORY
  constructor(props) {
    super(props); //mandatory when there is a constructor

    this.state = { lat: null, errorMessage: '' };  //Direct assignment for a state ONLY into initialization    
  }

  //state = { lat: null, errorMessage: '' };  THIS is equivalent to having the constructor function, BABEL transforms it

  //Good place to do Data Loading
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), //You can set a state ONLY through setState
      err => this.setState({ errorMessage: err.message })
    );
  }

  //Good place to do Data Loading wehn state/props change
  componentDidUpdate() {

  }
  
  //Helper Method to avoid conditionals statements in render
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: { this.state.errorMessage }</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      
      return <SeasonDisplay lat={ this.state.lat }></SeasonDisplay>
    }
    return (
      <div>        
        <Loader message = "Please accept geolocation request"/>
      </div>
    );
  }

  //THIS IS THE ONLY METHOD REQUIRED EVER
  render() {    
   return (
     <div className="whatever">
       {this.renderContent()}
     </div>
   )
  }
}

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);