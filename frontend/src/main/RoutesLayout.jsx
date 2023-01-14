import React from 'react';
import {Outlet, Link} from "react-router-dom";

function RoutesLayout(props){
    return(
        <div>
            <nav>
                <ul>
                    <li> <Link to={""}></Link></li>
                    <li> <Link to={""}></Link></li>
                    <li> <Link to={""}></Link></li>
                </ul>
            </nav>

            <Outlet/>
        </div>
    )

}
export default RoutesLayout;