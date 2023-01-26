import React, {useState} from "react";
import {Link} from "react-router-dom";
import InquiryHotelInfo from "./InquiryHotelInfo/InquiryHotelInfo";
import InquiryList from "./inquiryListComp/InquiryList";
import InquiryWrite from "./InquiryWriteComp/InquiryWrite";


function InquiryMain() {
    const [componentName, setComponentName] = useState("info");

    const compNameChange = (name) => {
        setComponentName(name);
    }

    let Comp = <InquiryHotelInfo/>

    if (componentName === "list"){
        Comp = <InquiryList/>
    }else if(componentName === "write"){
        Comp = <InquiryWrite/>
    }

    return (
        <div className={"container"}>
            <div className={"d-flex"}>
                <div className={"col-3"}>
                    <h1>네비자리</h1>
                    <nav className={"p-3 grid bg-opacity-10 bg-secondary"}>
                        <h3>고객 문의</h3>
                        <ul className={""} style={{width: 276}}>
                            <li className="nav-item">
                                <span style={{cursor:"pointer"}} onClick={()=> {
                                    compNameChange("info")
                                }}>호텔 소개</span>
                            </li>
                            <li className="nav-item">
                                <span style={{cursor:"pointer"}} onClick={()=> {
                                    compNameChange("list")
                                }}>문의 리스트</span>
                            </li>
                            <li className="nav-item">
                                <span style={{cursor:"pointer"}} onClick={()=> {
                                    compNameChange("write")
                                }}>문의 작성</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={"col-12 vh-100"}>
                    <div>
                        {
                           Comp
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquiryMain;