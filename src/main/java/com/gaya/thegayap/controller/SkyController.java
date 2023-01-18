package com.gaya.thegayap.controller;

import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping({"/gaya","/"})
public class SkyController {

    @GetMapping("/sendUser")
    public void skyTest(@RequestParam("Email") String Email){

        System.out.println(Email);

    }

}
