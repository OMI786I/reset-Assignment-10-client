import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountrySection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/countrySection")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 my-20">
      {data.map((data) => (
        <div
          key={data._id}
          className="card bg-base-100 w-96 md:w-80 lg:w-80 xl:2-96 shadow-xl"
        >
          <figure>
            <img src={data.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.country_name}</h2>
            <p>{data.short_description}</p>
            <Link to={data.country_name.toLowerCase()}>
              <div className="card-actions justify-end">
                <button className="btn btn-warning">View</button>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountrySection;
