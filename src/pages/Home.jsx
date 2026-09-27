import SpecialityCard from '../components/SpecialityCard'
import specialities from '../data/specialities'
import DoctorCard from '../components/DoctorCard'
import doctors from '../data/doctors'

function Home(){
    return(
        <main className="home">
            <div className="home-content">
                <h1>Find the Right Doctor for You</h1>
                <p>
                    Book appointments with verified doctors through CLINNOVA.
                </p>
                <button>Book Appointment</button>
            </div>

            <section className="speciality-section">
                <h2>Find by Speciality</h2>
                <p>
                    Choose a speciality to find the right doctor for your needs.
                </p>
                <div className="speciality-list">
                    {specialities.map((speciality)=>{
                        return(
                            <SpecialityCard
                                key={speciality.name}
                                name={speciality.name}
                                image={speciality.image}
                            />
                        )
                    })}
                </div>
            </section>

            <section className="doctors-section">
                <h2>Top Doctors to Book</h2>
                <p>
                    Connect with verified doctors available for appointments.
                </p>
                <div className="doctor-list">
                    {doctors.map((doctor)=>{
                        return(
                            <DoctorCard
                                key={doctor.name}
                                name={doctor.name}
                                speciality={doctor.speciality}
                                image={doctor.image}
                            />
                        )
                    })}
                </div>
            </section>

            <section className="appointment-section">
                <div className="appointment-content">
                <h2>Book Your Appointment Today</h2>
            <p>
            Find a verified doctor and take the next step towards better healthcare.
            </p>
                <button>Find a Doctor</button>
            </div>
        </section>
        </main>
    )
}

export default Home