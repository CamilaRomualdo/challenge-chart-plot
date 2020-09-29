import React from 'react';

import './css/shared.css'

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <button className="button" onClick={this.props.onClick}>
                    Generate Chart
                </button>
            </div>
        );
    }
}

export default Footer;
