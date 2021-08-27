import React from "react";
import { connect } from 'react-redux';

class Presentation extends React.Component {
    constructor(props) {
        super(props);
        this.className = "display";
    }

    render() {
        return (
            <div id="presentation" className={this.props.basicReducer.classPresentation}>
                <p>React V 17.0</p>
                <p>Redux V 4.1.1</p>
                <p>marked.js V 3.0.2</p>
                <p>DOMPurify V 2.3.1</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(Presentation);