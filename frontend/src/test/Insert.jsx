import React, {useState} from "react";
import {default as Axios} from "axios";

const axios = Axios.create({
    baseURL: "http://ec2-13-125-182-95.ap-northeast-2.compute.amazonaws.com:8080"
});

function Insert(props) {

    const [HName, setHName] = useState('');
    const [HAddr, setHAddr] = useState('');
    const [HTel, setHTEl] = useState('');
    const [HMealAdult, setHMealAdult] = useState('');
    const [HMealChild, setHMealChild] = useState('');


    const nameChangeHandler = (e) => {
        setHName(e.target.value);

    }

    const addrChangeHandler = (e) => {
        setHAddr(e.target.value);

    }

    const telChangeHandler = (e) => {
        setHTEl(e.target.value);

    }

    const mealAdultChangeHandler = (e) => {
        setHMealAdult(e.target.value);

    }

    const mealChildChangeHandler = (e) => {
        setHMealChild(e.target.value);

    }

    const insert = (e) => {


        const hotelInfo = {
            hotelName: HName,
            hotelAddr: HAddr,
            hotelTel: HTel,
            hotelMealAdult: Number(HMealAdult),
            hotelMealChild: Number(HMealChild),
        }

        const roomInfo = {
            roomName: HName,
            roomTwinCost: Number(HAddr),
            roomMaxAdult: Number(HTel),
        }


        axios.post("/insert", roomInfo
        ).then((req) => {
            console.log("데이터 전송 성공")
            console.log(req.data);
        }).catch(err => {
            console.log(`데이터 전송 실패 ${err}`)
        })
        e.preventDefault();

    }


    return (
        <div>
            <form onSubmit={insert} action={"#"}>
                <input onChange={nameChangeHandler}/>
                <input onChange={addrChangeHandler}/>
                <input onChange={telChangeHandler}/>
                <input onChange={mealAdultChangeHandler}/>
                <input onChange={mealChildChangeHandler}/>
                <button type={"submit"}>보내기</button>
            </form>
        </div>
    );
}

export default Insert;