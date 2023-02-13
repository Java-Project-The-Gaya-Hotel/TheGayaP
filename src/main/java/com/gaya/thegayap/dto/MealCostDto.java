package com.gaya.thegayap.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;


/**
 *  해당 호텔의 조식 가격을 보내는 dto
 *  author 신현섭
 */
@Getter
@NoArgsConstructor
public class MealCostDto {

    private String hotelMealAdult;
    private String hotelMealChild;

}
