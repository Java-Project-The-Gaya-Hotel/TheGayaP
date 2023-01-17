import React from "react";

function Join2Detail(){
    const [Birth, setBirth] = React.useState("")
    const onBirthHandler = (event) => {
        setBirth(event.currentTarget.value)
    }
    return(
        <div className={"row"}>
            <div className="selector col" id="uniform-birthYear" >
                <select  className="form-select form-select-sm" value={Birth} onChange={onBirthHandler} >
                    <option value="">선택</option>
                    <option value="2004" title="2004">2004</option>
                    <option value="2003" title="2003">2003</option>
                    <option value="2002" title="2002">2002</option>
                    <option value="2001" title="2001">2001</option>
                    <option value="2000" title="2000">2000</option>
                    <option value="1999" title="1999">1999</option>
                    <option value="1998" title="1998">1998</option>
                    <option value="1997" title="1997">1997</option>
                    <option value="1996" title="1996">1996</option>
                    <option value="1995" title="1995">1995</option>
                    <option value="1994" title="1994">1994</option>
                    <option value="1993" title="1993">1993</option>
                    <option value="1992" title="1992">1992</option>
                    <option value="1991" title="1991">1991</option>
                    <option value="1990" title="1990">1990</option>
                    <option value="1989" title="1989">1989</option>
                    <option value="1988" title="1988">1988</option>
                    <option value="1987" title="1987">1987</option>
                    <option value="1986" title="1986">1986</option>
                    <option value="1985" title="1985">1985</option>
                    <option value="1984" title="1984">1984</option>
                    <option value="1983" title="1983">1983</option>
                    <option value="1982" title="1982">1982</option>
                    <option value="1981" title="1981">1981</option>
                    <option value="1980" title="1980">1980</option>
                    <option value="1979" title="1979">1979</option>
                    <option value="1978" title="1978">1978</option>
                    <option value="1977" title="1977">1977</option>
                    <option value="1976" title="1976">1976</option>
                    <option value="1975" title="1975">1975</option>
                    <option value="1974" title="1974">1974</option>
                    <option value="1973" title="1973">1973</option>
                    <option value="1972" title="1972">1972</option>
                    <option value="1971" title="1971">1971</option>
                    <option value="1970" title="1970">1970</option>
                    <option value="1969" title="1969">1969</option>
                    <option value="1968" title="1968">1968</option>
                    <option value="1967" title="1967">1967</option>
                    <option value="1966" title="1966">1966</option>
                    <option value="1965" title="1965">1965</option>
                    <option value="1964" title="1964">1964</option>
                    <option value="1963" title="1963">1963</option>
                    <option value="1962" title="1962">1962</option>
                    <option value="1961" title="1961">1961</option>
                    <option value="1960" title="1960">1960</option>
                    <option value="1959" title="1959">1959</option>
                    <option value="1958" title="1958">1958</option>
                    <option value="1957" title="1957">1957</option>
                    <option value="1956" title="1956">1956</option>
                    <option value="1955" title="1955">1955</option>
                    <option value="1954" title="1954">1954</option>
                    <option value="1953" title="1953">1953</option>
                    <option value="1952" title="1952">1952</option>
                    <option value="1951" title="1951">1951</option>
                    <option value="1950" title="1950">1950</option>
                    <option value="1949" title="1949">1949</option>
                    <option value="1948" title="1948">1948</option>
                    <option value="1947" title="1947">1947</option>
                    <option value="1946" title="1946">1946</option>
                    <option value="1945" title="1945">1945</option>
                    <option value="1944" title="1944">1944</option>
                    <option value="1943" title="1943">1943</option>
                    <option value="1942" title="1942">1942</option>
                    <option value="1941" title="1941">1941</option>
                    <option value="1940" title="1940">1940</option>
                    <option value="1939" title="1939">1939</option>
                    <option value="1938" title="1938">1938</option>
                    <option value="1937" title="1937">1937</option>
                    <option value="1936" title="1936">1936</option>
                    <option value="1935" title="1935">1935</option>
                    <option value="1934" title="1934">1934</option>
                    <option value="1933" title="1933">1933</option>
                    <option value="1932" title="1932">1932</option>
                    <option value="1931" title="1931">1931</option>
                    <option value="1930" title="1930">1930</option>
                    <option value="1929" title="1929">1929</option>
                    <option value="1928" title="1928">1928</option>
                    <option value="1927" title="1927">1927</option>
                    <option value="1926" title="1926">1926</option>
                    <option value="1925" title="1925">1925</option>
                    <option value="1924" title="1924">1924</option>
                    <option value="1923" title="1923">1923</option>
                    <option value="1922" title="1922">1922</option>
                    <option value="1921" title="1921">1921</option>
                    <option value="1920" title="1920">1920</option>
                    <option value="1919" title="1919">1919</option>
                    <option value="1918" title="1918">1918</option>
                    <option value="1917" title="1917">1917</option>
                    <option value="1916" title="1916">1916</option>
                    <option value="1915" title="1915">1915</option>
                    <option value="1914" title="1914">1914</option>
                    <option value="1913" title="1913">1913</option>
                </select>

            </div>


            <div className="selector disabled col">
                <select  className="form-select form-select-sm" >
                    <option value="">선택</option>
                    <option value="1" title="1">1</option>
                    <option value="2" title="2">2</option>
                    <option value="3" title="3">3</option>
                    <option value="4" title="4">4</option>
                    <option value="5" title="5">5</option>
                    <option value="6" title="6">6</option>
                    <option value="7" title="7">7</option>
                    <option value="8" title="8">8</option>
                    <option value="9" title="9">9</option>
                    <option value="10" title="10">10</option>
                    <option value="11" title="11">11</option>
                    <option value="12" title="12">12</option>
                </select>

            </div>


            <div className="selector disabled col" id="uniform-birthDay" >
                <select  className="form-select form-select-sm" >
                    <option value="">선택</option>
                    <option value="1" title="1">1</option>
                    <option value="2" title="2">2</option>
                    <option value="3" title="3">3</option>
                    <option value="4" title="4">4</option>
                    <option value="5" title="5">5</option>
                    <option value="6" title="6">6</option>
                    <option value="7" title="7">7</option>
                    <option value="8" title="8">8</option>
                    <option value="9" title="9">9</option>
                    <option value="10" title="10">10</option>
                    <option value="11" title="11">11</option>
                    <option value="12" title="12">12</option>
                    <option value="13" title="13">13</option>
                    <option value="14" title="14">14</option>
                    <option value="15" title="15">15</option>
                    <option value="16" title="16">16</option>
                    <option value="17" title="17">17</option>
                    <option value="18" title="18">18</option>
                    <option value="19" title="19">19</option>
                    <option value="20" title="20">20</option>
                    <option value="21" title="21">21</option>
                    <option value="22" title="22">22</option>
                    <option value="23" title="23">23</option>
                    <option value="24" title="24">24</option>
                    <option value="25" title="25">25</option>
                    <option value="26" title="26">26</option>
                    <option value="27" title="27">27</option>
                    <option value="28" title="28">28</option>
                    <option value="29" title="29">29</option>
                    <option value="30" title="30">30</option>
                    <option value="31" title="31">31</option>
                </select>
            </div>

        </div>
    )
}
export default Join2Detail;