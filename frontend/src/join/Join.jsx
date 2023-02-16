import React, {useCallback, useEffect, useState} from "react";
import "./Join.css"
import {default as Axios} from "axios";
import button from "bootstrap/js/src/button";
import {useNavigate} from "react-router-dom";
import {ReactNode} from "react";
import Swal from "sweetalert2";
const axios = Axios.create({
    baseURL: "http://ec2-13-125-220-237.ap-northeast-2.compute.amazonaws.com:8080"
});



function Join(props) {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [birth, setBirth] = useState("")
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navi = useNavigate();

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

        if(e.target.value === "" ){
            setBirthMes('생년월일을 체크해 주세요.')
            setIsBirth(false)
        }else {
            setBirthMes('')
            setIsBirth(true)
        }
    },[])

    const onNameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const nameRegex =  /^(?=.*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z]).{2,10}$/
        const nameCurrent = e.target.value
        setName(nameCurrent)

        if (!nameRegex.test(nameCurrent)) {
            setNameMes('올바른 이름을 입력해주세요')
            setIsName(false)
        } else {
            setNameMes('')
            setIsName(true)
        }
    }, [])

    const onNumberHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const numberRegex = /^([0-9]{3})-?([0-9]{4})-?([0-9]{4})$/;
        const numberCurrent = e.target.value;
        setNumber(numberCurrent);

        if (!numberRegex.test(numberCurrent)){
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
            setIdMes('숫자+영문자 조합으로 4자리 이상 입력하세요')
            setIsId(false)
        } else {
            setIdMes('')
            setIsId(true)
        }
    },[])

    useEffect(() => {

        if (number.length === 11) {
            setNumber(number.replace(/-/g, '').replace(/^(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [number]);


    const onPasswordHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>{
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$/
            const passwordCurrent = e.target.value
            setPw(passwordCurrent)

        if (!passwordRegex.test(passwordCurrent)) {
            setPwMes('숫자+영문자 조합으로 6자리 이상 입력하세요')
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
                setConfirmPasswordMes('')
                setIsConfirmPassword(true)
            } else {
                setConfirmPasswordMes('비밀번호가 일치하지 않습니다.')
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

        axios.post("/join/insert", data)
            .then((req) => {
                Swal.fire({
                    icon: 'info',
                    title: '가입 성공!',
                }).then(res=>{
                    if (res.isConfirmed){
                        navi("/login");
                    }
                })
            }).catch(err => {
            Swal.fire({
                icon: 'warning',
                title: '가입 실패!',
                text: ' 알수없는 오류. ',
            }).then(res=>{
                if (res.isConfirmed){
                        navi("/join");
                }
            })
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
            setIdMes("아이디를 입력해주세요");
        }else {
            axios.get("/join/idCheck",
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
            setEmailMes("이메일을 입력해주세요");
        }else {
            axios.get("/join/emailCheck",
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




    return (
        <div className={"contain"}>
            <form onSubmit={onSubmitHandler}>
                <div className={"container"}>

                    <div className={"row"}>
                        <div className={"col"}>
                            <table className={"table"}>
                                <thead>
                                <tr>
                                    <th className={"col-sm-3"}>기본 정보</th>
                                    <th className={"col-sm-5"}></th>
                                    <th></th>
                                </tr>
                                </thead>

                                <tbody>

                                <tr style={{borderBottomStyle: "hidden"}}>
                                    <td>아이디</td>
                                    <td><input type={"text"} value={id}  className={"id form-control rounded-0"} onChange={onIdHandler} autoComplete={"off"}/></td>
                                    <td>
                                        <button onClick={handleIdCheck} className={"btn btn-outline-dark rounded-0"}>중복확인</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={"validation p-0 ps-2 pb-1"} colSpan={4}>{idMes}</td>
                                </tr>

                                <tr style={{borderBottomStyle: "hidden"}}>
                                    <td>이메일</td>
                                    <td><input className={"form-control rounded-0"} type={"email"} value={email} onChange={onChangeEmail}/></td>
                                    <td>
                                        <button onClick={handleEmailCheck} className={"btn btn-outline-dark rounded-0"}>중복확인</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={"validation p-0 ps-2 pb-1"} colSpan={4}>{emailMes}</td>
                                </tr>

                                <tr style={{borderBottomStyle: "hidden"}}>
                                    <td>비밀번호</td>
                                    <td><input className={"form-control rounded-0"} type={"password"} value={pw} onChange={onPasswordHandler}/></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className={"validation p-0 ps-2 pb-1"} colSpan={4}>{pwMes}</td>
                                </tr>

                                <tr style={{borderBottomStyle: "hidden"}}>
                                    <td>비밀번호 확인</td>
                                    <td><input className={"form-control rounded-0"} type={"password"} value={confirmPassword} onChange={onConfirmPasswordHandler} /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className={"validation p-0 ps-2 pb-1"} colSpan={4}>{confirmPasswordMes}</td>
                                </tr>



                                </tbody>
                            </table>
                        </div>


                        <div className={"col"}>
                            <table className={"table"}>
                                <thead>
                                <tr>
                                    <th className={"col-sm-3"}>고객 정보</th>
                                    <th className={"col-sm-3"}></th>
                                    <th className={"col-sm-4"}></th>
                                    <th className={"col-sm"}></th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr style={{borderBottomStyle: "hidden"}}>
                                    <td>성명</td>
                                    <td colSpan={2}><input type={"text"} className={"form-control rounded-0 w-50"} value={name} onChange={onNameHandler}/></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className={"validation p-0 ps-2 pb-1"} colSpan={4}>{nameMes}</td>
                                </tr>

                                <tr style={{borderBottomStyle: "hidden"}}>
                                    <td>생년월일</td>
                                    <td colSpan={2}><input type={"date"} value={birth} onChange={onBirthHandler} className={"Birth form-control rounded-0 w-50"}/></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className={"validation p-0 ps-2 pb-1"} colSpan={4}>{birthMes}</td>
                                </tr>


                                <tr style={{borderBottomStyle: "hidden"}}>
                                    <td>연락처</td>
                                    <td>
                                        <select className={"form-select rounded-0"}>
                                            <option value="+82" title="+82">+82 한국</option>
                                            <option value="+1" title="+1">+1 미국</option>
                                            <option value="+44" title="+44">+44 영국</option>
                                            <option value="+49" title="+49">+49 독일</option>
                                            <option value="+81" title="+81">+81 일본</option>
                                            <option value="+84" title="+84">+84 중국</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input className={"form-control rounded-0"} type={"text"} maxLength={13} onChange={onNumberHandler} value={number} />
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className={"validation p-0 ps-2 pb-1"} colSpan={4}>{numberMes}</td>
                                </tr>
                                </tbody>
                            </table>
                            <div className={"d-flex justify-content-end me-1"}>
                                <button type={"submit"}  className={"activation btn btn-dark rounded-0"} disabled={!(isEmail && isId &&
                                  isName && isNumber && isPassword && isConfirmPassword && isBirth)}
                                >회원가입
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </form>
        </div>
    )

}

export default Join;