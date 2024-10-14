import React from 'react';
import "./Home.css";
import Button from 'react-bootstrap/Button';

import Play from "../Assets/play_image.jpeg"
function Home() {
    const TourData = [
        {date: "JUL 16",
            area : "DETROIT, MI",
            location : "DTE ENERGY MUSIC THEATRE"
        },
        {date: "JUL 19",
            area : "TORONTO, ON",
            location : "BUDWEISER STAGE"
        },
        {date: "JUL 22",
            area : "BRISTOW, VA",
            location : "JIGGY LUBE LIVE"
        },
        {date: "JUL 29",
            area : "PHOENIX, AZ",
            location : "AK-CHIN PAVILION"
        },
        {date: "AUG 02",
            area : "LAS VEGAS, NV",
            location : "T-MOBILE ARENA"
        }
    ]
  return (
   <>
     <div className="home_topbox">
        <h1>The Generics</h1>
        <button>Get Our Latest Albumb</button>
       <div className='image_box'>
       <img src={Play} alt="check" style={{height:"80px", width:"80px", margin:"3%"}}/>
       </div>
    </div>
    <div className='tour_box'>
        <h3>TOURS</h3>
        {TourData.map((tour,index) => (
            <div key={index} className='tour_container'>
                <p>{tour.date}</p>
                <p>{tour.area}</p>
                <p>{tour.location}</p>
                <Button variant="primary">BUY TICKETS</Button>
                <hr/>
            </div>
        ))}
    </div>
   </>
  )
}

export default Home