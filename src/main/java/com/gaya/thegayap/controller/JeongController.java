package com.gaya.thegayap.controller;


import com.gaya.thegayap.configuration.SecurityConfig;
import com.gaya.thegayap.dto.JeongCustomerDto;
import com.gaya.thegayap.dto.JeongMemberDto;
import com.gaya.thegayap.dto.JeongResvDto;
import com.gaya.thegayap.service.JeongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class JeongController {

    @Autowired
    JeongService jeongService;

    @Autowired
    private PasswordEncoder pwEncoder;



//    회원가입페이지
    // 회원 데이터 입력
    @RequestMapping(value = "/join/insert", method = RequestMethod.POST)
    public void joinMember(@RequestBody JeongMemberDto member) throws Exception {
        PasswordEncoder pwe = PasswordEncoderFactories.createDelegatingPasswordEncoder();

        String rawPw = member.getMemberPw();
        String encodePw = pwe.encode(rawPw);
        member.setMemberPw(encodePw);
        jeongService.joinMember(member);
    }

    // ID 중복 체크
    @RequestMapping(value = "/join/idCheck", method = RequestMethod.GET)
    public int idCheck(JeongMemberDto member) throws Exception{
        int idResult = jeongService.idCheck(member);

        return idResult;
    }

    // 이메일 중복 체크
    @RequestMapping(value = "/join/emailCheck", method = RequestMethod.GET)
    public int emailCheck(JeongMemberDto member) throws Exception{
        int emailResult = jeongService.emailCheck(member);

        return emailResult;
    }


//    마이페이지
    // 예약확인 조회
    @GetMapping("/mypage/resv")
    public Object myResv(@RequestParam("customerId") String customerId) throws Exception {
        List<JeongResvDto> resvList = jeongService.resvList(customerId);
        return resvList;
    }

    // 내 등급, 포인트 조회
    @GetMapping("/mypage/account")
    public Object account(@RequestParam("memberId") String memberId) throws Exception {
        JeongMemberDto memberDto = jeongService.profile(memberId);
        return memberDto;
    }

    // 내 포인트 사용내역 조회
    @GetMapping("/mypage/point")
    public Object myPoint(@RequestParam("customerId") String customerId) throws Exception {
        List<JeongCustomerDto> checkPoints = jeongService.checkPoints(customerId);
        return checkPoints;
    }

    // 프로필 수정페이지 프로필 조회
    @GetMapping("/mypage/profile")
    public Object profile(@RequestParam("memberId") String memberId) throws Exception {
        JeongMemberDto memberDto = jeongService.profile(memberId);
        return memberDto;
    }


    // 프로필 수정
    @PutMapping("/mypage/update")
    public void updateProfile(@RequestBody JeongMemberDto member, @RequestParam("memberId") String memberId) throws Exception {
        member.setMemberId(memberId);
        jeongService.updateProfile(member);
    }


//    로그인
    // 로그인 처리
    @PostMapping("/login/check")
    public Object memberLogin(@RequestBody JeongMemberDto member, HttpServletRequest request) throws Exception {
        HttpSession session = request.getSession();

        if(session.getAttribute("member") != null) {
            session.removeAttribute("member");
        }

        JeongMemberDto memberDto = jeongService.loginCheck(member);

        if (memberDto != null) {
            String rawPw = member.getMemberPw();
            String encodePw = memberDto.getMemberPw();

            // 비밀번호 일치 여부 판단
            if (pwEncoder.matches(rawPw, encodePw)) {
                memberDto.setMemberPw("");    // 인코딩된 비밀번호 정보 지움
                session.setAttribute("member", memberDto);
                return memberDto;
            }
            else {return 0;}
        }
        else {return 0;}



    }

}
