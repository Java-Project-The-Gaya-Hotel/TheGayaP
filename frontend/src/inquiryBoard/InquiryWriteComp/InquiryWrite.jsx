// InquiryWrite.jsx
import React, {useEffect, useState} from "react";
import {default as Axios} from "axios";
import "./InquiryWrite.css";
import {Link, useNavigate} from "react-router-dom";
import {GetMemberIdByToken} from "../../functiontocheck/FunctionToCheck";

const axios = Axios.create({
    baseURL: "http://ec2-13-125-220-237.ap-northeast-2.compute.amazonaws.com:8080"
});
function InquiryWrite() {

    const navi = useNavigate();
    const [hotelList, setHotelList] = useState([]);

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userTel, setUserTel] = useState("");


    const [inputs, setInputs] = useState({
        category: "객실/패키지",
        hotelName: "서울가야호텔",
        title: "",
        contents: "",
        reservationNum: "",
        password:"",
        hidden: "",
    })

    const {
        category, hotelName, title, contents, reservationNum, password, hidden
    } = inputs;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        if(hidden === "Y") setIsHidden(true);
        else setIsHidden(false);
    }, [hidden])

    // 유효성검사
    const [titleVld, setTitleVld] = useState("");
    const [contentsVld, setContentsVld] = useState("");
    const [userNameVld, setUserNameVld] = useState("");
    const [userEmailVld, setUserEmailVld] = useState("");
    const [userTelVld, setUserTelVld] = useState("");
    const [hiddenVld, setHiddenVld] = useState("");
    const [passwordVld, setPasswordVld] = useState("");

    const inquiryData =
        {
            inquiryHotelName: hotelName,
            inquiryCategory: category,
            inquiryTitle: title,
            inquiryContents: contents,
            inquiryReservationNum: reservationNum,
            inquiryUserName: userName,
            inquiryUserEmail: userEmail,
            inquiryUserTel: userTel,
            inquiryPassword: password,
            inquiryHidden: hidden
        };

    useEffect(() => {
        if (sessionStorage.getItem("token") != null) {
            GetMemberIdByToken().then(response => {
                axios.get("/qa/writeUser", { params: {userName: response.data}})
                    .then((req) => {
                        console.log("통신성공")
                        console.log(req.data);
                        setUserName(response.data);
                        setUserEmail(req.data[0].memberEmail);
                        setUserTel(req.data[0].memberTel);

                    })
                    .catch((err) => {
                        console.log("데이터 전송 실패" + err);
                    })
            })

            axios.get("/gaya/hotelList")
                .then((req) => {
                    setHotelList(req.data);
                })
                .catch((err) => {
                    console.log("데이터 전송 실패" + err);
                })
        }
        else {
            alert('로그인이 필요한 서비스입니다.');
            window.location.href = "/login";
        }

    }, [])

    const submitHandler = (e) => {
        e.preventDefault();

        setTitleVld("");
        setContentsVld("");
        setUserNameVld("");
        setUserEmailVld("");
        setUserTelVld("");
        setPasswordVld("");
        setHiddenVld("");

        if (title && contents && userName && userEmail && userTel && hidden) {
            if(hidden === "Y" && !password){
                setPasswordVld("비밀번호를 입력해주세요");
            }
            else {
                axios.post("/qa/write", inquiryData)
                    .then((req) => {
                        console.log("데이터 전송 성공");
                        console.log(inquiryData);
                        navi("/qa/list", {replace:true});
                    }).catch(err => {
                    console.log(`데이터 전송 실패 ${err}`)
                })
            }
        } else {
            if (!title) {
                setTitleVld("제목을 입력해주세요");
            }
            if (!contents) {
                setContentsVld("내용을 입력해주세요");
            }
            if (!userName) {
                setUserNameVld("이름을 입력해주세요");
            }
            if (!userEmail) {
                setUserEmailVld("이메일을 입력해주세요");
            }
            if (!userTel) {
                setUserTelVld("전화번호를 입력해주세요");
            }
            if (!hidden) {
                setHiddenVld("공개 설정을 지정해주세요");
            }
        }
    };


    return (
        <div className={"container inquiry"}>
            <div className={"container text-end fw-lighter small"}>
                <span><Link to={"/"}>Home</Link> > <Link to={"/qa"}>고객문의</Link> > 문의작성</span>
            </div>

            <div>
                <div className={"row justify-content-center p-5"}>
                    <div className={"card col-md-11 p-0 border-dark"}>
                        <div className={"card-header border-dark bg-white h4 fw-bold text-center"}>고객 문의</div>
                        <div className={"card-body"}>
                            <h5 className={"card-title text-center m-0"}> 문의 작성 </h5>
                            <div className={"text-end"}>
                                <span className={"required"}>* 는 필수입력사항 입니다</span>
                            </div>

                            {/*왼쪽*/}
                            <div className="container card-text p-3 m-0 row">
                                <div className={"container col"}>
                                    <div>

                                        {/*체인명*/}
                                        <div className={"my-4"}>
                                            <span className={"required"}>* </span>
                                            <label htmlFor={"selHotel"} className={"form-label"}>호텔명</label>
                                            <div className={"row"}>
                                                <div className={"col-sm"}>
                                                    <select className={"form-select"} name={"hotelName"} value={hotelName} onChange={onChange}>
                                                        {hotelList.map((item, index) => {
                                                            return <option key={index} value={item.hotelName}>{item.hotelName}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/*유형*/}
                                        <div className={"category my-4"}>
                                            <span className={"required"}>* </span>
                                            <label htmlFor={"category"} className={"form-label"}>유형</label>
                                            <div className={"row"}>
                                                <div className={"col-sm"}>
                                                    <select className={"form-select"} name={"category"} value={category} onChange={onChange}>
                                                        <option value={"객실/패키지"}>객실/패키지 문의</option>
                                                        <option value={"멤버십"}>멤버십 문의</option>
                                                        <option value={"시설문의"}>시설문의</option>
                                                        <option value={"홈페이지 오류 문의"}>홈페이지 오류 문의</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/*제목*/}
                                        <div className={"title my-4"}>
                                            <span className={"required"}>* </span>
                                            <label htmlFor={"title"} className={"form-label"}>제목</label>
                                            <input type={"text"} className={"form-control"} name={"title"} value={title} onChange={onChange}/>
                                            <p className={"validation m-0"}>{titleVld}</p>
                                        </div>

                                        {/*내용*/}
                                        <div className={"contents my-4"}>
                                            <span className={"required"}>* </span>
                                            <label htmlFor={"contents"} className={"form-label"}>내용</label>
                                            <textarea className={"form-control"} id={"contents"} style={{height: 300}} placeholder={"내용을 입력하세요"}
                                                      onChange={onChange} name={"contents"} value={contents}></textarea>
                                            <p className={"validation m-0"}>{contentsVld}</p>
                                        </div>
                                    </div>

                                </div>

                                {/*오른쪽*/}
                                <div className={"container col"}>
                                    {/*이름*/}
                                    <div className={"name my-4"}>
                                        <label htmlFor={"userName"} className={"form-label"}>아이디</label>
                                        <input type={"text"} className={"form-control"} name={"userName"} value={userName} readOnly={true}
                                               onChange={(e) => {setUserName(e.target.value)}}/>
                                        <p className={"validation m-0"}>{userNameVld}</p>
                                    </div>

                                    {/*이메일*/}
                                    <div className={"email my-4"}>
                                        <span className={"required"}>* </span>
                                        <label htmlFor={"userEmail"} className={"form-label"}>이메일</label>
                                        <input type={"email"} className={"form-control"} name={"userEmail"} value={userEmail}
                                               onChange={(e) => {setUserEmail(e.target.value)}}/>
                                        <p className={"validation m-0"}>{userEmailVld}</p>
                                    </div>

                                    {/*연락처*/}
                                    <div className={"tel mt-4"}>
                                        <span className={"required"}>* </span>
                                        <label htmlFor={"userTel"} className={"form-label"}>연락처</label>
                                        <input type={"text"} className={"form-control"} name={"userTel"} placeholder={"- 를 제외한 숫자를 입력하세요"}
                                               onChange={(e) => {setUserTel(e.target.value)}} value={userTel}/>
                                        <p className={"validation m-0"}>{userTelVld}</p>
                                    </div>

                                    {/*예약번호*/}
                                    <div className={"reservationNum my-4"}>
                                        <label htmlFor={"reservationNum"} className={"form-label"}>예약번호</label>
                                        <input type={"text"} className={"form-control"} name={"reservationNum"} value={reservationNum} onChange={onChange}/>
                                    </div>

                                    {/*첨부파일*/}
                                    <div className={"file my-3"}>
                                        <span className={"required"}>&nbsp;&nbsp;</span>
                                        <label htmlFor={"inquiryUserTel"} className={"form-label"}>첨부파일</label>
                                        <input type={"file"} className={"form-control"} id={"files"} name={"files"}/>
                                    </div>

                                    {/*공개설정*/}
                                    <div className={"hidden mt-4"}>
                                        <span className={"required"}>* </span>
                                        <label htmlFor={"inquiryHidden"} className={"form-label"}>문의 공개 설정</label>
                                        <div className={"col-sm gap-5"}>
                                            <div className={"form-check form-check-inline"}>
                                                <input className={"form-check-input"} type={"radio"} name={"hidden"} value={"N"} onChange={onChange}/>
                                                <label className={"form-check-label"} htmlFor={"inlineRadio2"}>공개</label>
                                            </div>
                                            <div className={"form-check form-check-inline"}>
                                                <input className={"form-check-input"} type={"radio"} name={"hidden"} value={"Y"} onChange={onChange}/>
                                                <label className={"form-check-label"} htmlFor={"inlineRadio1"}>비공개</label>
                                            </div>
                                        </div>
                                        <p className={"validation m-0"}>{hiddenVld}</p>
                                    </div>

                                    {/*비밀번호 */}
                                    {
                                        isHidden
                                        &&
                                        <div className={"password my-3 "} >
                                            <span className={"required"}>* </span>
                                            <label htmlFor={"password"} className={"form-label"}>글 비밀번호</label>
                                            <input type={"password"} className={"form-control"} name={"password"} value={password} onChange={onChange}/>
                                            <p className={"validation m-0"}>{passwordVld}</p>
                                        </div>
                                    }


                                </div>

                                <div className={"d-flex justify-content-center gap-3 my-5"}>
                                    <button className={"custom-btn2 custBtn btn-lg col-sm-2"} onClick={submitHandler}>확인</button>
                                    <button className={"custom-btn2 custBtn btn-lg col-sm-2"} onClick={() => {window.history.back()}}>취소</button>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer text-muted border-dark bg-white">&nbsp;</div>
                    </div>
                </div>

            </div>
        </div>)
        ;
}

export default InquiryWrite;