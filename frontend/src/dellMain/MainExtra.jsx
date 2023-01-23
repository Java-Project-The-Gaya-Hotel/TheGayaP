import React from 'react';
import "./dellmainCss/ComponentCss.css"
import 'animate.css'




function MainComponent1() {
    return (
        <div id={"contain"} >
            <div className="box animate__animated animate__fadeInUp">
                <img src="https://source.unsplash.com/1000x800/?hotel"/>
            </div>
            <div className="box box animate__animated animate__fadeInUp">
                <img src="https://source.unsplash.com/1000x802/?hotel"/>
            </div>
            <div className="box">
                <img src="https://source.unsplash.com/1000x804/?hotel"/>
            </div>
            <div className="box">
                <img src="https://source.unsplash.com/1000x806/?hotel"/>
            </div>
        </div>
    )
}

export default MainComponent1;