import React from 'react'

const Appointment = () => {
  return (
    <div className="appointment-page">

      <div className="appointment-container">

        <h1>Book an Appointment</h1>

        <p className="appointment-subtitle">
          Choose a doctor, date and time for your consultation.
        </p>

        <div className="appointment-form">

          <label>Doctor</label>
          <select>
            <option>Select Doctor</option>
            <option>Dr. Richard James</option>
            <option>Dr. Emily Watson</option>
            <option>Dr. Michael Brown</option>
            <option>Dr. Sarah Wilson</option>
          </select>

          <label>Date</label>
          <input type="date" />

          <label>Time</label>
          <input type="time" />

          <button>Confirm Appointment</button>

        </div>

      </div>

    </div>
  )
}

export default Appointment