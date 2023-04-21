import React, {Fragment, useState} from 'react'

const InputBands = () => {

const [name, setName] = useState('name')
const [date, setDate] = useState('date')

const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
        const body = { name, date };
        const response = await fetch('http://localhost:4000/bands', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        window.location = '/'  //refreshes page when new data is added so that new data is shown
    } catch (error) {
        console.error(error.message); 
    }
};


    return (
    <Fragment>
        <h1 className='text-center mt-5'>Submit Bands for Booking</h1>
        <form className='d-flex mt-5' onSubmit={onSubmitForm}>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
        <br />
        <input text='text' className='form-control' value={date} onChange={(e) => setDate(e.target.value)}/>
        <button className='btn btn-success'>Add</button>
        </form>
    </Fragment>
    ) 
}

export default InputBands;