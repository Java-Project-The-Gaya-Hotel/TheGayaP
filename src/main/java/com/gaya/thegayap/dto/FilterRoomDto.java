package com.gaya.thegayap.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * author 신현섭
 * 방 예약이 됐는지 확인할때 쓰는 dto
 */
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FilterRoomDto {


    private int hotelNum;
    private String checkIn;
    private String checkOut;

    private int adultCount;

}
