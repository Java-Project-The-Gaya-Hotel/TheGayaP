import React, {useEffect, useState} from "react";
import InquiryListTable from "./inquiryListComp/InquiryListTable";


function InquiryList() {
    return (
        <div className={"container"}>
            <div className={"d-flex"}>
                <div className={"col-3"}>
                    <h1>네비자리</h1>
                    <nav className={"p-3 grid bg-opacity-10 bg-secondary"}>
                        <h3>고객 문의</h3>
                        <ul className={""} style={{width: 276}}>
                            <li>호텔소개</li>
                            <li>문의작성</li>
                            <li>문의리스트</li>
                        </ul>
                    </nav>
                </div>
                <div className={"col-9 vh-100"}>
                    <h1>문의 리스트자리</h1>
                   <InquiryListTable/>
                </div>
            </div>
        </div>
    );
}

export default InquiryList;