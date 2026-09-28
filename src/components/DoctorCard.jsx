import { useNavigate } from 'react-router-dom'

const DoctorCard = ({ image, name, speciality }) => {

  const navigate = useNavigate()

  return (
    <div className="doctor-card">

      <div className="doctor-image">
        <img src={image} alt={name} />
      </div>

      <div className="doctor-info">
        <h3>{name}</h3>

        <p>{speciality}</p>

        <button onClick={() => navigate('/appointment')}>
          Book Appointment
        </button>
      </div>

    </div>
  )
}

export default DoctorCard