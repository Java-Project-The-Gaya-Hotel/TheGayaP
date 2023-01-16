import React from "react";

function Test3() {
    function useDispatch() {
        return undefined;
    }

    const dispatch = useDispatch();

    const [Email, setEmail] = React.useState("")
    const [Password, setPassword] = React.useState("")
    const [Name, setName] = React.useState("")
    const [ConfirmPassword, setConfirmPassword] = React.useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    function registerUser(body) {
        return undefined;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); //리프레시 방지-> 방지해야 이 아래 라인의 코드들 실행 가능

        // console.log('Email', Email);
        // console.log('Password', Password);

        //비밀번호와 비밀번호 확인 같을띠 회원가입 되게 함
        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }   //여기서 걸리면 아래로 못감

        let body = {
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    let props;
                    props.history.push('/login')
                } else {
                    alert('Failed to sign up')
                }

            })


    }
    return (
        <div>
            <table className={"tableTypeA"}>
                <colgroup>
                    <col width="16%" className="col1"></col>
                    <col className="col2"></col>
                </colgroup>
                <tbody>
                <tr className={"first"}>
                    <th className={"first"}><em className={"ast"}>*</em> 아이디</th>
                    <td className="first ">
                        <input type={"text"} value={Name} onChange={onNameHandler} className={"id"} autoComplete={"off"} maxLength={"15"}/>
                        {/*<span className="idConfirm"><a href="javascript:checkDuplicateLognId()">아이디 중복확인</a></span>*/}
                        <span className="msgCheck msgCheck2">5~12자  이내 영문 또는 /숫자 조합</span>
                    </td>
                    <td className={"first"}/>
                </tr>
                <tr className="first">
                    <th scope="row" className="first"><em className="ast">*</em> 이메일</th>

                    <td className="first">
                        <input type={"Email"} value={Email} onChange={onEmailHandler}/>
                        @
                        <input/>

                    </td>
                </tr>
                <tr className={"first"}>
                    <th><em className={"ast"}>*</em> 비밀번호</th>
                    <td>
                        <input type={"password"} value={Password} onChange={onPasswordHandler}/>
                    </td>
                </tr>
                <tr className={"first"}>
                    <th><em className={"ast"}>*</em> 비밀번호 확인</th>
                    <td>
                        <input type={"password"} value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Test3;