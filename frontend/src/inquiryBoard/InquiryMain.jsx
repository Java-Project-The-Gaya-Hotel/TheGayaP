import React, {useEffect} from "react";
import {Link, Outlet} from "react-router-dom";
import InquiryHotelInfo from "./InquiryHotelInfo/InquiryHotelInfo";
import InquiryList from "./inquiryListComp/InquiryList";
import InquiryWrite from "./InquiryWriteComp/InquiryWrite";
import "./InquiryMain.css"



const styles={
    borderLine:{
        width:"250px"
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
            <div className={"d-flex"}>
                <div className={"col-3 my-3 "}>
                    <nav>
                        <div >
                            <h5>고객 문의</h5>
                            <hr style={styles.borderLine}/>
                            <div className="nav__list">
                                <Link to={"/qa"} className="nav__link"><span>호텔 소개</span></Link>
                                <Link to={"list"} className="nav__link"><span>문의 리스트</span></Link>
                                <Link to={"write"} className="nav__link"><span>문의 작성</span></Link>
                            </div>
                        </div>
                    </nav>

                </div>
                <hr className={"vr m-3"}/>
                <div className={"col-9"}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default InquiryMain;