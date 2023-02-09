package com.gaya.thegayap.service;


import com.gaya.thegayap.dto.MemberNonPasswordDto;
import com.gaya.thegayap.dto.SinAnswerChatDto;
import com.gaya.thegayap.dto.SinInquiryDto;
import com.gaya.thegayap.dto.SinReservDto;
import com.gaya.thegayap.mapper.DellMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DellService {

    private final DellMapper dellMapper;

    //My page Home Data 가져오기
    public MemberNonPasswordDto getUserInfo(String memberId) {
        return dellMapper.getUserInfo(memberId);
    }

    // 회원 예약 Table 가져오기
    public List<SinReservDto> reservationinfo(String customerId) {
        return dellMapper.reservationinfo(customerId);
    }



    public void withdrawalMember(String memberId) {}

    public SinInquiryDto myQaListTable(String memberId) {return dellMapper.myQaListTable(memberId);}
}
