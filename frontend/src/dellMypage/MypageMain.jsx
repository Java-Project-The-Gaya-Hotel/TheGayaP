import React,{useContext} from 'react';
import MypageNav from "./MypageNav";
import {Outlet} from "react-router-dom";


const styles={
    cardBox:{
        height:"550px"
    }
}


function MypageMain() {
    const memberId = useContext();
    return (
        <div>
            <div className={"container"}>
                <div className={"row justify-content-center p-5"}>
                    <div className="card text-center col-md-11 p-0 border-dark">
                        <div className="card-header border-dark bg-white"> ~ 님 | No. ~  </div>
                        <div className="card-body" style={styles.cardBox}>
                            <h5 className="card-title">Special title treatment</h5>
                            <p  className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer text-muted border-dark bg-white">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MypageMain;