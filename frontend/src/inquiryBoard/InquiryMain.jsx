import React from "react";
import {Link, Outlet} from "react-router-dom";


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
            <div className={"d-flex "}>
                <div className={"col-2"}>
                    <nav className={"p-3 grid bg-opacity-10 bg-secondary mt-5"}>
                        <h3>고객 문의</h3>
                        <ul>
                            <li className="nav-item">
                                <Link to={"/qa"} className={"nav-link  mb-2"} aria-current="page">호텔 소개</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"list"} className={"nav-link mb-2"}>문의 리스트</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"write"} className={"nav-link mb-2"}>문의 작성</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={"col-12"}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default InquiryMain;