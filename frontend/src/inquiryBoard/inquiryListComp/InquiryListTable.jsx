import React, {useEffect, useState} from "react";
import axios from "axios";
import InquiryItem from "./InquiryItem";

function InquiryListTable(props) {
    const [QAData, setQAData] = useState([]);

    const goBoardDetail = () => {
        console.log();
    }

    useEffect(() => {

        axios.get("http://localhost:8080/gaya/inquirylist")
            .then((req) => {
                console.log("데이터 전송 성공")
                const {data} = req;
                setQAData(data);
            }).catch(err => console.log(err))

    }, []);

    return (
        <div>

            <div className={"text-center border-bottom"}>
                <h1>고객 문의 게시판</h1>
            </div>
            <div className={"row"}>
                <div className={"col-md-10 mx-auto"}>
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
                            QAData.map((item) => {
                                return <InquiryItem key={item.inquiryIdx} data={item}/>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={"col-11 d-flex justify-content-end"}>
                <button>문의 작성</button>

            </div>
        </div>

    );
}
export default InquiryListTable;