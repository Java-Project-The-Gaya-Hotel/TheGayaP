import moment from "moment/moment";
import {useNavigate} from "react-router-dom";

function LoginCheck(){

    if (sessionStorage.getItem("loginInfo") != null) {
        const loginTime = Number(sessionStorage.getItem("loginInfo"));
        const currentTime = moment.now();

        if (currentTime - loginTime > 300000) {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("loginInfo");
            alert("로그인이 만료 됐습니다.");
            window.location.href="/login";
            return "success"
        } else {
            sessionStorage.setItem("loginInfo",moment.now().toString());
            return "failed"
        }

    }
}

export {LoginCheck}

