import React , {Component} from "react";
import Vikram from 'D:/Logesh/STUDIES/REACT/cine-time/src/Images/Vikram.jpg';
import Master from 'D:/Logesh/STUDIES/REACT/cine-time/src/Images/Master.jpeg';
import Leo from 'D:/Logesh/STUDIES/REACT/cine-time/src/Images/Leo.jpg';
import FastX from 'D:/Logesh/STUDIES/REACT/cine-time/src/Images/FastX.jpeg';
import EvilDead from 'D:/Logesh/STUDIES/REACT/cine-time/src/Images/EvilDead.jpeg';
import Kaithi from 'D:/Logesh/STUDIES/REACT/cine-time/src/Images/Kaithi.jpeg';
import './moviestyle.css';
import Timing from "./Timing";
import {useState} from 'react';
import Seats from "./Seats";
import empty from "./empty";
const Movies = () =>
{
      const [page,setPage] = useState(<empty />) // Page Shifting Initially at empty page then I've use to change the respective page's
      const[visible , setvisible] = useState(true);    
        const visibility = (moviename) =>
        {
            setvisible(false);
            setPage(<Timing name={moviename} />)
        }   
        return(
            <div>
                {page}
                {
                        visible && 
                        <div>
                            <h1>It's Cine-Time :)</h1>
                            <div className="sample" onClick={()=>visibility("VIKRAM")}>
                            <img src={Vikram} className='movielist' ></img>
                            <p className="moviename">Movie Name :<b> Vikram</b> </p>
                            <p className="directorname">Director Name :<b> Lokesh Kanagaraj</b> </p>
                            <p className="rating">&#128151;Rating :<b> 9/10</b> </p>
                            </div>
                            <hr></hr>
                            <div className="sample" onClick={()=>visibility("Evil Dead")}>
                            <img src={EvilDead} className='movielist' ></img>
                            <p className="moviename">Movie Name :<b> Evil Dead</b> </p>
                            <p className="directorname">Director Name :<b> Lee Cronin</b> </p>
                            <p className="rating">&#128151;Rating :<b> 6.7/10</b> </p>
                            </div>
                            <hr></hr>
                            <div className="sample2" onClick={()=>visibility("MASTER")}>
                            <img src={Master} className='movielist' ></img>
                            <p className="moviename">Movie Name :<b> Master</b> </p>
                            <p className="directorname">Director Name :<b> Lokesh Kanagaraj</b> </p>
                            <p className="rating">&#128151;Rating :<b> 8.3/10</b> </p>
                            <p>&hearts</p>
                            </div>
                            <hr></hr>
                            <div className="sample" onClick={()=>visibility("LEO")}>
                            <img src={Leo} className='movielist' ></img>
                            <p className="moviename">Movie Name :<b> Leo</b> </p>
                            <p className="directorname">Director Name :<b> Lokesh Kanagaraj</b> </p>
                            <p className="rating">&#128151;Rating :<b> 9.5/10</b> </p>
                            </div>
                            <hr></hr>
                            <div className="sample" onClick={()=>visibility("FAST X")}>
                            <img src={FastX} className='movielist' ></img>
                            <p className="moviename">Movie Name :<b> Fast X</b> </p>
                            <p className="directorname">Director Name :<b> Louis Leterrier</b> </p>
                            <p className="rating">&#128151;Rating :<b> 6.1/10</b> </p>
                            </div>
                            <hr></hr>
                            <div className="sample" onClick={()=>visibility("KAITHI")}>
                            <img src={Kaithi} className='movielist' ></img>
                            <p className="moviename">Movie Name :<b> Kaithi</b> </p>
                            <p className="directorname">Director Name :<b> Lokesh Kanagaraj</b> </p>
                            <p className="rating">&#128151;Rating :<b> 9.7/10</b> </p>
                            </div>
                        </div>                
                }
            </div>            
        )    
}
function hai()
    {
        window.alert("Hello");//alert("hello")
    }
  function  hai1()
    {
        window.alert("Hai");//alert("hello")
    }
export default Movies;