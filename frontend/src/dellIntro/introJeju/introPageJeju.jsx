import React, {useEffect} from "react";



const {kakao} = window;

function IntroPageJeju() {

    useEffect(() => {

        mapScript();
    }, [])

    const mapScript = () => {
        let container = document.getElementById("map");
        let options = {
            center: new kakao.maps.LatLng(35.156024, 129.059484),
            level: 2,
        };
        //map
        const map = new kakao.maps.Map(container, options);

        //마커가 표시 될 위치
        let markerPosition = new kakao.maps.LatLng(
            35.156024,
            129.059484
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
                <h4>제주 가야호텔</h4>
                <div id={"map"} style={{width: '500px', height: '300px'}} ></div>
            </div>
        </div>


        )
    }

export default IntroPageJeju;