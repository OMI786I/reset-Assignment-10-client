import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllTouristSpot = () => {
  const data = useLoaderData();

  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const sortedData = [...data].sort((a, b) => {
    return sortOrder === "asc" ? a.cost - b.cost : b.cost - a.cost;
  });

  return (
    <div>
      <h1 className="text-center font-bold text-3xl underline">
        {" "}
        You can find all added tourist spot here
      </h1>
      <div className="text-center my-4">
        <label htmlFor="sortOrder" className="font-bold mr-2">
          Sort by price:
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="border rounded p-2"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      ;
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {sortedData.map((data) => (
          <div key={data._id}>
            <div
              className="flex flex-col gap-11 mt-10 xl:w-96  border p-10 rounded-xl "
              data-aos="fade-right"
            >
              <div>
                <img
                  src={data.photo}
                  className="  max-h-60 w-full rounded-xl"
                ></img>
              </div>
              <div>
                <h1 className="text-green-600"></h1>
                <h1 className="md:text-3xl text-2xl">{data.spotName}</h1>

                <div className=" border-t-2 border-b-2 p-1 mt-3 ">
                  <p>
                    <span className="font-bold">cost:</span> {data.cost} usd
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold">seasonality:</span>{" "}
                    {data.season}{" "}
                  </p>
                </div>
                <p className="mt-3">
                  <span className="font-bold block ">Time </span> {data.time}
                  <span className="font-bold block ">Visitors </span>{" "}
                  {data.visitor}
                  <span className="font-bold block ">Submitted By </span>{" "}
                  {data.email}
                </p>

                <div className="flex gap-6 mt-7">
                  <Link to={`/detailsAddSpot/${data._id}`}>
                    <button className="btn btn-warning"> View Details </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
