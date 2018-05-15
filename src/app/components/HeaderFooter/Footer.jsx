import React, {Component} from 'react';
import '../../styles/modules/headerFooter.css';
import $ from 'jquery';

class Footer extends Component {
    constructor() {
        super();
        this.state = {"footerCss": {"position": "static", "bottom": "auto"}}
    }

    componentDidMount() {
        if ($(window).height() > $("#app").prop('scrollHeight')) {
            this.setState({"footerCss": {"position": "absolute", "bottom": "0", "width": "100%"}});
        } else {
            this.setState({"footerCss": {"position": "static", "bottom": "auto"}});
        }
    };

    render() {
        return (
            <div className="footer-main" style={this.state.footerCss}>
                <h1>Copyright © InfoTmT 2018{this.state.test}</h1>
            </div>
        );
    }
}

export default Footer;