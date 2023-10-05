import React from 'react'
import "./style.css";
import HardwareMenu from "./HardwareMenuApi.js";

const HardwareCard = () => {
       
      return(
        <section className='main-card--container'>
        {
          menuData.map((curElem) => {
          return(
            <div className="card-container">
            <img src={curElem.img} alt="images"/>
            <div className="card">
                  <div className="card-body">
                    <div className="card-circle">

                    <div className="card-number">
                      <h1>{curElem.id}</h1>
                    </div>

                    </div>
                    <div className="card-author">
                      <div className="card-title">
                        {curElem.name}
                      </div>
                    </div>
                    <div className="card-description">
                      {curElem.description}
                    </div>
                    <div className="card-read">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
          )
            
          })
        }
        </section>            
          )
}
export default  HardwareCard;
