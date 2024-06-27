import { Link, useLoaderData, useParams } from "react-router-dom";

const CountrySpot = () => {
  const { name } = useParams();
  console.log(name);
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1 className="text-center text-3xl">Places in {name}</h1>

      {data ? (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
          {data.map((data) => (
            <div key={data._id}>
              <div
                className="flex flex-col gap-11 mt-10 xl:w-96  border p-10 rounded-xl "
                data-aos="fade-right"
              >
                <div>
                  <img
                    src={data.image}
                    className="  max-h-60 w-full rounded-xl"
                  ></img>
                </div>
                <div>
                  <h1 className="text-green-600"></h1>
                  <h1 className="md:text-3xl text-2xl">
                    {data.tourists_spot_name}
                  </h1>

                  <p className="text-gray-700 mt-3 font-bold">
                    {" "}
                    {data.short_description}
                  </p>
                  <div className=" border-t-2 border-b-2 p-1 mt-3 ">
                    <p className="mt-3">
                      <span className="font-bold ">Country: </span>{" "}
                      {data.country_Name}
                    </p>
                    <p>
                      <span className="font-bold">price:</span>{" "}
                      {data.average_cost}
                    </p>
                    <p>
                      {" "}
                      <span className="font-bold">seasonality:</span>{" "}
                      {data.seasonality}{" "}
                    </p>
                  </div>
                  <p className="mt-3">
                    <span className="font-bold block ">Time </span>{" "}
                    {data.travel_time}
                    <span className="font-bold block ">Visitors </span>{" "}
                    {data.totalVisitorsPerYear}
                  </p>

                  <div className="flex gap-6 mt-7">
                    <Link
                      to={`/detailsCountrySpot/${data.country_Name}/${data._id}`}
                    >
                      {" "}
                      <button className="btn btn-warning">
                        {" "}
                        View Details{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          {" "}
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default CountrySpot;
