import React, {useEffect} from "react";
import stayImg from "../intoroImg/aboutStay.jpg";


const {kakao} = window;


function IntroPageStay(){


    useEffect(() => {

        mapScript();
    }, [])

    const mapScript = () => {
        let container = document.getElementById("map");
        let options = {
            center: new kakao.maps.LatLng(35.159860, 129.158573),
            level: 2,
        };
        //map
        const map = new kakao.maps.Map(container, options);

        //마커가 표시 될 위치
        let markerPosition = new kakao.maps.LatLng(
            35.159860,
            129.158573
        );

        // 마커를 생성
        let marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
    };


    return(
        <div>
            <div>
                <div className={"container m-3"}>

                    <div className={"py-5"}>

                        <div className={"p-5 mx-3"}><img src={stayImg}/></div>

                        <div className={"p-5 my-5"}>
                            <div className={"h2 fw-bold"}> 가야 스테이 </div>
                            <div className={"p-4"}>
                                가야 스테이는 합리적인 가격에 신라호텔의 가치를 경험할 수 있는 비즈니스 호텔로,<br/>
                                가야 호텔의 상품과 서비스 가치 위에 새로운 감성을 더한 공간입니다. <br/>
                                신라스테이는 고객의 니즈를 먼저 이해하여, 고객에게 진정으로 의미 있는 상품과 서비스를 엄선해 제공합니다.
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={"container mb-5 pb-3"}>
                        <h6 className={"fw-bold text-center p-5"}>가야 스테이 찾아오는 길</h6>
                        <div className={"d-flex justify-content-center"}>
                            <div id={"map"} style={{width: '500px', height: '300px'}}></div>
                        </div>
                        <div className={"py-4 text-center"}>
                            주소 : 부산광역시 해운대구 해운대로570번길 46
                        </div>
                    </div>

                    <hr/>

                </div>
            </div>
        </div>
    )
}
export default IntroPageStay;