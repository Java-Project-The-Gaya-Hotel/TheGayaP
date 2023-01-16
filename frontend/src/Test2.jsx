import React from "react";
import "../src/Test.css"
import Test2Detail from "./Test2Detail";

function Test2() {

    return (
        <div>
            <table className={"tableTypeA"} summary={"성명,아이디,비밀번호,비밀번호확인,생년월일,이메일,휴대전화로 구성된테이블입니다."}>
                <caption>회원가입 기본정보입력</caption>
                <colgroup>
                    <col width="16%" className="col1"></col>
                    <col className="col2"></col>
                </colgroup>
                <tbody>
                <tr className="first">
                    <th scope="row" className="first"><em className="ast">*</em> 성명(국문)</th>
                    <td className="first">
                        <div className={"row"}>
                             <div className={"col"}>
                                 성 : <input type={"text"} />
                             </div>
                            <div className={"col"}>
                                이름 : <input type={"text"}/>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className={"first"}>
                    <th scope="row" className="first"><em className="ast">*</em> 생년월일</th>
                    <td className="first ">
                      <Test2Detail/>
                    </td>
                </tr>

                <tr className="first">
                    <th scope="row" className="first"><em className="ast">*</em> 휴대전화</th>
                    <td className="first">
                        <div className={"row"}>
                            <div className="selector disabled col">
                                <select  className="form-select form-select-sm" >
                                    <option value="010" title="010" >010</option>
                                    <option value="011" title="011">011</option>
                                    <option value="016" title="016">016</option>
                                    <option value="017" title="017">017</option>
                                    <option value="018" title="018">018</option>
                                    <option value="019" title="019">019</option>
                                </select>
                            </div>
                            <div className={"col"}>
                               - <input />
                            </div>
                            <div className={"col"}>
                               - <input />
                            </div>

                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Test2;