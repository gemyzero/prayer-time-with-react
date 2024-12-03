


export default function Pray({name,time,img}) {




    return (
        <div className="col-lg-2 col-md-5 m-2 ">
        <div className="card">
            <img src={img} style={{width:'100%' , height:'250px'}} />
            <div>
                <h3 className='mt-2'>{name}</h3>
                <h1>{time}</h1>
            </div>
        </div>
        </div>
  )
}
