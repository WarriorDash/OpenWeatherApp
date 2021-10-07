
import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { weatherKey } from "./helper/const";
import WeatherMain from "./weatherComponent/WeatherMain";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
       <WeatherMain/>
      
       
      </>
    );
  }
}

export default App;
