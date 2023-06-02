import React from "react";
import { Link } from "react-router-dom";

const Room = (props) => {
    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h5 className="card-title">Room</h5>
          <h3 className="font-bold text-lg" >{props.name}</h3>
          <div className="card-actions justify-end">
            <Link to="/chat" className="btn btn-primary">Join</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Room;
  