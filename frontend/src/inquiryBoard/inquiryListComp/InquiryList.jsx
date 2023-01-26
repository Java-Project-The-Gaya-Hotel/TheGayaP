import React, {useEffect, useState} from "react";
import InquiryListTable from "./InquiryListTable";
import {Link} from "react-router-dom";


function InquiryList() {
    return (
            <div className={"col-9 vh-100"}>
                <h1>문의 리스트자리</h1>
                <InquiryListTable/>
            </div>
    );
}

export default InquiryList;