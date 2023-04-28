import React, {Fragment, useState} from 'react'

const InputBands = () => {

const [name, setName] = useState('Enter band name')
const [date, setDate] = useState('Enter date touring')

const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
        const body = { name, date };
        const response = await fetch('https://batcity-back.herokuapp.com/bands', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        window.location = '/Booking'  //refreshes page when new data is added so that new data is shown
    } catch (error) {
        console.error(error.message); 
    }
};


    return (
<Fragment>
    <br />
  <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card p-5">
      <h1 className="text-center mb-4">Submit Bands for Booking</h1>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  </div>
</Fragment>



    
    ) 
}

export default InputBands;