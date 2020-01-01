import React, { Component } from 'react';

export default class Iframe extends Component {

    
    render() {
        return (
            <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                width="300"
                height="200"
                frameBorder="0"
                src='http://127.0.0.1:3002/'>
            </iframe>
        );
    
    }
}
