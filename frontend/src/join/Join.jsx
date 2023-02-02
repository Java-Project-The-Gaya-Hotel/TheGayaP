import React, {useState, useEffect} from "react";
import "./Join.css"
import axios, {request} from "axios";


function Join(props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [birth, setBirth] = useState("")
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [idMes, setIdMes] = useState("")
    const [emailMes, setEmailMes] = useState("")
    const [nameMes, setNameMes] = useState("")
    const [numberMes, setNumberMes] = useState("")
    const [pwMes, setPwMes] = useState("")
    const [confirmPasswordMes, setConfirmPasswordMes] = useState("")

    const data = {
        memberName: name,
        memberId: id,
        memberPw: pw,
        memberEmail: email,
        memberTel: number,
        memberBirth: birth,
    };

    const onBirthHandler = (e) => {
        setBirth(e.target.value)
    }

    const onNameHandler = (e) => {
        setName(e.target.value)
    }

    const onNumberHandler = (e) => {
        setNumber(e.target.value)

    }
    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const onIdHandler = (e) => {
        setId(e.target.value)


    }

    const onPasswordHandler = (e) => {
        setPw(e.target.value)
    }

    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault(); //리프레시 방지-> 방지해야 이 아래 라인의 코드들 실행 가능


        // 비밀번호와 비밀번호 확인 같을띠 회원가입 되게 함
        if (pw !== confirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }   //여기서 걸리면 아래로 못감

        axios.post("http://localhost:8080/join/insert", data)
            .then((req) => {
                console.log("데이터 전송 성공")
                console.log(data);
            }).catch(err => {
            console.log(`데이터 전송 실패 ${err}`)
        })

    }
    const joinBtn = () => {
        if (id && name && email && number && pw && confirmPassword) {
            alert('회원 가입 완료');
        } else {
            if (!id) {
                setIdMes("아이디을(를)  입력해주세요");
            }   if (!email) {
                setEmailMes("이메일을(를) 입력해주세요");
            }   if (!pw) {
                setPwMes("비밀번호을(를)  입력해주세요");
            }if (!confirmPassword) {
                setConfirmPasswordMes("중복 비밀번호을(를)  입력해주세요");
            }if (!name) {
                setNameMes("이름을(를) 입력해주세요");
            }if (!number) {
                setNumberMes("전화번호을(를) 입력해주세요");
            }

        }
    }


// 아이디 중복체크
const handleIdCheck = (e) => {
    e.preventDefault();
    console.log(id);


    axios.get("http://localhost:8080/join/idCheck",
        {
            params: {memberId: id}
        })

        .then((req) => {
            console.log("데이터 전송 성공")

            if (req.data === 1) alert('중복된 아이디입니다.');
            else if (req.data === 0) alert('사용가능한 아이디입니다.');
        }).catch(err => {
        console.log(`데이터 전송 실패 ${err}`)
    })
}
//이메일 중복체크
const handleEmailCheck = (e) => {
    e.preventDefault();
    console.log(email);
    axios.get("http://localhost:8080/join/emailCheck",
        {
            params: {memberEmail: email}
        })
        .then((req) => {
            console.log("데이터 전송 성공")
            if (req.data === 1) alert('중복된 이메일입니다.');
            else if (req.data === 0) alert('사용가능한 이메일입니다.');
        }).catch(err => {
        console.log(`데이터 전송 실패 ${err}`)
    })
}
    // const autoHyphen2 = (target) => {
    //     target.value = target.value
    //         .replace(/[^0-9]/g, '')
    //         .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
    // }
const handlePress = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
        setNumber(e.target.value);
    }
}

useEffect(() => {



    if (number.length === 10) {
        setNumber(number.replace(/^(\d{2,3})(\d{3,4})(\d{4})/, '$1-$2-$3'));
    }
    if (number.length === 13) {
        setNumber(number.replace(/-/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})/, '$1-$2-$3'));
    }
}, [number]);

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
                                    <input type={"text"} value={id} onChange={onIdHandler}
                                           className={"id"}
                                           autoComplete={"off"}/>
                                    <button onClick={handleIdCheck} className={"btn btn-primary"}>
                                        아이디중복
                                    </button>
                                    {/*<span className="idConfirm"><a href="javascript:checkDuplicateLognId()">아이디 중복확인</a></span>*/}
                                    <span>{idMes}</span>
                                </div>
                            </td>


                        </tr>
                        <tr className="first">
                            <th scope="row" className="first"><em className="ast">*</em> 이메일</th>

                            <td className="first">
                                <div className={"row"}>
                                    <div className={"col"}>
                                        <input type={"Email"} value={email} onChange={onEmailHandler}/>
                                        {/*<span>@</span>*/}
                                        {/*<input/>*/}
                                        <button onClick={handleEmailCheck} className={"btn btn-primary"}>
                                            이메일 중복
                                        </button>
                                        <span>{emailMes}</span>
                                        <div className={"text"}>

                                        </div>


                                    </div>   {/*</div>*/}
                                    {/*<div className={"col"}>*/}
                                    {/*  <div className="selector disabled col">*/}
                                    {/*    /!*<select className="form-select form-select-sm">*!/*/}
                                    {/*    /!*  <option value="">직접입력</option>*!/*/}
                                    {/*    */}
                                    {/*    /!*  <option value="naver.com" title="naver.com">naver.com</option>*!/*/}
                                    {/*    */}
                                    {/*    /!*  <option value="hanmail.net" title="hanmail.net">hanmail.net</option>*!/*/}
                                    {/*    */}
                                    {/*    /!*  <option value="nate.com" title="nate.com">nate.com</option>*!/*/}
                                    {/*    */}
                                    {/*    /!*  <option value="gmail.com" title="gmail.com">gmail.com</option>*!/*/}
                                    {/*    */}
                                    {/*    /!*  <option value="hotmail.com" title="hotmail.com">hotmail.com</option>*!/*/}
                                    {/*    */}
                                    {/*    /!*  <option value="yahoo.co.kr" title="yahoo.co.kr">yahoo.co.kr</option>*!/*/}
                                    {/*    */}
                                    {/*    /!*</select>*!/*/}

                                    {/*  </div>*/}

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
                                <input type={"password"} value={pw} onChange={onPasswordHandler}/>
                                <span>{pwMes}</span>
                            </td>

                            <th><em className={"ast"}>*</em> 비밀번호 확인</th>
                            <td>
                                <input type={"password"} value={confirmPassword}
                                       onChange={onConfirmPasswordHandler}/>
                                <span className={"ast"}> {confirmPasswordMes}</span>
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
                                        <input type={"text"} value={name} onChange={onNameHandler}/>
                                    </div>
                                        <span>{nameMes}</span>
                                </div>
                            </td>

                        </tr>
                        <tr className={"first"}>
                            <th scope="row" className="first"><em className="ast">*</em> 생년월일</th>
                            <td className="first ">
                                <input type={"date"} value={birth} onChange={onBirthHandler} className={"Birth"}/>
                                {/*<Join2Detail/>*/}
                            </td>
                        </tr>

                        <tr className="first">
                            <th scope="row" className="first"><em className="ast">*</em> 휴대전화</th>
                            <td className="first">
                                <div className={"ms-sm-2"}>
                                    <div className="selector disabled row  ">
                                        <select className="col-2">
                                            <option value="+82" title="+82">+82 한국</option>
                                            <option value="+1" title="+1">+1 미국</option>
                                            <option value="+44" title="+44">+44 영국</option>
                                            <option value="+49" title="+49">+49 독일</option>
                                            <option value="+81" title="+81">+81 일본</option>
                                            <option value="+84" title="+84">+84 중국</option>
                                        </select>
                                        <input className={"col-2"} type={"text"} maxLength={13} value={number} onChange={onNumberHandler}/>
                                        <span>{numberMes}</span>

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

                </div>

                <button formAction={""} className={"btn btn-primary"} onClick={joinBtn}>
                    회원 가입
                </button>

            </div>
        </form>
    </div>
)

}

export default Join;