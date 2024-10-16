import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Play from "../Assets/play_image.jpeg";
import { useCart } from "../Context/ContextProvider";

function Home() {
  const { TourData } = useCart();

  return (
    <>
      <div className="home_topbox">
        <h1>The Generics</h1>
        <button>Get Our Latest Albumb</button>
        <div className="image_box">
          <img
            src={Play}
            alt="check"
            style={{ height: "80px", width: "80px", margin: "3%" }}
          />
        </div>
      </div>
      <div className="tour_box">
        <h3>TOURS</h3>
        {TourData.map((tour, index) => (
          <div key={index} className="tour_container">
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>{tour.date}</td>
                  <td>{tour.area}</td>
                  <td>{tour.location}</td>
                  <td>
                    <Button variant="primary">BUY TICKETS</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
