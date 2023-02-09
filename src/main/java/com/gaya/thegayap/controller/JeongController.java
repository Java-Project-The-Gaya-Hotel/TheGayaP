package com.gaya.thegayap.controller;


import com.gaya.thegayap.dto.*;
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





//    회원가입페이지
    // 회원 데이터 입력
    @RequestMapping(value = "/join/insert", method = RequestMethod.POST)
    public void joinMember(@RequestBody MemberDto member) throws Exception {
        PasswordEncoder pwe = PasswordEncoderFactories.createDelegatingPasswordEncoder();

        String rawPw = member.getMemberPw();
        String encodePw = pwe.encode(rawPw);
        member.setMemberPw(encodePw);
        jeongService.joinMember(member);
    }

    // ID 중복 체크
    @RequestMapping(value = "/join/idCheck", method = RequestMethod.GET)
    public int idCheck(MemberNonPasswordDto member) throws Exception{
        int idResult = jeongService.idCheck(member);

        return idResult;
    }

    // 이메일 중복 체크
    @RequestMapping(value = "/join/emailCheck", method = RequestMethod.GET)
    public int emailCheck(MemberNonPasswordDto member) throws Exception{
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
        MemberNonPasswordDto memberDto = jeongService.profile(memberId);
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
        MemberNonPasswordDto memberDto = jeongService.profile(memberId);
        return memberDto;
    }


    // 프로필 수정
    @PutMapping("/mypage/update")
    public void updateProfile(@RequestBody MemberNonPasswordDto member, @RequestParam("memberId") String memberId) throws Exception {
        member.setMemberId(memberId);
        jeongService.updateProfile(member);
    }



    // 아이디 찾기
    @GetMapping("/login/findId")
    public String findId(@RequestParam("memberName") String memberName, @RequestParam("memberEmail") String memberEmail) throws Exception {

        String result = jeongService.findId(memberName, memberEmail);
        return result;
    }

    /**
     * 고객이름과 예약번호로 예약 정보를 조회하는 컨트롤러
     * @param customerName 고객이름
     * @param reservationNum 예약번호
     * @return 예약 정보
     * @throws Exception
     */
    @GetMapping("/login/findResv")
    public Object notMemberResvList(@RequestParam("customerName") String customerName, @RequestParam("reservationNum") int reservationNum) throws Exception {
        List<JeongResvDto> notMemberResvList = jeongService.notMemberResv(customerName, reservationNum);

        if (notMemberResvList.isEmpty()) return 0;

        return notMemberResvList;
    }

//     호텔리스트 불러오기
    @GetMapping("/gaya/hotelList")
    public Object getHotelList() throws Exception {
        List<JeongHotelDto> hotelDto = jeongService.hotelList();

        return hotelDto;
    }

//    문의
    // 문의 작성
    @PostMapping("/qa/write")
    public void writeInquiry(@RequestBody SinInquiryDto inquiryDto) throws Exception {

        jeongService.insertInquiry(inquiryDto);
    }

    
    // 문의 작성 유저정보 불러오기
    @GetMapping("/qa/writeUser")
    public Object inquiryUser(@RequestParam("userName") String userName) throws Exception {
        List<MemberNonPasswordDto> userInfo = jeongService.inquiryUserInfo(userName);

        return userInfo;
    }


    /**
     * 문의 상세페이지 정보 불러오는 컨트롤러
     * @param idx 글번호
     * @return inquiryDto
     * @throws Exception
     */
    @GetMapping("/qa/getDetail")
    public SinInquiryDto inquiryDetail(@RequestParam("idx") int idx) throws Exception {
        SinInquiryDto inquiryDto = jeongService.inquiryDetail(idx);

        return inquiryDto;
    }

}
