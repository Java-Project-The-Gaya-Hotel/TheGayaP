package com.gaya.thegayap.controller;

import com.gaya.thegayap.dto.SinDto;
import com.gaya.thegayap.dto.SinDto2;
import com.gaya.thegayap.service.SinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class SinController {

    @Autowired
    SinService sinService;




    @RequestMapping("/insert")
    public void insert(@RequestParam("rName") String name, @RequestParam("TC") int twinCost, @RequestParam("FC") int familyCost ) throws Exception {
        //    호텔 DB 넣기
//        sinService.insertHotel(sinDto);
        sinService.insertRoom(name,twinCost,familyCost);


    }

}
