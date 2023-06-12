import React, { useEffect, useState } from "react";
import axios from "axios";
// import { toast } from "react-toastify";

const CardView = () => {
  const [view, setView] = useState([]);

  // const handleDelete=(e)=>{
  //   toast.success("User Deleted Successfully !", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });
  // }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/list")
      .then((data) => {
        console.log(data.data.user);
        setView(data.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1 className="row justify-content-center">List of User</h1>
      <div className="m-3 row row-cols-3 g-3">
        {view.map((data) => (
          <div className="card grid m-5" key={data._id}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Name :- {data.name}</li>
              <li className="list-group-item">Email :- {data.email}</li>
              <li className="list-group-item">Subject :- {data.subject}</li>
              <li className="list-group-item">Message :- {data.message}</li>
            </ul>
            {/* <button className="btn btn-danger" onClick={handleDelete}>Delete</button> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default CardView;
