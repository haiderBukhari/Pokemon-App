import React from 'react'
import './CSS/Card.css'
export const Cards = ({datas, headings}) => {
  return (
    <div className='main-div'>
        <div>
            <div className="upper-img">
                <img src={datas} alt="" />
            </div>
            <div className="lower-data">
                <h1>{headings}</h1>
            </div>
        </div>
    </div>
  )
}
