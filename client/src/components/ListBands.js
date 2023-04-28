import React, { Fragment, useEffect, useState } from "react";
import EditBands from "./EditBands";

const ListBands = () => {
  const [bands, setBands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  fetch('http://heroku-link.com/api/bands')
  .then(response => response.json())
  .then(data => setBands(data))
  .catch(error => console.error(error));

  const deleteBands = async (id) => {
    try {
      const response = await fetch(`http://heroku-link.com/api/bands/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setBands(bands.filter((bands) => bands.bands_id !== id));
      } else {
        console.error("Failed to delete band.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getBands = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://heroku-link.com/api/bands");
      if (response.ok) {
        const jsonData = await response.json();
        setBands(jsonData);
      } else {
        console.error("Failed to get bands.");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const updateName = async (id, name) => {
    try {
      const body = { name };
      const response = await fetch(`http://heroku-link.com/api/bands/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        console.error("Failed to update band name.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateDate = async (id, date) => {
    try {
      const body = { date };
      const response = await fetch(`http://heroku-link.com/api/bands/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        console.error("Failed to update band date.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBands();
  }, []);

  return (
    <Fragment>
      {isLoading && <div>Loading...</div>}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Band Name:</th>
            <th>Date Touring:</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bands.map((bands) => (
    <tr key={bands.bands_id}>
      <td>{bands.name}</td>
      <td>{bands.date}</td>
      <td>
        <EditBands bands={bands} />
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteBands(bands.bands_id)}>
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </Fragment>
  );
};

export default ListBands;
