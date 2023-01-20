import React, {forwardRef, useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {ko} from "date-fns/esm/locale";
import axios from "axios";

const styles = {
    inputBox: {
        width: "200px",
        height: "30px",
    }
}


function ReservAccordion() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const getSDate = searchParams.get('sDate');
    const getEDate = searchParams.get('eDate');
    const count = searchParams.get('people');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [hotelName, setHotelName] = useState([])


    useEffect(() => {
        const testStart = new Date(getSDate)
        setStartDate(testStart);

        const testEnd = new Date(getEDate)
        setEndDate(testEnd);

    }, [])

    //axios input button roop connection
    useEffect(() => {
        axios.get("http://10.100.204.69:8080/gaya/gethotel")
            .then((req) => {
                const {data} = req
                setHotelName(data);
                console.log(data)
            })
            .catch()
    }, [])


    const CustomInput = forwardRef(({value, onClick}, ref) => (<button className="btn btn-outline-secondary" onClick={onClick} ref={ref}>
        {value}{}
    </button>))


    return (<div>
        <div className={"container"}>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body ">
                            <div className={"container"}>
                                <div className={"row justify-content-center"}>
                                    {
                                        hotelName.map((name) => {
                                                return (
                                                    <input style={styles.inputBox} className={"text-center form-control rounded-0 border-1 m-3"} value={name} readOnly={true}/>
                                                );
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Date */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Date
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body d-grid justify-content-center">
                            <div className={"container"}>
                                <DatePicker
                                    dateFormat="yyyy-MM-dd"
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    locale={ko}
                                    customInput={<CustomInput/>}
                                    inline
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes
                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth
                            noting
                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}

export default ReservAccordion