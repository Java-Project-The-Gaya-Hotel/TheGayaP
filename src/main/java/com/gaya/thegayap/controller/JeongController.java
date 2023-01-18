package com.gaya.thegayap.controller;


import com.gaya.thegayap.dto.JeongMemberDto;
import com.gaya.thegayap.dto.JeongResvDto;
import com.gaya.thegayap.service.JeongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/join")
public class JeongController {

    @Autowired
    JeongService jeongService;


//    회원가입페이지
    // 회원 데이터 입력
    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    public void joinMember(@RequestBody JeongMemberDto member) throws Exception {
        jeongService.joinMember(member);
    }

    // ID 중복 체크
    @RequestMapping(value = "/idCheck", method = RequestMethod.GET)
    public int idCheck(JeongMemberDto member) throws Exception{
        int idResult = jeongService.idCheck(member);

        return idResult;
    }

    // 이메일 중복 체크
    @RequestMapping(value = "/emailCheck", method = RequestMethod.GET)
    public int emailCheck(JeongMemberDto member) throws Exception{
        int emailResult = jeongService.emailCheck(member);

        return emailResult;
    }


//    마이페이지

//    // 예약확인 조회
//    @GetMapping("/mypage/resv")
//    public List<JeongResvDto> resvList() {
//
//
//
//        return ;
//    }



}
