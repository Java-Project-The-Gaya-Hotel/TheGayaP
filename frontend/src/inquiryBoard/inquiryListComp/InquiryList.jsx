import React, {useEffect} from "react";
import InquiryListTable from "./InquiryListTable";
import {GetMemberIdByToken} from "../../functiontocheck/FunctionToCheck";

// 문의 게시글 페이지
function InquiryList() {
    return (
        <div className={"col-10 vh-100"}>
            <InquiryListTable/>
        </div>
    );
}

export default InquiryList;