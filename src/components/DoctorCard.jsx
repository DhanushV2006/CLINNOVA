function DoctorCard({name,speciality,image}){

    return(
        <div className="doctor-card">

            <div className="doctor-image">
                <img src={image} alt={name}/>
            </div>

            <p className="doctor-status">Available</p>

            <h3>{name}</h3>

            <p>{speciality}</p>

        </div>
    )
}

export default DoctorCard