import React, {useEffect, useState} from "react";
import axios from "axios";
import InquiryItem from "./InquiryItem";
import {useNavigate} from "react-router-dom";
import InquiryPagination from "./InquiryPageNation";
import {GetMemberIdByToken} from "../../functiontocheck/FunctionToCheck";

function InquiryListTable(props) {
    const [QAData, setQAData] = useState([]);
    const [memberId, setMemberId] = useState("");
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const navi = useNavigate();

    useEffect(() => {

        if (sessionStorage.getItem("token") != null) {
            GetMemberIdByToken().then(response => {
                setMemberId(response.data);
            })
        }
        const getQaData = async () => {
            const response = await axios.get("http://localhost:8080/gaya/inquirylist")

            const data = response.data;
            setQAData(data);
        }
        getQaData();


    }, []);

    const goWrite = () => {
        navi("/qa/write")
    }

    return (
        <div>

            <div className={"text-center border-bottom"}>
                <h1>고객 문의 게시판</h1>
            </div>

            <label>
                페이지 당 표시할 게시물 수:&nbsp;
                <select
                    type="number"
                    value={limit}
                    onChange={({target: {value}}) => setLimit(Number(value))}
                >
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </label>

            <div className={"row"}>
                <div className={"col-md-10 m-1"}>
                    <table className={'table table-striped table-hover text-center'}>
                        <thead>
                        <tr>
                            <th width={"15%"}>문의 호텔</th>
                            <th width={"40%"}>문의 제목</th>
                            <th width={"15%"}>문의 고객명</th>
                            <th width={"20%"}>문의 날짜</th>
                            <th width={"10%"}>문의 상태</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            QAData.slice(offset, offset + limit).map((item, idx) => {
                                return <InquiryItem key={idx} data={item} memberId={memberId}/>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={"d-flex justify-content-end col-10"}>
                <button onClick={goWrite}>문의 작성</button>
            </div>
            <footer>
                <InquiryPagination
                    total={QAData.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </footer>
        </div>

    );
}

export default InquiryListTable;