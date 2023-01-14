import React, {useState} from "react";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";


const MainDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    return (
        <div className={"container"}>
            <div className={"row align-items-center"}>
                <div className={"col-sm-5 col-md-6"}>
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        locale={ko}
                    />
                </div>

                <div className={"col-sm-5 col-md-6"}>
                    <div>
                        <DatePicker
                            dateFormat="yyyy-MM-dd"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            locale={ko}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainDatePicker