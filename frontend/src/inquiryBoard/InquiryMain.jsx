import React from "react";
import {Link, Outlet} from "react-router-dom";
import "./InquiryMain.css"


const styles = {
    borderLine: {
        width: "250px"
    }
}

// 호텔 소개 네비게이션
function InquiryMain() {
    // const [componentName, setComponentName] = useState("info");
    //
    // const compNameChange = (name) => {
    //     setComponentName(name);
    // }
    //
    // let Comp = <InquiryHotelInfo/>
    //
    // if (componentName === "list"){
    //     Comp = <InquiryList/>
    // }else if(componentName === "write"){
    //     Comp = <InquiryWrite/>
    // }


    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-2"}>
                    <nav>
                        <ul>
                            <h4>고객문의</h4>
                            <hr className={"border-0"}/>
                            <div className={"container my-3"}>
                                <li><Link to={"/qa"}>Gaya Reward</Link></li>
                                <li><Link to={"list"}>문의 목록</Link></li>
                            </div>
                        </ul>
                    </nav>
                </div>

                <div className={"col-9"}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default InquiryMain;