import React, {useEffect, useState} from "react";
import InquiryListTable from "./InquiryListTable";
import {Link} from "react-router-dom";


function InquiryList() {
    return (
        <div className={"col-10 vh-100"}>
            <InquiryListTable/>
        </div>
    );
}

export default InquiryList;