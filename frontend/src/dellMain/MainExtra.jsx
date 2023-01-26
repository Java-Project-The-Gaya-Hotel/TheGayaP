import React from 'react';
import "./dellmainCss/ComponentCss.css"
// import 'animate.css'




function MainComponent1() {
    return (

            <div id={"contain"}>
                <div className="box">
                    <img src="https://source.unsplash.com/1000x800/?hotel" alt={"random1"}/>
                </div>
                <div className="box">
                    <img src="https://source.unsplash.com/1000x802/?hotel" alt={"random2"}/>
                </div>
                <div className="box">
                    <img src="https://source.unsplash.com/1000x804/?hotel" alt={"random3"}/>
                </div>
                <div className="box">
                    <img src="https://source.unsplash.com/1000x806/?hotel" alt={"random4"}/>
                </div>
            </div>

    )
}

export default MainComponent1;