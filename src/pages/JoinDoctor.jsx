import { useState } from 'react'

function JoinDoctor(){
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        speciality:"",
        qualification:"",
        experience:"",
        license:""
    })

    const handleChange = (event)=>{
        const {name,value} = event.target

        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (event)=>{
    event.preventDefault()

    console.log(formData)

    window.location.href = "/application-status"
}

    return(
        <main className="join-doctor">
            <h1>Join CLINNOVA as a Doctor</h1>

            <p>
                Submit your professional details to join CLINNOVA.
            </p>

            <form className="doctor-form" onSubmit={handleSubmit}>

                <div>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div>
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                    />
                </div>

                <div>
                    <label>Speciality</label>
                    <select
                        name="speciality"
                        value={formData.speciality}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select speciality</option>
                        <option>General Physician</option>
                        <option>Gynecologist</option>
                        <option>Dermatologist</option>
                        <option>Pediatrician</option>
                        <option>Neurologist</option>
                        <option>Gastroenterologist</option>
                    </select>
                </div>

                <div>
                    <label>Qualification</label>
                    <input
                        type="text"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        placeholder="Example: MBBS, MD"
                        required
                    />
                </div>

                <div>
                    <label>Years of Experience</label>
                    <input
                        type="number"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="Enter years of experience"
                        required
                    />
                </div>

                <div>
                    <label>Medical License Number</label>
                    <input
                        type="text"
                        name="license"
                        value={formData.license}
                        onChange={handleChange}
                        placeholder="Enter license number"
                        required
                    />
                </div>

                <div>
                    <label>Upload License Document</label>
                    <input
                        type="file"
                        required
                    />
                </div>

                <button type="submit">
                    Submit Application
                </button>

            </form>
        </main>
    )
}

export default JoinDoctor