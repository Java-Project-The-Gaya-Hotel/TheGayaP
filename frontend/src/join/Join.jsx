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
            }
            if (!email) {
                setEmailMes("이메일을(를) 입력해주세요");
            }
            if (!pw) {
                setPwMes("비밀번호을(를)  입력해주세요");
            }
            if (!confirmPassword) {
                setConfirmPasswordMes("중복 비밀번호을(를)  입력해주세요");
            }
            if (!name) {
                setNameMes("이름을(를) 입력해주세요");
            }
            if (!number) {
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
                            <table className={"table table-hover"}>
                                <thead>
                                <tr>
                                    <th colSpan={4}>기본 정보</th>
                                </tr>
                                </thead>

                                <tbody>

                                <tr>
                                    <td> ID :</td>
                                    <td><input type={"text"} value={id} onChange={onIdHandler} className={"id"} autoComplete={"off"}/></td>
                                    <td>
                                        <button onClick={handleIdCheck} className={"btn btn-primary"}>아이디중복</button>
                                    </td>
                                    <td><span>{idMes}</span></td>
                                </tr>

                                <tr>
                                    <td> E-Mail :</td>
                                    <td><input type={"Email"} value={email} onChange={onEmailHandler}/></td>
                                    <td>
                                        <button onClick={handleEmailCheck} className={"btn btn-primary"}>이메일 중복</button>
                                    </td>
                                    <td><span>{emailMes}</span></td>
                                </tr>


                                <tr>
                                    <td> PW :</td>
                                    <td><input type={"password"} value={pw} onChange={onPasswordHandler}/></td>
                                    <td><span>{pwMes}</span></td>
                                </tr>

                                <tr>
                                    <td> PW Check :</td>
                                    <td><input type={"password"} value={confirmPassword} onChange={onConfirmPasswordHandler}/></td>
                                    <td><span className={"ast"}> {confirmPasswordMes}</span></td>
                                </tr>


                                </tbody>
                            </table>
                        </div>


                        <div className={"col"}>
                            <table className={"table table-hover"}>
                                <thead>
                                <tr>
                                    <th colSpan={4}>고객정보</th>
                                </tr>
                                </thead>

                                <tbody>

                                <tr>
                                    <td> 성명 :</td>
                                    <td colSpan={2}><input type={"text"} value={name} onChange={onNameHandler}/></td>
                                    <td><span>{nameMes}</span></td>
                                </tr>


                                <tr>
                                    <td> 생년월일 :</td>
                                    <td colSpan={2}><input type={"date"} value={birth} onChange={onBirthHandler} className={"Birth"}/></td>
                                    <td><span>{nameMes}</span></td>
                                </tr>


                                <tr>
                                    <td> 연락처 :</td>
                                    <td>
                                        <select className="col-2">
                                            <option value="+82" title="+82">+82 한국</option>
                                            <option value="+1" title="+1">+1 미국</option>
                                            <option value="+44" title="+44">+44 영국</option>
                                            <option value="+49" title="+49">+49 독일</option>
                                            <option value="+81" title="+81">+81 일본</option>
                                            <option value="+84" title="+84">+84 중국</option>
                                        </select></td>
                                    <td><input className={"col-2"} type={"text"} maxLength={13} value={number} onChange={onNumberHandler}/></td>
                                    <td><span>{numberMes}</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

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