import Nav from './Nav'
import Pray from './Pray'
import alfajr from '../assets/alfajr.jpg'
import aldahr from '../assets/aldahr.jpg'
import al3sr from '../assets/al3sr.jpg'
import alma8rp from '../assets/alma8rp.jpg'
import al3sha from '../assets/al3sha.jpg'
import axios from "axios";
import { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/dist/locale/ar-dz'
export default function MainContent() {
    
    const [today , setToday] = useState()
    moment.locale('ar'); 

    const [Prays,setPray] = useState({})
    const [city , setCity] = useState('Makkah al Mukarramah');

    const hadelSelct = (event)=>{
        const val = event.target.value
        console.log( event.target.value)
        setCity(val)
    }

let param = {
    country:"SA",
    city: city
}

console.log(city)

const getTimings = ()=>{

    axios.get('https://api.aladhan.com/v1/timingsByCity', {
        params:param
      }).then((res)=>{
  
        setPray(res.data.data.timings);
      })
      
}
 useEffect(()=>{      
    getTimings()

},[city])




useEffect(()=>{
    const t = moment() ; 
    console.log('@the time is',t.format('MMMM Do YYYY, h:mm:ss a') )
        setToday(t.format('MMMM Do YYYY, h:mm:ss a'))
},
[city])
    return (
        <>

        <Nav city= {city} today={today}/>
        <div className="container">
      <div  className="row" style={{display:'flex' , justifyContent:'center'}}>
      <Pray name='Fajr'  time={Prays.Fajr} img={alfajr}/>
      <Pray name='Dhuhr'  time={Prays.Dhuhr} img={aldahr}/>
      <Pray name='Asr'  time={Prays.Asr} img={al3sr}/>
      <Pray name='Sunset'  time={Prays.Sunset} img={alma8rp}/>
      <Pray name='Isha'  time={Prays.Isha} img={al3sha}/>

</div>
      </div>
   
      <div className="conatiner mt-5">
     <div className="row" style={{display:'flex' , justifyContent:'center'}}>
     <select  onChange={()=>{hadelSelct(event)}} className="form-select" style={{width:'300px',}}>
        <option>Makkah al Mukarramah</option>
        <option>Ar Riyāḑ</option>
        <option>Al Madīnah al Munawwarah</option>
        <option>Tabūk</option>

      </select>
     </div>
    </div>        </>
      )
}
