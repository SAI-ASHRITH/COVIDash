import React,{Component} from 'react';
import './Header.css'
class Header extends Component{

  render(){

    return(
      <div>
        <div class="header">
          <a href="#default" class="logo">COVIDash</a>
            <div>
              <a href="#contact">Map</a>
              <a href="#about">Stats</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
