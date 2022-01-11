import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
export const PhotoDetail = () => {
  const [data, setData] = useState<any>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/" + id)
      .then((resp) => setData(resp.data));
  });

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {data && (
        <div className="card" style={{ width: "18rem" }}>
          <Header title={"Details of " + data.title}></Header>

          <img className="card-img-top" src={data.url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.title}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      )}
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};
