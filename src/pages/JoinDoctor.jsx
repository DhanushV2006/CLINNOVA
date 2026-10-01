import { useState } from 'react'

function JoinDoctor() {

    const [submitted, setSubmitted] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        speciality: '',
        license: '',
        experience: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setSubmitted(true)
    }

    return (
        <main className="join-doctor-page">

            {!submitted ? (

                <div className="join-doctor-container">

                    <h1>Join CLINNOVA</h1>

                    <p>
                        Register as a doctor and connect with patients
                        through CLINNOVA.
                    </p>

                    <form
                        className="join-doctor-form"
                        onSubmit={handleSubmit}
                    >

                        <label>Full Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label>Phone Number</label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <label>Speciality</label>

                        <select
                            name="speciality"
                            value={formData.speciality}
                            onChange={handleChange}
                            required
                        >
                            <option value="">
                                Select speciality
                            </option>

                            <option value="General Physician">
                                General Physician
                            </option>

                            <option value="Gynecologist">
                                Gynecologist
                            </option>

                            <option value="Dermatologist">
                                Dermatologist
                            </option>

                            <option value="Pediatrician">
                                Pediatrician
                            </option>

                            <option value="Neurologist">
                                Neurologist
                            </option>

                            <option value="Gastroenterologist">
                                Gastroenterologist
                            </option>
                        </select>

                        <label>Medical License Number</label>

                        <input
                            type="text"
                            name="license"
                            placeholder="Enter license number"
                            value={formData.license}
                            onChange={handleChange}
                            required
                        />

                        <label>Years of Experience</label>

                        <input
                            type="number"
                            name="experience"
                            placeholder="Enter years of experience"
                            value={formData.experience}
                            onChange={handleChange}
                            min="0"
                            required
                        />

                        <button type="submit">
                            Submit Application
                        </button>

                    </form>

                </div>

            ) : (

                <div className="application-success">

                    <h1>Application Submitted!</h1>

                    <p>
                        Thank you, Dr. {formData.name}.
                    </p>

                    <p>
                        Your application has been submitted successfully
                        and is awaiting admin verification.
                    </p>

                    <p>
                        <strong>Status:</strong> Pending Verification
                    </p>

                </div>

            )}

        </main>
    )
}

export default JoinDoctor