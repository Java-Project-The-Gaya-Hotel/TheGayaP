import React from 'react';
import ComponentImg1 from '../mainImg/R0000001RDTF_KR.jpg'
import "../main/mainCss/ComponentCss.css"

function MainComponent1() {
    return (
        <div id={"contain"}>
            <div className="box">
                <img src="https://source.unsplash.com/1000x800"/>
            </div>
            <div className="box">
                <img src="https://source.unsplash.com/1000x802"/>
            </div>
            <div className="box">
                <img src="https://source.unsplash.com/1000x804"/>
            </div>
            <div className="box">
                <img src="https://source.unsplash.com/1000x806"/>
            </div>
        </div>
    )
}

export default MainComponent1;