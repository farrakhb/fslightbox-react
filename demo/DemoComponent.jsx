import React, { Component } from 'react';
import "./css/demo.css";
import { testImageURL, testVideoURL, testYoutubeURL } from "../tests/schemas/testVariables";
import FsLightbox from "../src";

class DemoComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
        };
        this.slide = 1;
        this.videosPosters = [];
        this.videosPosters[0] = '../demo/images/1.jpeg';
        this.toggleLightbox = this.toggleLightbox.bind(this);
        this.changeSlide = this.changeSlide.bind(this);
    }

    changeSlide() {
        this.slide += 1;
        this.forceUpdate();
    }

    toggleLightbox() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <>
                <button onClick={ this.toggleLightbox }>Toggle Lightbox</button>
                <div className="images">
                    <img className="image" src="../demo/images/1.jpeg" alt=""/>
                    <img className="image" src="../demo/images/2.jpg" alt=""/>
                    <img className="image" src="../demo/images/3.jpeg" alt=""/>
                </div>
                <button
                    className={ 'slide-changing-button' }
                    onClick={ this.changeSlide }>
                    changeSlide
                </button>
                <FsLightbox
                    isOpen={ this.state.isOpen }
                    urls={ [
                        "../demo/images/1.jpeg",
                        "../demo/images/2.jpg",
                        "../demo/images/3.jpeg",
                        "../demo/images/4.jpeg",
                        "../demo/images/5.jpg",
                        "../demo/images/6.jpg"
                    ] }
                    slide={ this.slide }
                    videosPosters={ [
                        testImageURL
                    ] }
                />
            </>
        );
    }
}

export default DemoComponent;