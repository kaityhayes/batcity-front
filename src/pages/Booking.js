import React from 'react';
import InputBands from '../components/InputBands';
import ListBands from '../components/ListBands';

function Booking() {
  return (
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-md-6 text-center">
          <InputBands />
        </div>
        <div className="col-md-6 text-center">
          <form>
            <div className="form-group">

            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <ListBands />
        </div>
      </div>
    </div>
  );
};

export { Booking };
