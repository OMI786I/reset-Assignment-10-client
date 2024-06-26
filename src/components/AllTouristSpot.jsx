import { Link, useLoaderData } from "react-router-dom";

const AllTouristSpot = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1 className="text-center font-bold text-3xl underline">
        {" "}
        You can find all added tourist spot here
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {data.map((data) => (
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
