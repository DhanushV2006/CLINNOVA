import { useState } from 'react'
import DoctorCard from '../components/DoctorCard'
import doctors from '../data/doctors'

function Doctors(){
    const [selectedSpeciality,setSelectedSpeciality] = useState("All")

    const filteredDoctors = selectedSpeciality === "All"
        ? doctors
        : doctors.filter((doctor)=>{
            return doctor.speciality === selectedSpeciality
        })

    return(
        <main className="doctors-page">
            <h1>Find Doctors</h1>

            <p>
                Browse verified doctors and find the right specialist for you.
            </p>

            <div className="doctors-page-content">

                <aside className="speciality-filter">
                    <h3>Filter by Speciality</h3>

                    <button
                        className={selectedSpeciality === "All" ? "active-filter" : ""}
                        onClick={()=>setSelectedSpeciality("All")}
                    >
                        All Doctors
                    </button>

                    <button
                        className={selectedSpeciality === "General Physician" ? "active-filter" : ""}
                        onClick={()=>setSelectedSpeciality("General Physician")}
                    >
                        General Physician
                    </button>

                    <button
                        className={selectedSpeciality === "Gynecologist" ? "active-filter" : ""}
                        onClick={()=>setSelectedSpeciality("Gynecologist")}
                    >
                        Gynecologist
                    </button>

                    <button
                        className={selectedSpeciality === "Dermatologist" ? "active-filter" : ""}
                        onClick={()=>setSelectedSpeciality("Dermatologist")}
                    >
                        Dermatologist
                    </button>

                    <button
                        className={selectedSpeciality === "Pediatrician" ? "active-filter" : ""}
                        onClick={()=>setSelectedSpeciality("Pediatrician")}
                    >
                        Pediatrician
                    </button>

                    <button
                        className={selectedSpeciality === "Neurologist" ? "active-filter" : ""}
                        onClick={()=>setSelectedSpeciality("Neurologist")}
                    >
                        Neurologist
                    </button>

                    <button
                        className={selectedSpeciality === "Gastroenterologist" ? "active-filter" : ""}
                        onClick={()=>setSelectedSpeciality("Gastroenterologist")}
                    >
                        Gastroenterologist
                    </button>
                </aside>

                <div className="doctors-grid">
                    {filteredDoctors.map((doctor)=>{
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

            </div>
        </main>
    )
}

export default Doctors