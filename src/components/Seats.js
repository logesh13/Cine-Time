import React, { useEffect, useState } from 'react';
import Screen from 'D:/Logesh/STUDIES/REACT/cine-time/src/Images/Screen1.jpg';
import './seatselect.css';
import Receipt from './Receipt.js';
import {firestore} from "./firebase"
import {addDoc ,doc , collection , getDocFromCache} from '@firebase/firestore';
import {  setDoc , db  , getDoc , updateDoc } from "@firebase/firestore"; 
const Seats = (x) =>
{
    const [state, setState] = useState({
        state1: "a1",state2: "a2",state3:"a3",state4:"a4",state5:"a5",state6:"a6",state7:"a7",state8:"a8",state9:"a9",state10:"a10",
        state11:"a11",state12:"a12",state13:"a13",state14:"a14",state15:"a15",state16:"a16",state17:"a17",state18:"a18",state19:"a19",state20:"a20",
        state21:"a1",state22:"a2",state23:"a3",state24:"a4",state25:"a5",state26:"a6",state27:"a7",state28:"a8",state29:"a9",state30:"a10",
        state31:"a11",state32:"a12",state33:"a13",state34:"a14",state35:"a15",state36:"a16",state37:"a17",state38:"a18",state39:"a19",state40:"a20",
        state41:"a1",state42:"a2",state43:"a3",state44:"a4",state45:"a5",state46:"a6",state47:"a7",state48:"a8",state49:"a9",state50:"a10",
        state51:"a11",state52:"a12",state53:"a13",state54:"a14",state55:"a15",state56:"a16",state57:"a17",state58:"a18",state59:"a19",state60:"a20",
        state61:"a1",state62:"a2",state63:"a3",state64:"a4",state65:"a5",state66:"a6",state67:"a7",state68:"a8",state69:"a9",state70:"a10",
        state71:"a11",state72:"a12",state73:"a13",state74:"a14",state75:"a15",state76:"a16",state77:"a17",state78:"a18",state79:"a19",state80:"a20",
        state81:"a1",state82:"a2",state83:"a3",state84:"a4",state85:"a5",state86:"a6",state87:"a7",state88:"a8",state89:"a9",state90:"a10",
        state91:"a11",state92:"a12",state93:"a13",state94:"a14",state95:"a15",state96:"a16",state97:"a17",state98:"a18",state99:"a19",state100:"a20",
        state101: "a1",state102: "a2",state103:"a3",state104:"a4",state105:"a5",state106:"a6",state107:"a7",state108:"a8",state109:"a9",state110:"a10",
        state111:"a11",state112:"a12",state113:"a13",state114:"a14",state115:"a15",state116:"a16",state117:"a17",state118:"a18",state119:"a19",state120:"a20",
        state121:"a1",state122:"a2",state123:"a3",state124:"a4",state125:"a5",state126:"a6",state127:"a7",state128:"a8",state129:"a9",state130:"a10",
        state131:"a11",state132:"a12",state133:"a13",state134:"a14",state135:"a15",state136:"a16",state137:"a17",state138:"a18",state139:"a19",state140:"a20",
        state141:"a1",state142:"a2",state143:"a3",state144:"a4",state145:"a5",state146:"a6",state147:"a7",state148:"a8",state149:"a9",state150:"a10",
        state151:"a11",state152:"a12",state153:"a13",state154:"a14",state155:"a15",state156:"a16",state157:"a17",state158:"a18",state159:"a19",state160:"a20",
        state161:"a1",state162:"a2",state163:"a3",state164:"a4",state165:"a5",state166:"a6",state167:"a7",state168:"a8",state169:"a9",state170:"a10",
        state171:"a11",state172:"a12",state173:"a13",state174:"a14",state175:"a15",state176:"a16",state177:"a17",state178:"a18",state179:"a19",state180:"a20",
        state181:"a1",state182:"a2",state183:"a3",state184:"a4",state185:"a5",state186:"a6",state187:"a7",state188:"a8",state189:"a9",state190:"a10",
        state191:"a11",state192:"a12",state193:"a13",state194:"a14",state195:"a15",state196:"a16",state197:"a17",state198:"a18",state199:"a19",state200:"a20",

      });
      const [main , setmain] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]);
    const [page,setPage] = useState(<empty />)
    const[price , setprice] = useState(0);
    const[visible , setvisible] = useState(true);
    const [butt, setbutt] = useState([]);

    // let data;
    const updateState = (property, value) => 
    {    
        setState((prevState) => ({
          ...prevState,
          [property]: value,
        }));
      };
        const[singleDoc , setSingleDoc] = useState({});
        var time = x.time
        var fintime = "";
        var finscreen ="";
        var finmovie = "";
      useEffect(()=>
      {
        if(x.name === "VIKRAM")
        {
            finmovie =  "Vikram"
        }
        else if(x.name === "Evil Dead")
        {
            finmovie = "Evil Dead"
        }
        else if(x.name === "MASTER")
        {
            finmovie = "Master"
        }
        else if(x.name === "LEO")
        {
            finmovie = "Leo"
        }
        else if(x.name === "FAST X")
        {
            finmovie = "Fast X"
        }
        else
        {
            finmovie = "Kaithi"
        }
        if(x.no == 1)
        {
            finscreen = "Screen1"
        }
        else if(x.no == 2)
        {
            finscreen="Screen2";
        }
        else
        {
            finscreen = "Screen3";
        }
        if(time === "9:00 AM" || time === "9:30 AM" || time === "7:30 AM")
        {
            fintime = "Time1";
        }
        else if(time === "10:30 AM" || time === "11:00 AM" || time === "10:00 AM")
        {
            fintime = "Time2"
        }
        else if(time === "6:00 PM" || time === "7   :00 PM" || time === "6:30 PM")
        {
            fintime = "Time3"
        }
        else
        {
            fintime = "Time4"
        }
        fetchSingle();
      } , [])


      function fetchSingle()
      { 
        
        setData((prevData) => ({
            ...prevData,
            J1: singleDoc.J1 ?? prevData.J1,
            J2: singleDoc.J2 ?? prevData.J2,
            J3: singleDoc.J3 ?? prevData.J3,
            J4: singleDoc.J4 ?? prevData.J4,
            J5: singleDoc.J5 ?? prevData.J5,
            J6: singleDoc.J6 ?? prevData.J6,
            J7: singleDoc.J7 ?? prevData.J7,
            J8: singleDoc.J8 ?? prevData.J8,
            J9: singleDoc.J9 ?? prevData.J9,
            J10: singleDoc.J10 ?? prevData.J10,

            
          }));
        const path = finmovie+"/"+finscreen+"/" + fintime+ "/" + fintime
;       const docRef = doc(firestore, path);
        getDoc(docRef)
        .then((docSnap) => {
            if (docSnap.exists()) {
            setSingleDoc(docSnap.data());
            }
        })
        .catch((error) => {
            console.error("Error fetching document: ", error);
        });
        console.log(singleDoc.J1)
      }  
      const [data, setData] = useState(
        {   J1: singleDoc.J1 ,
            J2: singleDoc.J2 ,
            J3: singleDoc.J3 ,
            J4: singleDoc.J4 ,
            J5: singleDoc.J5 ,
            J6: singleDoc.J6,
            J7: singleDoc.J7 ,
            J8: singleDoc.J8 ,
            J9: singleDoc.J9 ,
            J10: singleDoc.J10 ,}
        );
        const handleButtonClick = (bName , st , val , ind) => 
        {
            if(main[ind] == 0)
            {                
                if(ind>=0 && ind<=59)
                {
                    setprice(price + 150);
                }
                else if(ind>59 && ind<=139)
                {
                    setprice(price + 190);
                }
                else
                {
                    setprice(price + 210);
                }
                console.log("If")
                const updatedMain = [...main];
                updatedMain[ind] = 1;
                updateState(st , val);                
                setmain(updatedMain);
                console.log(state)                
            }
            else
            {
                if(ind>=0 && ind<=59)
                {
                    setprice(price - 150);
                }
                else if(ind>59 && ind<=139)
                {
                    setprice(price - 190);
                }
                else
                {
                    setprice(price - 210);
                }
                console.log("else")
                if(ind ==5 || ind==10 || ind==15 || ind==25 || ind==30 || ind==35 || ind==45 || ind==50 || ind ==55 || ind==65 || ind == 70 || ind==75 || ind==85 || ind==90 || ind==95 || ind ==105 || ind==110 || ind==115 || ind==125 || ind ==130 || ind ==135 || ind ==145 || ind==150 || ind==155 || ind==165 || ind ==170 || ind ==175 || ind ==185 || ind == 190  || ind == 195)
                {
                    updateState(st , "a11"); 
                }
                else if(ind == 0 || ind == 20 || ind == 40 || ind ==60 || ind== 80 || ind==100 || ind==120 || ind==140 || ind==160 || ind==180)
                {
                    console.log("2")
                    updateState(st , "a1"); 
                }
                else
                {                    
                    updateState(st , "a2"); 
                }
                const updatedMain = [...main];
                updatedMain[ind] = 0;
                setmain(updatedMain);
                console.log(state)
            }
            if (butt.includes(bName)) 
            {
                setbutt(butt.filter((name) => name !== bName));
            } 
            else 
            {
                setbutt([...butt, bName]);
            }
        };

        let updatedData;

        const hell = () =>
        {
             updatedData = {
                J1: singleDoc.J1 !== undefined ? singleDoc.J1 : 0,
                J2: singleDoc.J2 !== undefined ? singleDoc.J2 : 0,
                J3: singleDoc.J3 !== undefined ? singleDoc.J3 : 0,
                J4: singleDoc.J4 !== undefined ? singleDoc.J4 : 0,
                J5: singleDoc.J5 !== undefined ? singleDoc.J5 : 0,
                J6: singleDoc.J6 !== undefined ? singleDoc.J6 : 0,
                J7: singleDoc.J7 !== undefined ? singleDoc.J7 : 0,
                J8: singleDoc.J8 !== undefined ? singleDoc.J8 : 0,
                J9: singleDoc.J9 !== undefined ? singleDoc.J9 : 0,
                J10: singleDoc.J10 !== undefined ? singleDoc.J10 : 0,
              };
        }

        
        
        const updatee = async(e) =>
        {  
            hell();
            try
            {
                console.log("working")
                await updateDoc(doc(firestore, "Vikram", "Screen1" , "Time1" , "Time1" ), data);
            }
            catch(e)
            {
                console.log(e);
            }
        };
    const reserve = (one , two) =>
    {
        updatee();
        setvisible(false);
        setPage(<Receipt  name = {x.name} time = {x.time}  seating = {one}  no = {x.no}  amount={price}/>)
    }
    return(
        <div>
            {page}
            {
                visible
                &&
                <div>
                    <h1>It's Cine-Time :)</h1>
                        <p className='desc'><b>Movie</b>: {x.name} <br/> <b>Time</b> : {x.time} <br/> <b>Screen</b> : {x.no}<br /><p className="price">Price : <b>*{price}*</b></p></p>
                <img className='screen' src={Screen}></img>
                <br/><br/>                
                <hr></hr>                
                <p className='budget'>Budget : Rs.<b>150</b></p>
                <div className='J'>
                    <pre className='no'> J        :      
                    <button className={state.state1} onClick={()=>handleButtonClick("J1" , "state1" , "gre" , 0)} disabled={data.J1} >01</button>
                    <button className={state.state2} onClick={()=>handleButtonClick("J2" , "state2" , "gre2" , 1)} disabled={data.J2}>02</button>
                    <button className={state.state3} onClick={()=>handleButtonClick("J3", "state3" , "gre2" , 2)} disabled={data.J3}>03</button>
                    <button className={state.state4} onClick={()=>handleButtonClick("J4", "state4" , "gre2" , 3)} disabled={data.J4}>04</button>
                    <button className={state.state5} onClick={()=>handleButtonClick("J5", "state5" , "gre2" , 4)} disabled={data.J5}>05</button>
                    <button className={state.state6} onClick={()=>handleButtonClick("J6", "state6" , "gre6" , 5)} disabled={data.J6}>06</button>
                    <button className={state.state7} onClick={()=>handleButtonClick("J7", "state7" , "gre2" , 6)} disabled={data.J7}>07</button>
                    <button className={state.state8} onClick={()=>handleButtonClick("J8", "state8" , "gre2" , 7)} disabled={data.J8}>08</button>
                    <button className={state.state9} onClick={()=>handleButtonClick("J9", "state9" , "gre2" , 8)} disabled={data.J9}>09</button>
                    <button className={state.state10} onClick={()=>handleButtonClick("J10", "state10" , "gre2" , 9)}disabled={data.J10}>10</button>
                    <button className={state.state11} onClick={()=>handleButtonClick("J11", "state11" , "gre6" , 10)}disabled={data.J11}>11</button>
                    <button className={state.state12} onClick={()=>handleButtonClick("J12", "state12" , "gre2" , 11)}disabled={data.J12}>12</button>
                    <button className={state.state13} onClick={()=>handleButtonClick("J13", "state13" , "gre2" , 12)}disabled={data.J13}>13</button>
                    <button className={state.state14} onClick={()=>handleButtonClick("J14", "state14" , "gre2" , 13)}disabled={data.J14}>14</button>
                    <button className={state.state15} onClick={()=>handleButtonClick("J15", "state15" , "gre2" , 14)}disabled={data.J15}>15</button>
                    <button className={state.state16} onClick={()=>handleButtonClick("J16", "state16" , "gre6" , 15)}disabled={data.J16}>16</button>
                    <button className={state.state17} onClick={()=>handleButtonClick("J17", "state17" , "gre2" , 16)}disabled={data.J17}>17</button>
                    <button className={state.state18} onClick={()=>handleButtonClick("J18", "state18" , "gre2" , 17)}disabled={data.J18}>18</button>
                    <button className={state.state19} onClick={()=>handleButtonClick("J19", "state19" , "gre2" , 18)}disabled={data.J9}>19</button>
                    <button className={state.state20} onClick={()=>handleButtonClick("J20", "state20" , "gre2" , 19)}disabled={data.J20}>20</button>
                    </pre>
                </div>
                <div className='I'>
                    <pre className='no'> I        :      
                    <button className={state.state21} onClick={()=>handleButtonClick("I1", "state21" , "gre" , 20)} >01</button>
                    <button className={state.state22} onClick={()=>handleButtonClick("I2", "state22" , "gre2" , 21)} >02</button>
                    <button className={state.state23} onClick={()=>handleButtonClick("I3", "state23" , "gre2" , 22)} >03</button>
                    <button className={state.state24} onClick={()=>handleButtonClick("I4", "state24" , "gre2" , 23)} >04</button>
                    <button className={state.state25} onClick={()=>handleButtonClick("I5", "state25" , "gre2" , 24)}  >05</button>
                    <button className={state.state26} onClick={()=>handleButtonClick("I6", "state26" , "gre6" , 25)} >06</button>
                    <button className={state.state27} onClick={()=>handleButtonClick("I7", "state27" , "gre2" , 26)}  >07</button>
                    <button className={state.state28} onClick={()=>handleButtonClick("I8", "state28" , "gre2" , 27)}  >08</button>
                    <button className={state.state29} onClick={()=>handleButtonClick("I9", "state29" , "gre2" , 28)}  >09</button>
                    <button className={state.state30} onClick={()=>handleButtonClick("I10", "state30" , "gre2" , 29)}  >10</button>
                    <button className={state.state31} onClick={()=>handleButtonClick("I11", "state31" , "gre6" , 30)}  >11</button>
                    <button className={state.state32} onClick={()=>handleButtonClick("I12", "state32" , "gre2" , 31)}  >12</button>
                    <button className={state.state33} onClick={()=>handleButtonClick("I13", "state33" , "gre2" , 32)}  >13</button>
                    <button className={state.state34} onClick={()=>handleButtonClick("I14", "state34" , "gre2" , 33)}  >14</button>
                    <button className={state.state35} onClick={()=>handleButtonClick("I15", "state35" , "gre2" , 34)} >15</button>
                    <button className={state.state36} onClick={()=>handleButtonClick("I16", "state36" , "gre6" , 35)}  >16</button>
                    <button className={state.state37} onClick={()=>handleButtonClick("I17", "state37" , "gre2" , 36)}  >17</button>
                    <button className={state.state38} onClick={()=>handleButtonClick("I18", "state38" , "gre2" , 37)}  >18</button>
                    <button className={state.state39} onClick={()=>handleButtonClick("I19", "state39" , "gre2" , 38)}  >19</button>
                    <button className={state.state40} onClick={()=>handleButtonClick("I20", "state40" , "gre2" , 39)}  >20</button>
                    </pre>
                </div>
                <div className='H'>
                    <pre className='no'> H        :      
                    <button className={state.state41} onClick={()=>handleButtonClick("H1", "state41" , "gre" , 40)} >01</button>
                    <button className={state.state42} onClick={()=>handleButtonClick("H2", "state42" , "gre2" , 41)}>02</button>
                    <button className={state.state43} onClick={()=>handleButtonClick("H3", "state43" , "gre2" , 42)} >03</button>
                    <button className={state.state44} onClick={()=>handleButtonClick("H4", "state44" , "gre2" , 43)}>04</button>
                    <button className={state.state45} onClick={()=>handleButtonClick("H5", "state45" , "gre2" , 44)}>05</button>
                    <button className={state.state46} onClick={()=>handleButtonClick("H6", "state46" , "gre6" , 45)} >06</button>
                    <button className={state.state47} onClick={()=>handleButtonClick("H7", "state47" , "gre2" , 46)} >07</button>
                    <button className={state.state48} onClick={()=>handleButtonClick("H8", "state48" , "gre2" , 47)} >08</button>
                    <button className={state.state49} onClick={()=>handleButtonClick("H9", "state49" , "gre2" , 48)}>09</button>
                    <button className={state.state50} onClick={()=>handleButtonClick("H10", "state50" , "gre2" , 49)} >10</button>
                    <button className={state.state51} onClick={()=>handleButtonClick("H11", "state51" , "gre6" , 50)} >11</button>
                    <button className={state.state52} onClick={()=>handleButtonClick("H12", "state52" , "gre2" , 51)} >12</button>
                    <button className={state.state53} onClick={()=>handleButtonClick("H13", "state53" , "gre2" , 52)} >13</button>
                    <button className={state.state54} onClick={()=>handleButtonClick("H14", "state54" , "gre2" , 53)} >14</button>
                    <button className={state.state55} onClick={()=>handleButtonClick("H15", "state55" , "gre2" , 54)} >15</button>
                    <button className={state.state56} onClick={()=>handleButtonClick("H16", "state56" , "gre6" , 55)} >16</button>
                    <button className={state.state57} onClick={()=>handleButtonClick("H17", "state57" , "gre2" , 56)} >17</button>
                    <button className={state.state58} onClick={()=>handleButtonClick("H18", "state58" , "gre2" , 57)} >18</button>
                    <button className={state.state59} onClick={()=>handleButtonClick("H19", "state59" , "gre2" , 58)} >19</button>
                    <button className={state.state60} onClick={()=>handleButtonClick("H20", "state60" , "gre2" , 59)} >20</button>
                    </pre>
                </div>
                <hr></hr>
                <p className='budget'>Gold : Rs.<b>190</b></p>
                <div className='G'>
                    <pre className='no'> G        :      
                    <button className={state.state61} onClick={()=>handleButtonClick("G1", "state61" , "gre" , 60)} >01</button>
                    <button className={state.state62} onClick={()=>handleButtonClick("G2", "state62" , "gre2" , 61)}>02</button>
                    <button className={state.state63} onClick={()=>handleButtonClick("G3", "state63" , "gre2" , 62)}>03</button>
                    <button className={state.state64} onClick={()=>handleButtonClick("G4", "state64" , "gre2" , 63)}>04</button>
                    <button className={state.state65} onClick={()=>handleButtonClick("G5", "state65" , "gre2" , 64)} >05</button>
                    <button className={state.state66} onClick={()=>handleButtonClick("G6", "state66" , "gre6" , 65)}>06</button>
                    <button className={state.state67} onClick={()=>handleButtonClick("G7", "state67" , "gre2" , 66)} >07</button>
                    <button className={state.state68} onClick={()=>handleButtonClick("G8", "state68" , "gre2" , 67)}>08</button>
                    <button className={state.state69} onClick={()=>handleButtonClick("G9", "state69" , "gre2" , 68)} >09</button>
                    <button className={state.state70} onClick={()=>handleButtonClick("G10", "state70" , "gre2" , 69)} >10</button>
                    <button className={state.state71} onClick={()=>handleButtonClick("G11", "state71" , "gre6" , 70)} >11</button>
                    <button className={state.state72} onClick={()=>handleButtonClick("G12", "state72" , "gre2" , 71)} >12</button>
                    <button className={state.state73} onClick={()=>handleButtonClick("G13", "state73" , "gre2" , 72)} >13</button>
                    <button className={state.state74} onClick={()=>handleButtonClick("G14", "state74" , "gre2" , 73)} >14</button>
                    <button className={state.state75} onClick={()=>handleButtonClick("G15", "state75" , "gre2" , 74)} >15</button>
                    <button className={state.state76} onClick={()=>handleButtonClick("G16", "state76" , "gre6" , 75)}>16</button>
                    <button className={state.state77} onClick={()=>handleButtonClick("G17", "state77" , "gre2" , 76)} >17</button>
                    <button className={state.state78} onClick={()=>handleButtonClick("G18", "state78" , "gre2" , 77)} >18</button>
                    <button className={state.state79} onClick={()=>handleButtonClick("G19", "state79" , "gre2" , 78)} >19</button>
                    <button className={state.state80} onClick={()=>handleButtonClick("G20", "state80" , "gre2" , 79)}>20</button>
                    </pre>
                </div>
                <div className='F'>
                    <pre className='no'> F        :      
                    <button className={state.state81} onClick={()=>handleButtonClick("F1", "state81" , "gre" , 80)} >01</button>
                    <button className={state.state82} onClick={()=>handleButtonClick("F2", "state82" , "gre2" , 81)} >02</button>
                    <button className={state.state83} onClick={()=>handleButtonClick("F3", "state83" , "gre2" , 82)}>03</button>
                    <button className={state.state84} onClick={()=>handleButtonClick("F4", "state84" , "gre2" , 83)} >04</button>
                    <button className={state.state85} onClick={()=>handleButtonClick("F5", "state85" , "gre2" , 84)} >05</button>
                    <button className={state.state86} onClick={()=>handleButtonClick("F6", "state86" , "gre6" , 85)} >06</button>
                    <button className={state.state87} onClick={()=>handleButtonClick("F7", "state87" , "gre2" , 86)} >07</button>
                    <button className={state.state88} onClick={()=>handleButtonClick("F8", "state88" , "gre2" , 87)} >08</button>
                    <button className={state.state89} onClick={()=>handleButtonClick("F9", "state89" , "gre2" , 88)} >09</button>
                    <button className={state.state90} onClick={()=>handleButtonClick("F10", "state90" , "gre2" , 89)} >10</button>
                    <button className={state.state91} onClick={()=>handleButtonClick("F11", "state91" , "gre6" , 90)} >11</button>
                    <button className={state.state92} onClick={()=>handleButtonClick("F12", "state92" , "gre2" , 91)} >12</button>
                    <button className={state.state93} onClick={()=>handleButtonClick("F13", "state93" , "gre2" , 92)} >13</button>
                    <button className={state.state94} onClick={()=>handleButtonClick("F14", "state94" , "gre2" , 93)} >14</button>
                    <button className={state.state95} onClick={()=>handleButtonClick("F15", "state95" , "gre2" , 94)} >15</button>
                    <button className={state.state96} onClick={()=>handleButtonClick("F16", "state96" , "gre6" , 95)} >16</button>
                    <button className={state.state97} onClick={()=>handleButtonClick("F17", "state97" , "gre2" , 96)}>17</button>
                    <button className={state.state98} onClick={()=>handleButtonClick("F18", "state98" , "gre2" , 97)} >18</button>
                    <button className={state.state99} onClick={()=>handleButtonClick("F19", "state99" , "gre2" , 98)} >19</button>
                    <button className={state.state100} onClick={()=>handleButtonClick("F20", "state100" , "gre2" , 99)} >20</button>
                    </pre>
                </div>
                <div className='E'>
                    <pre className='no'> E        :      
                    <button className={state.state101} onClick={()=>handleButtonClick("E1", "state101" , "gre" , 100)}  >01</button>
                    <button className={state.state102} onClick={()=>handleButtonClick("E2", "state102" , "gre2" , 101)}  >02</button>
                    <button className={state.state103} onClick={()=>handleButtonClick("E3", "state103" , "gre2" , 102)}  >03</button>
                    <button className={state.state104} onClick={()=>handleButtonClick("E4", "state104" , "gre2" , 103)}  >04</button>
                    <button className={state.state105} onClick={()=>handleButtonClick("E5", "state105" , "gre2" , 104)}  >05</button>
                    <button className={state.state106} onClick={()=>handleButtonClick("E6", "state106" , "gre6" , 105)}  >06</button>
                    <button className={state.state107} onClick={()=>handleButtonClick("E7", "state107" , "gre2" , 106)}  >07</button>
                    <button className={state.state108} onClick={()=>handleButtonClick("E8", "state108" , "gre2" , 107)}  >08</button>
                    <button className={state.state109} onClick={()=>handleButtonClick("E9", "state109" , "gre2" , 108)}  >09</button>
                    <button className={state.state110} onClick={()=>handleButtonClick("E10", "state110" , "gre2" , 109)}  >10</button>
                    <button className={state.state111} onClick={()=>handleButtonClick("E11", "state111" , "gre6" , 110)}  >11</button>
                    <button className={state.state112} onClick={()=>handleButtonClick("E12", "state112" , "gre2" , 111)}  >12</button>
                    <button className={state.state113} onClick={()=>handleButtonClick("E13", "state113" , "gre2" , 112)}  >13</button>
                    <button className={state.state114} onClick={()=>handleButtonClick("E14", "state114" , "gre2" , 113)}  >14</button>
                    <button className={state.state115} onClick={()=>handleButtonClick("E15", "state115" , "gre2" , 114)}  >15</button>
                    <button className={state.state116} onClick={()=>handleButtonClick("E16", "state116" , "gre6" , 115)}  >16</button>
                    <button className={state.state117} onClick={()=>handleButtonClick("E17", "state117" , "gre2" , 116)}  >17</button>
                    <button className={state.state118} onClick={()=>handleButtonClick("E18", "state118" , "gre2" , 117)}  >18</button>
                    <button className={state.state119} onClick={()=>handleButtonClick("E19", "state119" , "gre2" , 118)}  >19</button>
                    <button className={state.state120} onClick={()=>handleButtonClick("E20", "state120" , "gre2" , 119)}  >20</button>
                    </pre>
                </div>
                <div className='D'>
                    <pre className='no'> D        :      
                    <button className={state.state121} onClick={()=>handleButtonClick("D1", "state121" , "gre" , 120)} >01</button>
                    <button className={state.state122}  onClick={()=>handleButtonClick("D2", "state122" , "gre2" , 121)}>02</button>
                    <button className={state.state123}  onClick={()=>handleButtonClick("D3", "state123" , "gre2" , 122)} >03</button>
                    <button className={state.state124}  onClick={()=>handleButtonClick("D4", "state124" , "gre2" , 123)} >04</button>
                    <button className={state.state125} onClick={()=>handleButtonClick("D5", "state125" , "gre2" , 124)} >05</button>
                    <button className={state.state126}  onClick={()=>handleButtonClick("D6", "state126" , "gre6" , 125)} >06</button>
                    <button className={state.state127}  onClick={()=>handleButtonClick("D7", "state127" , "gre2" , 126)} >07</button>
                    <button className={state.state128}  onClick={()=>handleButtonClick("D8", "state128" , "gre2" , 127)} >08</button>
                    <button className={state.state129}  onClick={()=>handleButtonClick("D9", "state129" , "gre2" , 128)} >09</button>
                    <button className={state.state130}  onClick={()=>handleButtonClick("D10", "state130" , "gre2" , 129)} >10</button>
                    <button className={state.state131}  onClick={()=>handleButtonClick("D11", "state131" , "gre6" , 130)} >11</button>
                    <button className={state.state132}  onClick={()=>handleButtonClick("D12", "state132" , "gre2" , 131)} >12</button>
                    <button className={state.state133}  onClick={()=>handleButtonClick("D13", "state133" , "gre2" , 132)} >13</button>
                    <button className={state.state134}  onClick={()=>handleButtonClick("D14", "state134" , "gre2" , 133)} >14</button>
                    <button className={state.state135}  onClick={()=>handleButtonClick("D15", "state135" , "gre2" , 134)} >15</button>
                    <button className={state.state136}  onClick={()=>handleButtonClick("D16", "state136" , "gre6" , 135)} >16</button>
                    <button className={state.state137}  onClick={()=>handleButtonClick("D17", "state137" , "gre2" , 136)} >17</button>
                    <button className={state.state138}  onClick={()=>handleButtonClick("D18", "state138" , "gre2" , 137)} >18</button>
                    <button className={state.state139}  onClick={()=>handleButtonClick("D19", "state139" , "gre2" , 138)} >19</button>
                    <button className={state.state140}  onClick={()=>handleButtonClick("D20", "state140" , "gre2" , 139)} >20</button>
                    </pre>
                </div>
                <hr></hr>
                <p className='budget'>Diamond : Rs.<b>210</b></p>
                <div className='C'>
                    <pre className='no'> C        :      
                    <button className={state.state141}onClick={()=>handleButtonClick("C1", "state141" , "gre" , 140)} >01</button>
                    <button className={state.state142} onClick={()=>handleButtonClick("C2", "state142" , "gre2" , 141)} >02</button>
                    <button className={state.state143} onClick={()=>handleButtonClick("C3", "state143" , "gre2" , 142)} >03</button>
                    <button className={state.state144} onClick={()=>handleButtonClick("C4", "state144" , "gre2" , 143)} >04</button>
                    <button className={state.state145} onClick={()=>handleButtonClick("C5", "state145" , "gre2" , 144)}>05</button>
                    <button className={state.state146} onClick={()=>handleButtonClick("C6", "state146" , "gre6" , 145)} >06</button>
                    <button className={state.state147} onClick={()=>handleButtonClick("C7", "state147" , "gre2" , 146)} >07</button>
                    <button className={state.state148} onClick={()=>handleButtonClick("C8", "state148" , "gre2" , 147)} >08</button>
                    <button className={state.state149} onClick={()=>handleButtonClick("C9", "state149" , "gre2" , 148)} >09</button>
                    <button className={state.state150} onClick={()=>handleButtonClick("C10", "state150" , "gre2" , 149)}>10</button>
                    <button className={state.state151} onClick={()=>handleButtonClick("C11", "state151" , "gre6" , 150)} >11</button>
                    <button className={state.state152} onClick={()=>handleButtonClick("C12", "state152" , "gre2" , 151)} >12</button>
                    <button className={state.state153} onClick={()=>handleButtonClick("C13", "state153" , "gre2" , 152)} >13</button>
                    <button className={state.state154} onClick={()=>handleButtonClick("C14", "state154" , "gre2" , 153)} >14</button>
                    <button className={state.state155} onClick={()=>handleButtonClick("C15", "state155" , "gre2" , 154)} >15</button>
                    <button className={state.state156} onClick={()=>handleButtonClick("C16", "state156" , "gre6" , 155)} >16</button>
                    <button className={state.state157} onClick={()=>handleButtonClick("C17", "state157" , "gre2" , 156)} >17</button>
                    <button className={state.state158} onClick={()=>handleButtonClick("C18", "state158" , "gre2" , 157)} >18</button>
                    <button className={state.state159} onClick={()=>handleButtonClick("C19", "state159" , "gre2" , 158)} >19</button>
                    <button className={state.state160} onClick={()=>handleButtonClick("C20", "state160" , "gre2" , 159)} >20</button>
                    </pre>
                </div>
                <div className='B'>
                    <pre className='no'> B        :      
                    <button className={state.state161} onClick={()=>handleButtonClick("B1", "state161" , "gre" , 160)} >01</button>
                    <button className={state.state162} onClick={()=>handleButtonClick("B2", "state162" , "gre2" , 161)} >02</button>
                    <button className={state.state163} onClick={()=>handleButtonClick("B3", "state163" , "gre2" , 162)}>03</button>
                    <button className={state.state164} onClick={()=>handleButtonClick("B4", "state164" , "gre2" , 163)} >04</button>
                    <button className={state.state165} onClick={()=>handleButtonClick("B5", "state165" , "gre2" , 164)} >05</button>
                    <button className={state.state166} onClick={()=>handleButtonClick("B6", "state166" , "gre6" , 165)} >06</button>
                    <button className={state.state167} onClick={()=>handleButtonClick("B7", "state167" , "gre2" , 166)} >07</button>
                    <button className={state.state168} onClick={()=>handleButtonClick("B8", "state168" , "gre2" , 167)} >08</button>
                    <button className={state.state169} onClick={()=>handleButtonClick("B9", "state169" , "gre2" , 168)}>09</button>
                    <button className={state.state170} onClick={()=>handleButtonClick("B10", "state170" , "gre2" , 169)} >10</button>
                    <button className={state.state171} onClick={()=>handleButtonClick("B11", "state171" , "gre6" , 170)} >11</button>
                    <button className={state.state172} onClick={()=>handleButtonClick("B12", "state172" , "gre2" , 171)} >12</button>
                    <button className={state.state173} onClick={()=>handleButtonClick("B13", "state173" , "gre2" , 172)}>13</button>
                    <button className={state.state174} onClick={()=>handleButtonClick("B14", "state174" , "gre2" , 173)} >14</button>
                    <button className={state.state175} onClick={()=>handleButtonClick("B15", "state175" , "gre2" , 174)} >15</button>
                    <button className={state.state176} onClick={()=>handleButtonClick("B16", "state176" , "gre6" , 175)} >16</button>
                    <button className={state.state177} onClick={()=>handleButtonClick("B17", "state177" , "gre2" , 176)} >17</button>
                    <button className={state.state178} onClick={()=>handleButtonClick("B18", "state178" , "gre2" , 177)} >18</button>
                    <button className={state.state179} onClick={()=>handleButtonClick("B19", "state179" , "gre2" , 178)} >19</button>
                    <button className={state.state180} onClick={()=>handleButtonClick("B20", "state180" , "gre2" , 179)} >20</button>
                    </pre>
                </div>
                <div className='A'>
                    <pre className='no'> A        :      
                    <button className={state.state181} onClick={()=>handleButtonClick("A1", "state181" , "gre" , 180)} >01</button>
                    <button className={state.state182} onClick={()=>handleButtonClick("A2", "state182" , "gre2" , 181)} >02</button>
                    <button className={state.state183} onClick={()=>handleButtonClick("A3", "state183" , "gre2" , 182)} >03</button>
                    <button className={state.state184} onClick={()=>handleButtonClick("A4", "state184" , "gre2" , 183)} >04</button>
                    <button className={state.state185} onClick={()=>handleButtonClick("A5", "state185" , "gre2" , 184)} >05</button>
                    <button className={state.state186} onClick={()=>handleButtonClick("A6", "state186" , "gre6" , 185)} >06</button>
                    <button className={state.state187} onClick={()=>handleButtonClick("A7", "state187" , "gre2" , 186)} >07</button>
                    <button className={state.state188} onClick={()=>handleButtonClick("A8", "state188" , "gre2" , 187)} >08</button>
                    <button className={state.state189} onClick={()=>handleButtonClick("A9", "state189" , "gre2" , 188)} >09</button>
                    <button className={state.state190} onClick={()=>handleButtonClick("A10", "state190" , "gre2" , 189)}>10</button>
                    <button className={state.state191} onClick={()=>handleButtonClick("A11", "state191" , "gre6" , 190)} >11</button>
                    <button className={state.state192} onClick={()=>handleButtonClick("A12", "state192" , "gre2" , 191)} >12</button>
                    <button className={state.state193} onClick={()=>handleButtonClick("A13", "state193" , "gre2" , 192)} >13</button>
                    <button className={state.state194} onClick={()=>handleButtonClick("A14", "state194" , "gre2" , 193)} >14</button>
                    <button className={state.state195} onClick={()=>handleButtonClick("A15", "state195" , "gre2" , 194)} >15</button>
                    <button className={state.state196} onClick={()=>handleButtonClick("A16", "state196" , "gre6" , 195)} >16</button>
                    <button className={state.state197} onClick={()=>handleButtonClick("A17", "state197" , "gre2" , 196)} >17</button>
                    <button className={state.state198} onClick={()=>handleButtonClick("A18", "state198" , "gre2" , 197)} >18</button>
                    <button className={state.state199} onClick={()=>handleButtonClick("A19", "state199" , "gre2" , 198)} >19</button>
                    <button className={state.state200} onClick={()=>handleButtonClick("A20", "state200" , "gre2" , 199)} >20</button>
                    </pre>
                </div>
                <hr></hr>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <pre> Seat No Confirmation :</pre>
                {butt.map((bName) => (
                <pre ><b>{bName},</b> </pre>
                ))}
                </div>
                <button className='bookticket' onClick={()=>reserve(butt , x)}><b>Book Tickets</b></button>
                </div>
            }
</div>
    );
}
export default Seats;