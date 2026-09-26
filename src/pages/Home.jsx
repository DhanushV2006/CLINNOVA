import SpecialityCard from '../components/SpecialityCard'
import specialities from '../data/specialities'

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
                    <div className="doctor-card">
                        <div className="doctor-image"></div>
                        <p className="doctor-status">Available</p>
                        <h3>Dr. Ananya Sharma</h3>
                        <p>General Physician</p>
                    </div>

                    <div className="doctor-card">
                        <div className="doctor-image"></div>
                        <p className="doctor-status">Available</p>
                        <h3>Dr. Rahul Mehta</h3>
                        <p>Dermatologist</p>
                    </div>

                    <div className="doctor-card">
                        <div className="doctor-image"></div>
                        <p className="doctor-status">Available</p>
                        <h3>Dr. Priya Nair</h3>
                        <p>Gynecologist</p>
                    </div>

                    <div className="doctor-card">
                        <div className="doctor-image"></div>
                        <p className="doctor-status">Available</p>
                        <h3>Dr. Arjun Rao</h3>
                        <p>Neurologist</p>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Home