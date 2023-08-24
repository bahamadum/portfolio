import React, { Component } from 'react';

export default class Modal extends Component {
    render(){

        let modelStyle = {
            display: 'block',
            backgroungColor: 'rgba(0,0,0,0.8)',
        }
        return (
            <div className="modal show fade" style={modelStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{this.props.title}</h5>
                    <button type="button" className="btn-close" onClick={this.props.hide}></button>
                </div>
                <div className="modal-body">
                    <img src={this.props.backgroundImage} className='img-fluid' alt={this.props.alt}/>
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Live Demo</button>
                    <button type="button" className="btn btn-primary">Github</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}