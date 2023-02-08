import React, {useState, useEffect, useCallback} from "react";
import "./Join.css"
import axios, {request} from "axios";
import button from "bootstrap/js/src/button";
import {useNavigate} from "react-router-dom";




function Join(props) {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [birth, setBirth] = useState("")
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    // 오류 메세지
    const [idMes, setIdMes] = useState("")
    const [emailMes, setEmailMes] = useState("")
    const [nameMes, setNameMes] = useState("")
    const [numberMes, setNumberMes] = useState("")
    const [pwMes, setPwMes] = useState("")
    const [confirmPasswordMes, setConfirmPasswordMes] = useState("")
    const [birthMes, setBirthMes] = useState("")

    //유효성 검사
    const [isName, setIsName] = useState(false)
    const [isBirth, setIsBirth] = useState(false)
    const [isId, setIsId] = useState(false)
    const [isNumber, setIsNumber] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isConfirmPassword, setIsConfirmPassword] = useState(false)
    // const router = useRouter()

    const data = {
        memberName: name,
        memberId: id,
        memberPw: pw,
        memberEmail: email,
        memberTel: number,
        memberBirth: birth,
    };

    useEffect(() => {

    }, [])
    const onBirthHandler =  useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setBirth(e.target.value)

        if(e.target.value == "" ){
            setBirthMes('생년월일을 체크해 주세요.')
            setIsBirth(false)
        }else {
            setBirthMes('')
            setIsBirth(true)
        }
    },[])

    const onNameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const nameRegex =  /^(?=.*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{2,5}$/
        const nameCurrent = e.target.value
        setName(nameCurrent)

        if (!nameRegex.test(nameCurrent)) {
            setNameMes('한글로 2글자 이상 5글자 미만으로 입력해주세요.')
            setIsName(false)
        } else {
            setNameMes('')
            setIsName(true)
        }
    }, [])

    const onNumberHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value)
        if (e.target.value.length < 12 || e.target.value.length > 13){
            setNumberMes('올바른 전화번호를 입력해주세요')
            setIsNumber(false)
        }else {
            setNumberMes("")
            setIsNumber(true)
        }
    }, [])
    // const onEmailHandler = (e) => {
    //     setEmail(e.target.value)
    // }
    //
    const onIdHandler= useCallback((e: React.ChangeEvent<HTMLInputElement>) =>{
        const idRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,25}$/
        const idCurrent = e.target.value
        setId(idCurrent)

        if (!idRegex.test(idCurrent)) {
            setIdMes('숫자+영문자 조합으로 4자리 이상 입력해주세요!')
            setIsId(false)
        } else {
            setIdMes('')
            setIsId(true)
        }
    },[])

    const onPasswordHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>{
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$/
            const passwordCurrent = e.target.value
            setPw(passwordCurrent)

        if (!passwordRegex.test(passwordCurrent)) {
            setPwMes('숫자+영문자 조합으로 6자리 이상 입력해주세요!')
            setIsPassword(false)
        } else {
            setPwMes('')
            setIsPassword(true)
        }
    },[])

    const onConfirmPasswordHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>)  => {
            const passwordConfirmCurrent = e.target.value
            setConfirmPassword(passwordConfirmCurrent)

            if (pw === passwordConfirmCurrent) {
                setConfirmPasswordMes('비밀번호를 똑같이 입력했어요 : )')
                setIsConfirmPassword(true)
            } else {
                setConfirmPasswordMes('비밀번호가 틀려요. 다시 확인해주세요')
                setIsConfirmPassword(false)
            }
        },
        [pw]
    )


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
                alert("회원가입이 완료되었습니다.")

                    

            }).then(this.props.history.push("/login"))
            .catch(err => {
            console.log(`데이터 전송 실패 ${err}`)
        })

    }
    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

        if (!emailRegExp.test(currentEmail)) {

            setEmailMes("이메일 형식으로 작성해주세요.");
            setIsEmail(false);
        } else {
            setEmailMes("");
            setIsEmail(true);
        }
    };

// 아이디 중복체크
    const handleIdCheck = (e) => {
        e.preventDefault();
        console.log(id);
        if (!id) {
            setIdMes("아이디을(를)  입력해주세요");
        }else {
            axios.get("http://localhost:8080/join/idCheck",
                {
                    params: {memberId: id}
                })


                .then((req) => {
                    console.log("데이터 전송 성공")

                    if (req.data === 1) alert('중복된 아이디입니다.');
                    else if (req.data === 0) {
                        alert('사용가능한 아이디입니다.');
                        setIdMes("")
                    }

                }).catch(err => {
                console.log(`데이터 전송 실패 ${err}`)
            })

        }


    }
//이메일 중복체크
    const handleEmailCheck = (e) => {
        e.preventDefault();
        console.log(email);
        if (!email) {
            setEmailMes("이메일을(를)  입력해주세요");
        }else {
            axios.get("http://localhost:8080/join/emailCheck",
                {
                    params: {memberEmail: email}
                })
                .then((req) => {
                    console.log("데이터 전송 성공")
                    if (req.data === 1) alert('중복된 이메일입니다.');
                    else if (req.data === 0){
                        alert('사용가능한 이메일입니다.');
                        setEmailMes("")
                    }
                }).catch(err => {
                console.log(`데이터 전송 실패 ${err}`)
            })
        }
    }

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
                                    <td><input type={"text"} value={id}  className={"id"} onChange={onIdHandler} autoComplete={"off"}/></td>
                                    <td>
                                        <button onClick={handleIdCheck} className={"btn btn-primary"}>아이디중복</button>
                                    </td>
                                    <td><span>{idMes}</span></td>
                                </tr>

                                <tr>
                                    <td> E-Mail :</td>
                                    <td><input type={"email"} value={email} onChange={onChangeEmail}/></td>
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
                                    <td><input type={"password"} value={confirmPassword} onChange={onConfirmPasswordHandler} /></td>
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
                                    <td><span>{birthMes}</span></td>
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
                                    <td><input className={"col-6"} type={"text"} maxLength={13} onChange={onNumberHandler} value={number} /></td>
                                    <td><span>{numberMes}</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <section>
                        <button type={"submit"} className={"activation"} disabled={!(isEmail && isId &&
                            isName && isNumber && isPassword && isConfirmPassword && isBirth)} >
                            회원가입
                        </button>
                    </section>
                </div>

            </form>
        </div>
    )

}

export default Join;