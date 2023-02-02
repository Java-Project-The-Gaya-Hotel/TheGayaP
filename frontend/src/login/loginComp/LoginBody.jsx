import React, {useState} from "react";
import LoginMember from "./LoginMember";
import NotMember from "./NotMember";
import loginMember from "./LoginMember";
import notMember from "./NotMember";

const styles={
    border:{
        borderRadius: 0
    }
}

// 회원 비회원의 컴포넌트를 가진 컴포넌트
function LoginBody() {

    const [isMember, setIsMember] = useState(true);


    return (
        <div>
            <div className={"btn-group container p-0"} role={"group"} aria-label={"LoginGroup"}>
                {/*버튼 그룹으로 회원 비회원 분리*/}
                <button type={"button"} className={"btn btn-outline-dark py-3 fw-bold"} style={styles.border} onClick={()=>setIsMember(true)}>회원</button>
                <button type={"button"} className={"btn btn-outline-dark fw-bold"} style={styles.border} onClick={()=>setIsMember(false)}>비회원
                </button>
            </div>
            {
                isMember ? <LoginMember/> : <NotMember/>
            }
        </div>
    );
}

export default LoginBody;