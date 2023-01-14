package com.gaya.thegayap.controller;

import com.gaya.thegayap.dto.SinDto;
import com.gaya.thegayap.service.SinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class SinController {

    @Autowired
    SinService sinService;


//    호텔 DB 넣기

//    @RequestMapping("/insert")
//    public void insert(@RequestBody SinDto sinDto) throws Exception {
//        sinService.insertHotel(sinDto);
//    }
    
    @RequestMapping("/insert")
    public void insert(@RequestBody SinDto sinDto) throws Exception {
        sinService.insertHotel(sinDto);
    }
}
