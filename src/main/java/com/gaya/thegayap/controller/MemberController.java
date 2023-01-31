package com.gaya.thegayap.controller;


import com.gaya.thegayap.dto.MemberLoginRequestDto;
import com.gaya.thegayap.dto.TokenInfo;
import com.gaya.thegayap.jwt.JwtTokenProvider;
import com.gaya.thegayap.service.MemberService;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {
    private final MemberService memberService;

    private final JwtTokenProvider jwtTokenProvider;


    @PostMapping("/login")
    public TokenInfo login(@RequestBody MemberLoginRequestDto memberLoginRequestDto) {


        String memberId = memberLoginRequestDto.getMemberId();
        String password = memberLoginRequestDto.getMemberPw();
        try {
            TokenInfo tokenInfo = memberService.login(memberId, password);
            return tokenInfo;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


    @PostMapping("/test")
    public String test() {
        return "success";
    }


    @PostMapping("/tokenvalid")
    public TokenInfo validToken(@RequestBody TokenInfo token) {

        try {
            TokenInfo tokenInfo = memberService.validate(token);
            return tokenInfo;
        } catch (NullPointerException e) {
            return null;
        }

    }

    @GetMapping("/access")
    public String accessPage(@RequestParam("accessToken")String acToken){

        return jwtTokenProvider.decodeId(acToken);
    }

}