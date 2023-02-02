import React from "react";
import {GoogleMap, LoadScript} from '@react-google-maps/api';



const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 35.156019,
    lng: 129.059478
};

function IntroPageSeoul() {


    return (

        <div>

            <div>
                <h4>서울 가야호텔</h4>
                <LoadScript
                    googleMapsApiKey="AIzaSyDOsvmY0uLx3i0cA-12IRkZ8_2DNVXLpcM"
                    >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={19}

                    >

                        { /* Child components, such as markers, info windows, etc. */ }
                        <></>
                    </GoogleMap>
            </LoadScript>
            </div>


        </div>

    )

}

export default IntroPageSeoul;
