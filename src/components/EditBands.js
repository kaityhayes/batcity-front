import React, { Fragment, useState } from "react";

const EditBands = ({ bands, setBands }) => {
  const [name, setName] = useState(bands.name);
  const [date, setDate] = useState(bands.date);

  const setNameAndDate = () => {
    setName(bands.name)
    setDate(bands.date)
  }

  const updateNameAndDate = async (e) => {
    e.preventDefault();
    try {
      const body = { ...bands, name, date };
      const response = await fetch(
        `http://localhost:4000/bands/${bands.bands_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = '/Booking'
      if (response.ok) {
        setBands(
          bands.map((band) =>
            band.bands_id === bands.bands_id ? { ...band, name, date } : band
          )
        );
      } else {
        console.error("Failed to update band.");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${bands.bands_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${bands.bands_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Bands</h4>
              <button type="button" className="close" data-dismiss="modal" onClick={() => setNameAndDate(bands.name, bands.date)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <input
                type="text"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={updateNameAndDate}>
                Update
              </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBands;
