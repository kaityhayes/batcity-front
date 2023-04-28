import React from 'react';
import InputBands from '../components/InputBands';
import ListBands from '../components/ListBands';

function Booking() {
  return (
    <div className="container">
      {/* <h1 className="my-4">Booking</h1> */}
      <div className="row">
        <div className="col-md-6">
          <InputBands />
        </div><br />
        <div className="col-md-6">
          <ListBands />
        </div>
      </div>
    </div>
  );
};

export { Booking };
