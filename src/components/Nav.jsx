import 'bootstrap/dist/css/bootstrap.css'
export default function Nav({city,today}) {
  return (
    <div>
<div className='container' style={{marginTop:''}}>

<div className='row mx-auto' style={{width:'100%', }}>
 
 <div className='mb-5 my-2 text-white'>
  <h1>مواقيت الصلاه في كل المدن </h1>
 </div>
<div className='col-lg-12'>
<div style={{width:'100%', textAlign:'center', color:'white' ,}}>
    <h6 >{today}</h6>
    <h1 style={{fontWeight:'bold'}}>{city}</h1>
</div>
</div>


</div>
           <hr style={{ color:'white'}}></hr>

           </div>
    </div>
  )
}
