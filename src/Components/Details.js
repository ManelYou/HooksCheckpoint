import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const { movieDesc } = location.state;

  React.useEffect(() => {
    console.log(location);
  }, []);
  return (
    <div>
      <h1>Details Page</h1>
      <button  onClick={()=>navigate('/')}>Back</button>
      <h1>{location.state.desc}</h1>
      <source src={location.state.trailer} type="video/mp4" />

      <video width="750" height="500" controls autoPlay muted>
        <source src={location.state.trailer} type="video/mp4" />
      </video>
    </div>
  );
};

export default Details;
