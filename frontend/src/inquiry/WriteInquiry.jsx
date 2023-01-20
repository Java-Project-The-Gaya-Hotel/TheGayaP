// WriteInquiry.jsx
import React, {useState} from "react";
import axios from "axios";
import "./WriteInquiry.css";
import MainFooter from "../dellMain/MainFooter";

function WriteInquiry() {

  const [hotelName, setHotelName] = useState("");
  const [category, setCategory] = useState("");
  const [contents, setContents] = useState("");
  const [reservationNum, setReservationNum] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTel, setUserTel] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState("");

  const data =
    {
      inquiryHotelName: hotelName,
      inquiryCategory: category,
      inquiryContents: contents,
      inquiryReservationNum: reservationNum,
      inquiryUserName: userName,
      inquiryUserEmail: userEmail,
      inquiryUserTel: userTel,
      inquiryPassword: password,
      inquiryHidden: hidden
    };


  const hotelVal = ["호텔1", "호텔2"];
  const stayVal = ["스테이1", "스테이2"];




  const selChange = (e) => {
    e.preventDefault();
    if (e.target.value === "hotel"){

    }
  }


  const submitHandler = (e) => {
    e.preventDefault();

    console.log(data);
      // axios.post("http://localhost:8080/join/insert",data)
      //   .then((req) => {
      //     console.log("데이터 전송 성공")
      //   }).catch(err => {
      //   console.log(`데이터 전송 실패 ${err}`)
      // })
    };



  return (
    <div style={{paddingTop: 136}}>
      <div className={"container mt-5"}>
        {/* 헤드라인 부분 추후 이동 예정 */}
        <div className={"headline w-75 mx-auto pb-3"}>
          <div className={"text-end"} style={{fontSize: 13}}>
            <span><a href="/" style={{color: "black"}}>홈</a></span>
            <span> > 고객문의 > 고객문의</span>
          </div>
          <div className={""}>
            <h2>문의 작성</h2>
          </div>
        </div>

        {/* 문의 작성 페이지 */}
        <div className={"w-50 mx-auto mt-5"}>
          <form onSubmit={submitHandler}>

            {/* 문의 내용 */}
            <div>

              <div className={"mb-5"}>
                <h3 className={"text-center mb-0"}>문의 내용</h3>
                <div className={"text-end"} style={{fontSize: 12}}>
                  <span className={"required"}>* 는 필수입력사항 입니다</span>
                </div>
              </div>

              {/* 호텔선택 */}
              <div className={"chain"}>
                <span className={"required"}>* </span>
                <label htmlFor={"chain"} className={"form-label"}>체인명</label>
                <div className={"row"}>
                  <div className={"col-sm-5 pe-0"}>
                    <select name={"chain"} className={"form-select"} onChange={selChange}>
                      <option value={"hotel"}>가야호텔</option>
                      <option value={"stay"}>가야스테이</option>
                    </select>
                  </div>
                  <div className={"col-sm"}>
                    <select id={"selHotel"} className={"form-select"} onChange={(e) => {setHotelName(e.target.value)}}>
                      <option value={"호텔1"}>호텔1</option>
                      <option value={"호텔2"}>호텔2</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 주제선택 */}
              <div className={"category mt-4"}>
                <span className={"required"}>* </span>
                <label htmlFor={"category"} className={"form-label"}>유형</label>
                <div className={"row"}>
                  <div className={"col-sm"}>
                    <select className={"form-select"} onChange={(e) => {setCategory(e.target.value)}}>
                      <option value={"객실/패키지"}>객실/패키지 문의</option>
                      <option value={"멤버십"}>멤버십 문의</option>
                      <option value={"시설문의"}>시설문의</option>
                      <option value={"홈페이지 오류 문의"}>홈페이지 오류 문의</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 내용 입력 */}
              <div className={"contents my-4"}>
                <span className={"required"}>* </span>
                <label htmlFor={"contents"} className={"form-label"}>내용</label>
                <textarea className={"form-control"} id={"contents"} style={{height:250}} placeholder={"내용을 입력하세요"}
                          onChange={(e) => {setContents(e.target.value)}}></textarea>
              </div>
            </div>


            <hr className={"my-5"}/>

            {/* 고객 정보 */}
            <div>
              <h3 className={"text-center mb-4"}>고객 정보</h3>

              {/* 이름입력 */}
              <div className={"name my-3"}>
                <span className={"required"}>* </span>
                <label htmlFor={"inquiryUserName"} className={"form-label"}>이름</label>
                <input type={"text"} className={"form-control"} name={"inquiryUserName"}
                       onChange={(e) => {setUserName(e.target.value)}}/>
              </div>

              {/* 이름입력 */}
              <div className={"resvNum my-3"}>
                <span className={"required"}>&nbsp;&nbsp;</span>
                <label htmlFor={"reservationNum"} className={"form-label"}>예약 번호</label>
                <input type={"text"} className={"form-control"} name={"reservationNum"}
                       onChange={(e) => {setReservationNum(e.target.value)}}/>
              </div>

              {/* 이메일입력 */}
              <div className={"email my-3"}>
                <span className={"required"}>* </span>
                <label htmlFor={"inquiryUserEmail"} className={"form-label"}>이메일</label>
                <input type={"email"} className={"form-control"} name={"inquiryUserEmail"}
                       onChange={(e) => {setUserEmail(e.target.value)}}/>
              </div>

              {/* 전화번호 */}
              <div className={"tel my-3"}>
                <span className={"required"}>* </span>
                <label htmlFor={"inquiryUserTel"} className={"form-label"}>연락처</label>
                <input type={"text"} className={"form-control"} name={"inquiryUserTel"} placeholder={"- 를 제외한 숫자를 입력하세요"}
                       onChange={(e) => {setUserTel(e.target.value)}}/>
              </div>

              {/* 첨부 파일 (현재는 폼만 추후 기능 구현) */}
              <div className={"file my-3"}>
                <span className={"required"}>&nbsp;&nbsp;</span>
                <label htmlFor={"inquiryUserTel"} className={"form-label"}>첨부파일</label>
                <input type={"file"} className={"form-control"} id={"files"} name={"files"} />
              </div>
            </div>


            <div className={"row"}>
              {/* 글 비밀번호 */}
              <div className={"password my-3 w-50"}>
                <span className={"required"}>* </span>
                <label htmlFor={"inquiryPassword"} className={"form-label"}>글 비밀번호</label>
                <input type={"password"} className={"form-control"} name={"inquiryPassword"}
                       onChange={(e) => {setPassword(e.target.value)}}/>
              </div>

              {/* 공개 설정 */}
              <div className={"hidden my-3 w-50 ps-5"}>
                <span className={"required"}>* </span>
                <label htmlFor={"inquiryHidden"} className={"form-label"}>문의 공개 설정</label>
                <div className={"col-sm pt-2 gap-5"}>
                  <div className={"form-check form-check-inline"}>
                    <input className={"form-check-input"} type={"radio"} name={"hidden"} value={"Y"}
                           onChange={(e) => {setHidden(e.target.value)}}/>
                    <label className={"form-check-label"} htmlFor={"inlineRadio1"}>비공개</label>
                  </div>
                  <div className={"form-check form-check-inline"}>
                    <input className={"form-check-input"} type={"radio"} name={"hidden"} value={"N"}
                           onChange={(e) => {setHidden(e.target.value)}}/>
                    <label className={"form-check-label"} htmlFor={"inlineRadio2"}>공개</label>
                  </div>
                </div>
              </div>
            </div>

            <div className={"d-flex justify-content-center gap-3 mt-5"}>
              <button className={"btn btn-primary btn-lg col-sm-2"}>확인</button>
              <button className={"btn btn-secondary btn-lg col-sm-2"}>취소</button>
            </div>




          </form>
        </div>


      </div>
      <div className={"mt-5"} style={{backgroundColor:"darkgray"}}>
        <MainFooter />
      </div>
    </div>
  );
}

export default WriteInquiry;