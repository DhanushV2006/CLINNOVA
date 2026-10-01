import { useState } from 'react'
import DoctorCard from '../components/DoctorCard'
import doctors from '../data/doctors'

function Doctors() {

    const [selectedSpeciality, setSelectedSpeciality] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")

    const filteredDoctors = doctors.filter((doctor) => {

        const matchesSpeciality =
            selectedSpeciality === "All" ||
            doctor.speciality === selectedSpeciality

        const matchesSearch =
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase())

        return matchesSpeciality && matchesSearch
    })

    return (
        <main className="doctors-page">

            <h1>Find Doctors</h1>

            <p>
                Browse verified doctors and find the right specialist for you.
            </p>

            {/* Search Doctor */}
            <div className="doctor-search">

                <input
                    type="text"
                    placeholder="Search doctor by name..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />

            </div>

            <div className="doctors-page-content">

                {/* Speciality Filter */}
                <aside className="speciality-filter">

                    <h3>Filter by Speciality</h3>

                    <button
                        className={
                            selectedSpeciality === "All"
                                ? "active-filter"
                                : ""
                        }
                        onClick={() => setSelectedSpeciality("All")}
                    >
                        All Doctors
                    </button>

                    <button
                        className={
                            selectedSpeciality === "General Physician"
                                ? "active-filter"
                                : ""
                        }
                        onClick={() =>
                            setSelectedSpeciality("General Physician")
                        }
                    >
                        General Physician
                    </button>

                    <button
                        className={
                            selectedSpeciality === "Gynecologist"
                                ? "active-filter"
                                : ""
                        }
                        onClick={() =>
                            setSelectedSpeciality("Gynecologist")
                        }
                    >
                        Gynecologist
                    </button>

                    <button
                        className={
                            selectedSpeciality === "Dermatologist"
                                ? "active-filter"
                                : ""
                        }
                        onClick={() =>
                            setSelectedSpeciality("Dermatologist")
                        }
                    >
                        Dermatologist
                    </button>

                    <button
                        className={
                            selectedSpeciality === "Pediatrician"
                                ? "active-filter"
                                : ""
                        }
                        onClick={() =>
                            setSelectedSpeciality("Pediatrician")
                        }
                    >
                        Pediatrician
                    </button>

                    <button
                        className={
                            selectedSpeciality === "Neurologist"
                                ? "active-filter"
                                : ""
                        }
                        onClick={() =>
                            setSelectedSpeciality("Neurologist")
                        }
                    >
                        Neurologist
                    </button>

                    <button
                        className={
                            selectedSpeciality === "Gastroenterologist"
                                ? "active-filter"
                                : ""
                        }
                        onClick={() =>
                            setSelectedSpeciality("Gastroenterologist")
                        }
                    >
                        Gastroenterologist
                    </button>

                </aside>

                {/* Doctors */}
                <div className="doctors-grid">

                    {filteredDoctors.length > 0 ? (

                        filteredDoctors.map((doctor) => {

                            return (
                                <DoctorCard
                                    key={doctor.name}
                                    name={doctor.name}
                                    speciality={doctor.speciality}
                                    image={doctor.image}
                                />
                            )

                        })

                    ) : (

                        <div className="no-doctors">

                            <h3>No doctors found</h3>

                            <p>
                                Try searching with a different name or
                                speciality.
                            </p>

                        </div>

                    )}

                </div>

            </div>

        </main>
    )
}

export default Doctors