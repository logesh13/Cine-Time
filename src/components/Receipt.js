import React, { useEffect } from 'react';
import './receiptstyle.css';
import {useState} from 'react';
import Vikram from 'D:/Logesh/STUDIES/REACT/cine-time/src/Images/Vikram.jpg';
import Leo from "D:/Logesh/STUDIES/REACT/cine-time/src/Images/Leo.jpg"
import Master from "D:/Logesh/STUDIES/REACT/cine-time/src/Images/Master.jpeg"
import FastX from 'D:/Logesh/STUDIES/REACT/cine-time/src/Images/FastX.jpeg';
import EvilDead from 'D:/Logesh/STUDIES/REACT/cine-time/src/Images/EvilDead.jpeg';
import Kaithi from 'D:/Logesh/STUDIES/REACT/cine-time/src/Images/Kaithi.jpeg';
import QRCode from 'qrcode.react';
function Receipt(X) 
{
      const[image , setimage] = useState('');
      const[price , setprice] = useState((X.amount)+(X.amount *0.18))
      const imagedisplay = () =>
      {
          if(X.name === "VIKRAM")
          {
            setimage(Vikram)
          }
          else if(X.name === "LEO")
          {
            setimage(Leo)
          }
          else if(X.name === "MASTER")
          {
            setimage(Master);
          }
          else if(X.name === "KAITHI")
          {
            setimage(Kaithi);
          }
          else if(X.name === "FAST X")
          {
            setimage(FastX);
          }
          else if(X.name === "Evil Dead")
          {
            setimage(EvilDead);
          }
      }      
      useEffect(()=>
      {
        imagedisplay();
      } , []);
      const[text , setText] = useState("Sample")
      return(
        <div >
          <div className='receipt' >            
                       <div className='container' >
                            <h1 className='title'>cine-time&#127871;</h1>
                            <h2 className='theatre'>SVR VISUALS</h2>
                            <img className = "image" src={image}></img>
                            <br/>
                            <p style={{display : 'flex' , marginLeft : '20px' , marginTop:'10px'}}>Movie  : <b> { X.name}</b></p>
                            <p style={{display : 'flex' , marginLeft : '20px' , marginTop:'10px'}}>Time  : <b> { X.time}</b></p>
                            <p style={{display : 'flex' , marginLeft : '20px' , marginTop:'10px'}}>Screen  : <b> 0{ X.no}</b></p>
                            <p style={{display : 'flex' , marginLeft : '20px' , marginTop:'10px'}}>Date  : <b> 13/01/2003</b></p>
                            <p style={{display : 'flex' , marginLeft : '20px' , marginTop:'10px'}}>Location   : <b> Dharapuram</b></p>
                            <p style={{display : 'flex' , marginLeft : '20px' , marginTop:'10px'}}>Transaction ID   : <b> N/A</b></p>
                            <p style={{display : 'flex' , marginLeft : '20px' , marginTop:'10px'}}>3D Glasses   : <b> N/A</b></p>
                            <br/>
                            <div className = 'qr'>
                                <QRCode  value={text} />                                
                            </div>
                            <pre className='scan'>Scan Here While Entering Screen !</pre>
                            <p style={{color:'red'}}><b>DON'T SHARE QR CODE WITH OTHERS</b></p>
                            <hr></hr>
                            <div className='botrece'>
                                <h1>TOTAL : ₹{price}</h1>
                            </div>
                            <pre className='disclaimer'>*(Including all GST's)</pre>
                       </div>
          </div>
        </div>
      )
}
export default Receipt