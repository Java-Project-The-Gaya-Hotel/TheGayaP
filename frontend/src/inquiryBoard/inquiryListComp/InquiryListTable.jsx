import React, {useEffect, useState} from "react";
import axios from "axios";
import InquiryItem from "./InquiryItem";
import {useNavigate} from "react-router-dom";
import InquiryPagination from "./InquiryPageNation";
import {GetMemberIdByToken} from "../../functiontocheck/FunctionToCheck";

// - Page 기능 List
// 문의 게시판 테이블
// 테이블 보여지는 개수
// 페이지네이션
// 글 작성하기



// 문의 게시글 테이블
function InquiryListTable(props) {


    const [QAData, setQAData] = useState([]);
    const [memberInfo, setMemberInfo] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const navi = useNavigate();

    // 문의글 리스트를 가져오는 axios 함수
    const getQaData = async () => {
        const response = await axios.get("http://localhost:8080/gaya/inquirylist")

        const data = response.data;
        setQAData(data);
    }


    // 테이블 불러올때 발동
    useEffect(() => {

        // 세션 스토리지에 JWT 토큰이 null이 아닐시
        if (sessionStorage.getItem("token") != null) {
            // 유저의 아이디를 불러오는 함수 발동후 set
            GetMemberIdByToken().then((response) => {
                axios.get(
                    "http://localhost:8080/mypage/getUserInfo",
                    {
                        params: {
                            memberId: response.data,
                        }
                    }
                ).then(response => {
                        setMemberInfo(response.data);
                    }
                )
            })
        }



        getQaData();


    }, []);

    // 문의글 작성페이지로 네비게이트
    const goWrite = () => {
        navi("/qa/write")
    }

    return (

        <div>
            <div className={"container"} style={{fontSize: 15}}>
                <div className={"row justify-content-center p-5"}>
                    <div className="card text-center col-md-12 p-0 border-dark">
                        <div className="card-header h4 border-dark bg-white"> 고객 문의 게시판</div>
                        <div className="card-body container">
                            <div className={"container p-3"}>
                                <table className={'table table-hover text-center'}>
                                    <thead className={"border-dark table-dark"}>
                                    <tr>
                                        <th>문의 호텔</th>
                                        <th className={"col-sm-5"}>문의 제목</th>
                                        <th>작성자</th>
                                        <th>문의 날짜</th>
                                        <th>문의 상태</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        QAData.slice(offset, offset + limit).map((item) => {
                                            return <InquiryItem key={item.inquiryNum} data={item} memberInfo={memberInfo}/>
                                        })
                                    }
                                    </tbody>
                                </table>

                                <label>
                                    페이지 당 표시할 게시물 수:&nbsp;
                                    <select type="number" value={limit} onChange={({target: {value}}) => setLimit(Number(value))}>
                                        <option value="10">10</option>
                                        <option value="12">12</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                </label>
                                <div className={"d-flex justify-content-end"}>
                                    <button className={"custom-btn2 custBtn"} onClick={goWrite}>문의 작성</button>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer text-muted border-dark bg-white">
                            <InquiryPagination total={QAData.length} limit={limit} page={page} setPage={setPage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default InquiryListTable;