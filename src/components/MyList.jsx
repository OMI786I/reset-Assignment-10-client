import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const data = useLoaderData();
  console.log(data);
  const filtered = data && data.filter((u) => u.email === user.email);
  console.log(filtered);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Spot Name</th>
              <th>Location</th>
              <th>Visitors</th>
              <th>cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filtered.map((data) => {
              return (
                <tr key={data._id}>
                  <th></th>
                  <th>{data.spotName}</th>
                  <th>{data.location}</th>
                  <th>{data.visitor}</th>
                  <th>{data.cost}</th>
                  <th>
                    <button className="btn btn-warning">Update</button>
                  </th>
                  <th>
                    <button className="btn btn-warning">Delete</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filtered.map((data) => (
        <div key={data._id}></div>
      ))}
    </div>
  );
};

export default MyList;
