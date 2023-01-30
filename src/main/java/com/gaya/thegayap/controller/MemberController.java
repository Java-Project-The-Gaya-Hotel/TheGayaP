package com.gaya.thegayap.controller;


import com.gaya.thegayap.dto.MemberLoginRequestDto;
import com.gaya.thegayap.dto.TokenInfo;
import com.gaya.thegayap.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {
    private final MemberService memberService;




    @PostMapping("/login")
    public TokenInfo login(@RequestBody MemberLoginRequestDto memberLoginRequestDto) {


        String memberId = memberLoginRequestDto.getMemberId();
        String password = memberLoginRequestDto.getMemberPw();
        try {
            TokenInfo tokenInfo = memberService.login(memberId, password);
            return tokenInfo;
        } catch (Exception e) {
            return null;
        }
    }


    @PostMapping("/test")
    public String test(){
        return "success";
    }


}