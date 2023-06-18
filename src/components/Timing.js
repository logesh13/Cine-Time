import React from 'react'
import './timingslot.css'
import Seats from './Seats';
import {useState} from 'react';
function Timing(x) 
{
        const [page,setPage] = useState(<empty />)
        const[visible , setvisible] = useState(true);    
        const visibility = (moviename , timex , screen) =>
        {
            setvisible(false);
            setPage(<Seats name={moviename} time ={timex} no ={screen}/>)
        }
        const fun = (time , screeen) =>
        {
          var temp = x.name;
          var scre = screeen
          visibility(temp , time , scre);
        }
  return(
    <div>
      {page}
      {
            visible             
            &&
            <div>
            <h1>It's Cine-Time :)</h1>
              <div className='time'>
            <hr></hr>
            <div className='screen1'>
              <h2 className='screenno'>Screen 1 :</h2>
              <br/>
              <p className='movietext'>Movie : <b>{x.name}</b></p>
              <p className='movietext1'>Date : <b>Today</b></p>
              <button className='screen11' onClick={()=>fun("9:00 AM" , 1)}>9:00 AM</button>        
              <button className='screen12' onClick={()=>fun("10:30 AM" , 1)}>10:30 AM</button>
              <br />        
              <button className='screen13' onClick={()=>fun("6:00 PM" , 1)}>6:00 PM</button>        
              <button className='screen14' onClick={()=>fun("8:30 PM" , 1)}>8:30 PM</button>        
            </div>
            <br/>
            <hr></hr>    
            <div className='screen2'>
              <h2 className='screenno'>Screen 2 :</h2>
              <br/>
              <p className='movietext'>Movie : <b>{x.name}</b></p>
              <p className='movietext1'>Date : <b>Today</b></p>        
              <button className='screen21' onClick={()=>fun("9:30 AM" , 2 )}>9:30 AM</button>        
              <button className='screen22' onClick={()=>fun("11:00 AM" ,2 )}>11:00 AM</button>
              <br />
              <button className='screen23' onClick={()=>fun("7:00 PM" , 2)}>7:00 PM</button>        
              <button className='screen24' onClick={()=>fun("9:00 PM" , 2)}>9:00 PM</button>
            </div>
            <br/>
            <hr></hr>
            <div className='screen3'>
              <h2>Screen 3 :</h2>
              <br/>
              <p className='movietext'>Movie : <b>{x.name}</b></p>
              <p className='movietext1'>Date : <b>Today</b></p>
              <button className='screen31' onClick={()=>fun("7:30 AM" , 3)}>7:30 AM</button>        
              <button className='screen32' onClick={()=>fun("10:00 AM" , 3)}>10:00 AM</button>
              <br />        
              <button className='screen33' onClick={()=>fun("6:30 PM" , 3)}>6:30 PM</button>        
              <button className='screen34' onClick={()=>fun("10:00 PM" , 3)}>10:00 PM</button>
            </div> 
          </div>
              </div>            
      }            
    </div>    
  )
}
export default Timing
