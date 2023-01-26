import React, {useState} from "react";
import LoginMember from "./LoginMember";
import NotMember from "./NotMember";
import loginMember from "./LoginMember";
import notMember from "./NotMember";

function LoginBody() {

    const [isMember, setIsMember] = useState(true);




    return (
        <div>
            <div className={"btn-group container p-0"} role={"group"} aria-label={"LoginGroup"}>
                {/*버튼 그룹으로 회원 비회원 분리*/}
                <button type={"button"} className={"btn btn-outline-secondary py-3"}
                        style={{borderRadius: 0}} onClick={()=>setIsMember(true)}>회원
                </button>
                <button type={"button"} className={"btn btn-outline-secondary"} style={{borderRadius: 0}} onClick={()=>setIsMember(false)}>비회원
                </button>
            </div>
            {
                isMember ? <LoginMember/> : <NotMember/>
            }
        </div>
    );
}

export default LoginBody;