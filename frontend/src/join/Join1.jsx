import React from "react";
import "../join/Join3.css"
import "../join/Join2.css"


function Join1(props) {


    const [Email, setEmail] = React.useState("")
    const [Password, setPassword] = React.useState("")
    const [Id, setId] = React.useState("")
    const [ConfirmPassword, setConfirmPassword] = React.useState("")
    const [Name, setName] = React.useState("")
    const [Number, setNumber] = React.useState("")
    const [Birth, setBirth] = React.useState("")
    const onBirthHandler = (event) => {
        setBirth(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onNumberHandler = (event) => {
        setNumber(event.target.value)
    }
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault(); //리프레시 방지-> 방지해야 이 아래 라인의 코드들 실행 가능

        console.log('Email', Email);
        console.log('Password', Password);
        console.log('name', Name);
        console.log('Birth', Birth);
        console.log('number', Number);
        // 비밀번호와 비밀번호 확인 같을띠 회원가입 되게 함
        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }   //여기서 걸리면 아래로 못감

        let body = {
            email: Email,
            password: Password,
            id: Id
        }
    }


    return (

        <div className={"contain"}>
            <form onSubmit={onSubmitHandler}>


                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col"}>

                            <h3>회원정보</h3>
                        </div>
                        <hr/>
                        <div className={"row"}>
                            <div className={"col"}>
                                <h5>기본정보</h5>
                            </div>
                            <div className={"col text-end"}>
                                <h5><em className="ast">*</em> 표시 필수입력 사항</h5>
                            </div>
                        </div>
                        <table className={"tableTypeA"}>
                            <colgroup>
                                <col width="16%" className="col1"></col>
                                <col className="col2"></col>
                            </colgroup>
                            <tbody>
                            <tr className={"first"}>
                                <th className={"first"}><em className={"ast"}>*</em> 아이디</th>
                                <td>
                                    <div className="first ">
                                        <input type={"text"} value={Id} onChange={onIdHandler} className={"id"}
                                               autoComplete={"off"}/>
                                        {/*<span className="idConfirm"><a href="javascript:checkDuplicateLognId()">아이디 중복확인</a></span>*/}
                                        <span className="msgCheck msgCheck2"> 5~12자  이내 영문 또는 /숫자 조합</span>
                                    </div>
                                </td>


                            </tr>
                            <tr className="first">
                                <th scope="row" className="first"><em className="ast">*</em> 이메일</th>

                                <td className="first">
                                    <div className={"row"}>
                                        <div className={"col"}>
                                            <input type={"Email"} value={Email} onChange={onEmailHandler}/>
                                            <span>@</span>
                                            <input/>
                                            <div className={"text"}>

                                            </div>

                                        </div>
                                        <div className={"col"}>
                                            <div className="selector disabled col">
                                                <select className="form-select form-select-sm">
                                                    <option value="">직접입력</option>

                                                    <option value="naver.com" title="naver.com">naver.com</option>

                                                    <option value="hanmail.net" title="hanmail.net">hanmail.net</option>

                                                    <option value="nate.com" title="nate.com">nate.com</option>

                                                    <option value="gmail.com" title="gmail.com">gmail.com</option>

                                                    <option value="hotmail.com" title="hotmail.com">hotmail.com</option>

                                                    <option value="yahoo.co.kr" title="yahoo.co.kr">yahoo.co.kr</option>

                                                </select>

                                            </div>
                                            {/*<Join3Detail/>*/}
                                        </div>
                                    </div>

                                </td>
                            </tr>


                            </tbody>
                        </table>
                        <table className={"tableTypeC "}>
                            <colgroup>
                                <col width="16%" className="col1"></col>
                                <col className="col2"></col>
                                <col width="16%" className="col3"></col>
                            </colgroup>
                            <tbody>

                            <tr className={"first col"}>
                                <th><em className={"ast"}>*</em> 비밀번호</th>
                                <td>
                                    <input type={"password"} value={Password} onChange={onPasswordHandler}/>
                                </td>

                                <th><em className={"ast"}>*</em> 비밀번호 확인</th>
                                <td>
                                    <input type={"password"} value={ConfirmPassword}
                                           onChange={onConfirmPasswordHandler}/>
                                </td>

                            </tr>

                            </tbody>
                        </table>
                        <table className={"tableTypeB"} summary={"성명,아이디,비밀번호,비밀번호확인,생년월일,이메일,휴대전화로 구성된테이블입니다."}>
                            <colgroup>
                                <col width="16%" className="col1"></col>
                                <col className="col2"></col>
                            </colgroup>
                            <tbody>
                            <tr className="first">
                                <th scope="row" className="first"><em className="ast">*</em> 성명</th>
                                <td className="first">
                                    <div className={"row"}>
                                        <div className={"col"}>
                                            <input type={"text"} value={Name} onChange={onNameHandler}/>
                                        </div>

                                    </div>
                                </td>

                            </tr>
                            <tr className={"first"}>
                                <th scope="row" className="first"><em className="ast">*</em> 생년월일</th>
                                <td className="first ">
                                    <input type={"date"} value={Birth} onChange={onBirthHandler} className={"Birth"}/>
                                    {/*<Join2Detail/>*/}
                                </td>
                            </tr>

                            <tr className="first">
                                <th scope="row" className="first"><em className="ast">*</em> 휴대전화</th>
                                <td className="first">
                                    <div className={"number"}>
                                        <div className="selector disabled row ">
                                            <select className="form-select form-select-sm col">
                                                <option value="+82" title="+82">+82</option>
                                                <option value="+82" title="+82">+82</option>
                                                <option value="+82" title="+82">+82</option>
                                                <option value="+82" title="+82">+82</option>
                                                <option value="+82" title="+82">+82</option>
                                                <option value="+82" title="+82">+82</option>
                                            </select>
                                            <input value={Number} onChange={onNumberHandler} />

                                        </div>
                                        <div className={"col"}>


                                        </div>
                                        <div className={"col"}>

                                        </div>

                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        {/*<Join3/>*/}
                        {/*<Join2/>*/}

                    </div>

                    <button formAction={""} className={"btn btn-primary"}>
                        회원 가입
                    </button>
                </div>
            </form>
        </div>
    )

}

export default Join1;