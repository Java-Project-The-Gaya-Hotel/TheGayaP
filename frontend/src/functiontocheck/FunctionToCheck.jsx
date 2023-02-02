import axios from "axios";
import moment from "moment";

// token의 유효성 검사 후 권한 확인
function AuthorityCheck() {

    try {
        // 세션 스토리지의 토큰 가져오기
        const tokenJson = JSON.parse(sessionStorage.getItem("token"));
        // 토큰중 accessToken 가져오기
        const acToken = tokenJson["accessToken"];

        // accessToken으로 토큰 만료 확인
        axios.get("http://localhost:8080/members/actokencheck", {
                headers: {
                    Authorization: `Bearer ${acToken}`
                }
            }
        ).then(() => {
            return true;
            //     실패시 refreshToken으로 재발급 신청
        }).catch(async () => {

            try {
                const response = await axios.post("http://localhost:8080/members/refreshtokencheck", tokenJson);
                sessionStorage.setItem("token", JSON.stringify(response.data));
                return true;
            } catch (e) {
                return false;
            }

        })
    } catch (e) {
        return false;
    }


}


// 세션 만료 확인
function SessionCheck() {
    if (sessionStorage.getItem("loginInfo") != null) {
        const loginTime = Number(sessionStorage.getItem("loginInfo"));
        const currentTime = moment.now();
        if (currentTime - loginTime > 300000) {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("loginInfo");
            alert("로그인이 만료 됐습니다.");
            window.location.reload();
        } else {
            sessionStorage.setItem("loginInfo", moment.now().toString());
        }
    }
}

async function GetMemberIdByToken() {
    try {
        const tokenJson = JSON.parse(sessionStorage.getItem("token"));
        const acToken = tokenJson["accessToken"];
        const response = await axios.get("http://localhost:8080/members/access", {params: {accessToken: acToken}});
        return response;
    } catch (e) {
        return null;
    }
}


export {AuthorityCheck, SessionCheck, GetMemberIdByToken}