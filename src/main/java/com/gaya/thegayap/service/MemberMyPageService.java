package com.gaya.thegayap.service;


import com.gaya.thegayap.dto.MemberNonPasswordDto;
import com.gaya.thegayap.dto.InquiryDto;
import com.gaya.thegayap.dto.ReservationDto;
import com.gaya.thegayap.mapper.MemberMyPageMapper;
import lombok.RequiredArgsConstructor;
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



    public void withdrawalMember(String memberId) {}

    public InquiryDto myQaListTable(String memberId) {return memberMyPageMapper.myQaListTable(memberId);}
}
