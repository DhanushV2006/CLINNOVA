import { useState } from 'react'

const Appointment = () => {

  const [doctor, setDoctor] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!doctor || !date || !time) {
      alert('Please select a doctor, date and time.')
      return
    }

    alert(`Appointment booked with ${doctor} on ${date} at ${time}.`)
  }

  return (
    <div className="appointment-page">

      <div className="appointment-container">

        <h1>Book an Appointment</h1>

        <p className="appointment-subtitle">
          Choose a doctor, date and time for your consultation.
        </p>

        <form className="appointment-form" onSubmit={handleSubmit}>

          <label>Doctor</label>

          <select
            value={doctor}
            onChange={(event) => setDoctor(event.target.value)}
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Richard James">Dr. Richard James</option>
            <option value="Dr. Emily Watson">Dr. Emily Watson</option>
            <option value="Dr. Michael Brown">Dr. Michael Brown</option>
            <option value="Dr. Sarah Wilson">Dr. Sarah Wilson</option>
          </select>

          <label>Date</label>

          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />

          <label>Time</label>

          <input
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />

          <button type="submit">
            Confirm Appointment
          </button>

        </form>

      </div>

    </div>
  )
}

export default Appointment