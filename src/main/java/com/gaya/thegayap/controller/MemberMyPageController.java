package com.gaya.thegayap.controller;


import com.gaya.thegayap.dto.MemberLoginRequestDto;
import com.gaya.thegayap.dto.MemberNonPasswordDto;
import com.gaya.thegayap.dto.InquiryDto;
import com.gaya.thegayap.dto.ReservationDto;
import com.gaya.thegayap.service.MemberMyPageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//데이터만 이동


/**
 * 마이 페이지 쪽 컨트롤러
 * author 박예린
 */
@RestController
@RequestMapping("/mypage")
@RequiredArgsConstructor
//@CrossOrigin("http://localhost:3000")
public class MemberMyPageController {

    private final MemberMyPageService memberMyPageService;



    /**
     * 멤버 아이디로 마이 페이지의 유저 정보 불러오기
     * author 박예린
     * @param memberId
     * @return
     */
    @GetMapping("/getUserInfo")
    public MemberNonPasswordDto getUserInfo(@RequestParam("memberId") String memberId){
        return memberMyPageService.getUserInfo(memberId);
    }


    /**
     * 예약된 정보를 불러오는 컨트롤러
     * author 박예린
     * @param customerId
     * @return
     */
    @GetMapping("/reservationinfo")
    public List<ReservationDto> reservationInfo(@RequestParam ("customerId") String customerId){
        try{
        return memberMyPageService.reservationInfo(customerId);

        }catch (Exception e){
            return null;
        }
    }

    /**
     * 유저 탈퇴 처리 컨트롤러
     * author 박예린
     * @param memberId
     */
    @PutMapping("/withdrawalMember")
    public void withdrawalMember(@RequestParam ("memberId") String memberId){
        memberMyPageService.withdrawalMember(memberId);
    }

    /**
     * 마이페이지 문의 확인 컨트롤러
     * author 박예린
     * @param memberId
     * @return
     */
    @GetMapping("/myqalistable")
    public List<InquiryDto> myQaListTable(@RequestParam ("memberId") String memberId){
        return memberMyPageService.myQaListTable(memberId);
    }


    /**
     * 프로필 수정
     * author 박예린,정종율
     * @param member
     * @param memberId
     * @throws Exception
     */
    @PutMapping("/update")
    public void updateProfile(@RequestBody MemberNonPasswordDto member, @RequestParam("memberId") String memberId) throws Exception {
        member.setMemberId(memberId);
        memberMyPageService.updateProfile(member);
    }


    /**
     * 마이페이지 비밀번호 변경
     * author 신현섭
     * @param memberLoginRequestDto
     */
    @PutMapping("/changepw")
    public void pwCheck(@RequestBody MemberLoginRequestDto memberLoginRequestDto){

        try{
            memberMyPageService.changePw(memberLoginRequestDto);

        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
