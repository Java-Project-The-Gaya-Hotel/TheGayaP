import axios from "axios";
import moment from "moment";

// 권한 확인을 위한 함수 모음



// token의 유효성 검사 후 권한 확인
function AuthorityCheck() {

    try {
        // 세션 스토리지의 토큰 가져오기
        const tokenJson = JSON.parse(sessionStorage.getItem("token"));
        // 토큰중 accessToken 가져오기
        const acToken = tokenJson["accessToken"];

        // accessToken으로 토큰 만료 확인
        axios.get("http://localhost:8081/members/actokencheck", {
                headers: {
                    Authorization: `Bearer ${acToken}`
                }
            }
        ).then(() => {
            return true;
            //     실패시 refreshToken으로 재발급 신청
        }).catch(async () => {

            try {
                // refreshToken 으로 재발급 성공시 token 정보 재할당
                const response = await axios.post("http://localhost:8081/members/refreshtokencheck", tokenJson);
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
        // 로그인한 시간
        const loginTime = Number(sessionStorage.getItem("loginInfo"));
        // 지금 시간
        const currentTime = moment.now();
        // 로그인한 시간보다 숫자 밀리초 만큼 차이가 날시 세션 만료 및 스토리지 초기화
        if (currentTime - loginTime > 1800000) {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("loginInfo");
            alert("로그인이 만료 됐습니다.");
            window.location.reload();
        //     차이가 안나면 로그인 시간 재할당
        } else {
            sessionStorage.setItem("loginInfo", moment.now().toString());
        }
    }
}

// 토큰의 정보로 유저 Id 가져오는 함수
async function GetMemberIdByToken() {
    try {
        const tokenJson = JSON.parse(sessionStorage.getItem("token"));
        const acToken = tokenJson["accessToken"];
        const response = await axios.get("http://localhost:8081/members/access", {params: {accessToken: acToken}});
        return response;
    } catch (e) {
        return null;
    }
}


export {AuthorityCheck, SessionCheck, GetMemberIdByToken}