package com.gaya.thegayap.controller;


import com.gaya.thegayap.dto.MemberLoginRequestDto;
import com.gaya.thegayap.dto.TokenInfo;
import com.gaya.thegayap.jwt.JwtTokenProvider;
import com.gaya.thegayap.service.MemberLoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;


/**
 * JWT SpringSecurity 연동 멤버 로그인과 토큰 발급 컨트롤러
 * author 신현섭
 */
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberLoginController {
    private final MemberLoginService memberLoginService;

    private final JwtTokenProvider jwtTokenProvider;




    /**
     * 로그인 컨트롤러
     * author 신현섭
     * @param memberLoginRequestDto
     * @return
     */
    @PostMapping("/login")
    public TokenInfo login(@RequestBody MemberLoginRequestDto memberLoginRequestDto) {


        String memberId = memberLoginRequestDto.getMemberId();
        String password = memberLoginRequestDto.getMemberPw();
        try {
            TokenInfo tokenInfo = memberLoginService.login(memberId, password);
            return tokenInfo;
        } catch (Exception e) {
//            e.printStackTrace();
            return null;
        }
    }

    /**
     * 토큰 유효성 간단 통과 확인 컨트롤러
     * author 신현섭
     * @return
     */
    @GetMapping("/actokencheck")
    public String test() {
        return "success";
    }


    /**
     * 재생성 토큰의 유효성 검사 컨트롤러
     * author 신현섭
     * @param token
     * @return
     */
    @PostMapping("/refreshtokencheck")
    public TokenInfo validToken(@RequestBody TokenInfo token) {

        try {
            TokenInfo tokenInfo = memberLoginService.validate(token);
            return tokenInfo;
        } catch (NullPointerException e) {
            return null;
        }

    }

    /**
     * access token 으로 유저의 ID를 불러오는 컨트롤러
     * @param acToken
     * @return
     */
    @GetMapping("/access")
    public String accessPage(@RequestParam("accessToken")String acToken){

        return jwtTokenProvider.decodeId(acToken);
    }





}