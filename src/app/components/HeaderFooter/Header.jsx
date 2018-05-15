import React, {Component} from 'react';
import '../../styles/modules/headerFooter.css'

class Header extends Component {
    render() {
        return (
            <div className="header-main">
                {/* <a href="#">nobilis<span>AI</span></a>*/}
                <a href="">
                    <img src="http://www.infotmt.com/img/infotmt-logo.png" style={{width: "100px"}}/>
                </a>
            </div>
        );
    }
}

export default Header;