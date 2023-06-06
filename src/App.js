// import {Header} from './Components/Header'
// import {AllRoutes} from './Routes/AllRoutes'
import {FetchData} from './Components/FetchData'
import {MoviePage} from './Pages/MoviePage' 
import { useState } from 'react'
export const App = () => {
  let [url, seturl] = useState('https://pokeapi.co/api/v2/pokemon?limit=300&offset=0');
  let [data, setdata] = useState([]);
  return (
    <div>
      <FetchData url={url} setdata = {setdata}/>
      <MoviePage datas={data}/>
    </div>
  )
}
