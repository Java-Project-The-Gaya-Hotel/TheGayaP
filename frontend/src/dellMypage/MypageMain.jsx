import React from 'react';
import MypageNav from "./MypageNav";
import {Outlet} from "react-router-dom";
import NewPage from "./NewPage";


function MypageMain() {
    return (
        <div className={"container"}>
            <div className={"row"}>

                <div className={"col"}>
                    <MypageNav/>
                </div>

                <div className={"col"}>
                    <NewPage/>
                </div>
            </div>
        </div>
    )
}

export default MypageMain;