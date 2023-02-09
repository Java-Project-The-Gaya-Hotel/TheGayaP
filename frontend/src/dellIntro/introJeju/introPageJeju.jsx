import React, {useEffect} from "react";
import jeJuImg from "../intoroImg/aboutJeju.jpg";



const {kakao} = window;

function IntroPageJeju() {

    useEffect(() => {

        mapScript();
    }, [])

    const mapScript = () => {
        let container = document.getElementById("map");
        let options = {
            center: new kakao.maps.LatLng(33.247632, 126.408058),
            level: 2,
        };
        //map
        const map = new kakao.maps.Map(container, options);

        //마커가 표시 될 위치
        let markerPosition = new kakao.maps.LatLng(
            33.247632,
            126.408058
        );

        // 마커를 생성
        let marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
    };


    return (
        <div>
            <div>
                <div className={"container m-3"}>

                    <div className={"py-5"}>

                        <div className={"p-5 mx-3"}><img src={jeJuImg}/></div>

                        <div className={"p-5 my-5"}>
                            <div className={"h2 fw-bold"}> 제주 가야 호텔</div>
                            <div className={"p-4"}>
                                자연과 숨쉬는 제주의 바다풍경과 생동감을 느끼고 싶은 여행객에게 완벽한 선택입니다.<br/>
                                천혜의 제주 자연과 어우러진 이국적인 분위기를 느낄 수 있습니다. <br/>
                                The Gaya 제주는 언제나 내 집과 같은 편안함과 아늑함을 제공합니다. <br/>
                                아름다운 전망과 세련된 인테리어, 넓은 공간을 자랑하는 객실은 고객에게 최상의 휴식을 선사하겠습니다.
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={"container mb-5 pb-3 text-center"}>
                        <h6 className={"fw-bold text-center p-5"}>제주 가야 호텔 찾아오는 길</h6>
                        <div className={"d-flex justify-content-center"}>
                            <div id={"map"} style={{width: '500px', height: '300px'}}></div>
                        </div>
                        <div className={"py-4"}>
                            주소 : 제주특별자치도 서귀포시 특별자치도, 중문관광로72번길 75
                        </div>
                    </div>

                    <hr/>

                </div>
            </div>
        </div>


        )
    }

export default IntroPageJeju;