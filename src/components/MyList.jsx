import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
const MyList = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const data = useLoaderData();
  console.log(data);
  const filtered = data && data.filter((u) => u.email === user.email);
  console.log(filtered);
  const [users, setUsers] = useState(filtered);
  // mongodb delete

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addedSection/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              //delete update without refresh
              const remaining =
                users && users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };

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
            {users.map((data) => {
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
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn btn-warning"
                    >
                      Delete
                    </button>
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
