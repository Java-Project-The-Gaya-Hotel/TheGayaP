package com.gaya.thegayap.service;


import com.gaya.thegayap.dto.MemberLoginRequestDto;
import com.gaya.thegayap.dto.MemberNonPasswordDto;
import com.gaya.thegayap.dto.InquiryDto;
import com.gaya.thegayap.dto.ReservationDto;
import com.gaya.thegayap.mapper.MemberMyPageMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 마이페이지 서비스
 * author 박예린
 */
@Service
@RequiredArgsConstructor
public class MemberMyPageService {

    private final MemberMyPageMapper memberMyPageMapper;

    //My page Home Data 가져오기
    public MemberNonPasswordDto getUserInfo(String memberId) {
        return memberMyPageMapper.getUserInfo(memberId);
    }

    // 회원 예약 Table 가져오기
    public List<ReservationDto> reservationInfo(String customerId) {
        return memberMyPageMapper.reservationInfo(customerId);
    }



    public void withdrawalMember(String memberId) {
        memberMyPageMapper.withdrawalMember(memberId);
    }

    public List<InquiryDto> myQaListTable(String memberId) {return memberMyPageMapper.myQaListTable(memberId);}



    // 업데이트 프로필
    public void updateProfile(MemberNonPasswordDto member) throws Exception {
        memberMyPageMapper.updateProfile(member);
    }

    /**
     * 멤버 비밀번호 변경
     * author 신현섭
     * @param memberLoginRequestDto
     */
    public void changePw(MemberLoginRequestDto memberLoginRequestDto) {
        PasswordEncoder pwe = PasswordEncoderFactories.createDelegatingPasswordEncoder();

        String memberId = memberLoginRequestDto.getMemberId();
        String rawPw = memberLoginRequestDto.getMemberPw();
        String encodePw = pwe.encode(rawPw);
        memberMyPageMapper.changePw(memberId,encodePw);
    }
}
