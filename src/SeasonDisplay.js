// Import CSS
import './SeasonDisplay.css';
// Import React and ReactDOM libraries
import React from 'react';

//Config object
const seasonConfig = {
  summer:{
    text: 'Lets hit the beach',
    iconName: 'sun'
  },
  winter:{
    text: 'Burr, it is chilly',
    iconName: 'snowflake'
  }
};
//Helper Function
const getSeason = (lat,month) => {
  
  if (month <3 && month >8){
    return lat < 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'winter' : 'summer';
  }

};
//Component
const SeasonDisplay = (props) => {
  
  const season = getSeason(props.lat, new Date().getMonth());
  const options = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>  
        <i className={`icon-left ${options.iconName} massive icon`}></i>
        <h1>{options.text}</h1>
        <i className={`icon-right ${options.iconName} massive icon`}></i>
    </div>
  );
};

export default SeasonDisplay;