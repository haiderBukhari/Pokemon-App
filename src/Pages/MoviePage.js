import React, { useEffect, useState } from 'react'
import { Header, Footer, FetchData, Cards } from '../Components'
import Image from '../asset/demo.jpg'
import { useLocation } from 'react-router-dom';
import './CSS/MoviePage.css'
export const MoviePage = ({ datas }) => {
    let [initial, setinital] = useState(1);
    let [final, setfinal] = useState(21);
    let [set, setset] = useState("");
    let [datalist, setdatalist] = useState();
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }      
    let handleback = () =>{
        if(initial-20<0){setinital(initial+20); setfinal(final + 20); return}
        setinital(initial - 20);
        setfinal(final - 20);
        scrollToTop();
        // document.querySelector('.movies-list').innerHTML = "";
    }
    let handlenext = () =>{
        if(final+20>300){setfinal(final-20); setinital(initial-20); return}
        setinital(initial + 20);
        setfinal(final + 20);
        scrollToTop();
        // document.querySelector('.movies-list').innerHTML = "";
    }
    return (
        <div>
            <Header setset={setset} />
            {set == "" ? false : true && <h3 className='find'>Finding Results for <span>{set}</span></h3>}
            <div className='movies-list'>
                {
                    datas.map((arr) => {
                        if (arr.url.split("/").filter(Boolean).pop() >= initial && arr.url.split("/").filter(Boolean).pop() < final) {
                            if ((set == "" || arr.name.toLowerCase().includes(set))) {
                                return (
                                    <>
                                        <Cards datas={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${arr.url.split("/").filter(Boolean).pop()}.png`} headings={arr.name} />
                                    </>
                                )
                            }
                        }
                    })
                }
            </div>
                <div className="btns">
                    <button onClick={handleback} className='back'>Back</button>
                    <button onClick={handlenext} className='next'>Next</button>
                </div>
            <Footer />
        </div>
    )
}
