
import './style.css';
// import portfolio from '../../portfolio.json';
import React from 'react';
import StalkImage from "../../images/mainpage.png"
import WeatherImage from "../../images/App-img.png"
import DayPlannerImage from "../../images/Screenshot_Day_Planner.png"
import KanbunsImage from "../../images/project2.png"
import NoteImage from "../../images/Main2.png"
import EmployerImage from "../../images/Page1.png"
function Portfolio() {   


  return (
    <div className="container pt-3 mt-3 pb-5 mb-5">
        <p className="h1">My projects</p>            
        <div className="row pb-3 mb-3">                                     
           
                <div className="col-lg-6 my-5" > 
                    <div  className="card" style={{width: "75%", height: "100%" }}>
                        <img src={StalkImage} style={{width: "100%", height: "50%" }} className="card-img-top" alt="Stalk App"/>
                        <div className="card-body">
                            <h3 className="card-title">Stalk App</h3>
                        </div>                            
                        <div className="card-body">                                
                            <a href="https://github.com/IonGavrilita/STALK-P1-" className="btn btn-success my-1 mr-5 repo" >See Repo</a>
                            <a href="https://iongavrilita.github.io/STALK-P1-/" className="btn btn-success ml-4 live">See Live!!</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 my-5" > 
                    <div  className="card" style={{width: "75%", height: "100%" }}>
                        <img src={WeatherImage} style={{width: "100%", height: "50%" }} className="card-img-top" alt="Weather App"/>
                        <div className="card-body">
                            <h3 className="card-title">Weather App</h3>
                        </div>                            
                        <div className="card-body">                                
                            <a href="https://github.com/IonGavrilita/h6_weather_API" className="btn btn-success my-1 mr-5 repo" >See Repo</a>
                            <a href="https://iongavrilita.github.io/h6_weather_API/." className="btn btn-success ml-4 live">See Live!!</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 my-5" > 
                    <div  className="card" style={{width: "75%", height: "100%" }}>
                        <img src={DayPlannerImage} style={{width: "100%", height: "50%" }} className="card-img-top" alt="Day Planner App"/>
                        <div className="card-body">
                            <h3 className="card-title">Day Planner App</h3>
                        </div>                            
                        <div className="card-body">                                
                            <a href="https://github.com/IonGavrilita/h5_Day_Planner" className="btn btn-success my-1 mr-5 repo">See Repo</a>
                            <a href="https://iongavrilita.github.io/h5_Day_Planner/." className="btn btn-success ml-4 live">See Live!!</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 my-5" > 
                    <div  className="card" style={{width: "75%", height: "100%" }}>
                        <img src={NoteImage} style={{width: "100%", height: "50%" }} className="card-img-top" alt="Note Taker"/>
                        <div className="card-body">
                            <h3 className="card-title">Note Taker</h3>
                        </div>                            
                        <div className="card-body">                                
                            <a href="https://github.com/IonGavrilita/Note_Taker" className="btn btn-success my-1 mr-5 repo">See Repo</a>
                            <a href="https://notetakerion.herokuapp.com/notes" className="btn btn-success ml-4 live">See Live!!</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 my-5" > 
                    <div  className="card" style={{width: "75%", height: "100%" }}>
                        <img src={KanbunsImage} style={{width: "100%", height: "50%" }} className="card-img-top" alt="Hot KanBuns"/>
                        <div className="card-body">
                            <h3 className="card-title">Hot KanBuns</h3>
                        </div>                            
                        <div className="card-body">                                
                            <a href="https://github.com/IonGavrilita/Hot_KanBuns" className="btn btn-success my-1 mr-5 repo">See Repo</a>
                            <a href="https://hotkanbuns.herokuapp.com/" className="btn btn-success ml-4 live">See Live!!</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 my-5" > 
                    <div  className="card" style={{width: "75%", height: "100%" }}>
                        <img src={EmployerImage} style={{width: "100%", height: "50%" }} className="card-img-top" alt= "Employee Tracker"/>
                        <div className="card-body">
                            <h3 className="card-title"> Employee Tracker</h3>
                        </div>                            
                        <div className="card-body">                                
                            <a href="https://github.com/IonGavrilita/Employee_Trucker" className="btn btn-success my-1 mr-5 repo">See Repo</a>
                            <a href="https://github.com/IonGavrilita/Employee_Trucker" className="btn btn-success ml-4 live">See Live!!</a>
                        </div>
                    </div>
                </div>
           
                     
        </div>
    </div>
)  
}

export default Portfolio;