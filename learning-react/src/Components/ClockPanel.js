import React, { Component } from 'react';
import './styles/ClockPanel.css';

class ClockPanel extends Component{
    render() {
        return (
            <div class="clockContainer">
                {this.props.title}
            </div>
        );
    }
}

export default ClockPanel;