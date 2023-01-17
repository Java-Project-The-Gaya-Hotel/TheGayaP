import React, {useState, forwardRef} from "react";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";


const MainDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const CustomInput = forwardRef(({value, onClick}, ref) => (
        <button className="btn btn-outline-secondary" onClick={onClick} ref={ref}>
            {value}{}
        </button>));

    return (

        <div>
            <div>
                <DatePicker
                    dateFormat="yyyy-MM-dd"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    locale={ko}
                    customInput={<CustomInput/>}
                />
            </div>

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
                    customInput={<CustomInput/>}
                />
            </div>

        </div>);
};



export default MainDatePicker