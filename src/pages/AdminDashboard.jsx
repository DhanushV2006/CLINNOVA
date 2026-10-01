import { useState } from 'react'

function AdminDashboard() {

    const [applications, setApplications] = useState([
        {
            id: 'CLN-1001',
            name: 'Dr. Ananya Sharma',
            speciality: 'Gynecologist',
            email: 'ananya@example.com',
            experience: '8',
            status: 'Pending'
        },
        {
            id: 'CLN-1002',
            name: 'Dr. Rahul Mehta',
            speciality: 'Dermatologist',
            email: 'rahul@example.com',
            experience: '5',
            status: 'Pending'
        },
        {
            id: 'CLN-1003',
            name: 'Dr. Priya Nair',
            speciality: 'Pediatrician',
            email: 'priya@example.com',
            experience: '10',
            status: 'Pending'
        }
    ])

    const updateStatus = (id, newStatus) => {

        setApplications(
            applications.map((application) =>
                application.id === id
                    ? {
                        ...application,
                        status: newStatus
                    }
                    : application
            )
        )
    }

    return (
        <main className="admin-dashboard">

            <div className="admin-header">

                <div>
                    <h1>Admin Dashboard</h1>

                    <p>
                        Manage doctor applications and verification.
                    </p>
                </div>

                <div className="admin-badge">
                    ADMIN
                </div>

            </div>

            <div className="admin-stats">

                <div className="admin-stat-card">
                    <h3>{applications.length}</h3>
                    <p>Total Applications</p>
                </div>

                <div className="admin-stat-card">
                    <h3>
                        {
                            applications.filter(
                                (application) =>
                                    application.status === 'Pending'
                            ).length
                        }
                    </h3>
                    <p>Pending</p>
                </div>

                <div className="admin-stat-card">
                    <h3>
                        {
                            applications.filter(
                                (application) =>
                                    application.status === 'Approved'
                            ).length
                        }
                    </h3>
                    <p>Approved</p>
                </div>

                <div className="admin-stat-card">
                    <h3>
                        {
                            applications.filter(
                                (application) =>
                                    application.status === 'Rejected'
                            ).length
                        }
                    </h3>
                    <p>Rejected</p>
                </div>

            </div>

            <div className="applications-section">

                <h2>Doctor Applications</h2>

                <div className="applications-list">

                    {applications.map((application) => (

                        <div
                            className="application-card"
                            key={application.id}
                        >

                            <div className="application-info">

                                <div className="application-title">

                                    <h3>
                                        {application.name}
                                    </h3>

                                    {application.status === 'Approved' && (
                                        <span className="verified-badge">
                                            ✓ Verified
                                        </span>
                                    )}

                                </div>

                                <p>
                                    <strong>Application ID:</strong>{' '}
                                    {application.id}
                                </p>

                                <p>
                                    <strong>Speciality:</strong>{' '}
                                    {application.speciality}
                                </p>

                                <p>
                                    <strong>Email:</strong>{' '}
                                    {application.email}
                                </p>

                                <p>
                                    <strong>Experience:</strong>{' '}
                                    {application.experience} years
                                </p>

                                <p>
                                    <strong>Status:</strong>{' '}
                                    <span
                                        className={`application-status ${application.status.toLowerCase()}`}
                                    >
                                        {application.status}
                                    </span>
                                </p>

                            </div>

                            <div className="application-actions">

                                {application.status === 'Pending' && (
                                    <>
                                        <button
                                            className="approve-button"
                                            onClick={() =>
                                                updateStatus(
                                                    application.id,
                                                    'Approved'
                                                )
                                            }
                                        >
                                            Approve
                                        </button>

                                        <button
                                            className="reject-button"
                                            onClick={() =>
                                                updateStatus(
                                                    application.id,
                                                    'Rejected'
                                                )
                                            }
                                        >
                                            Reject
                                        </button>
                                    </>
                                )}

                                {application.status === 'Approved' && (
                                    <button
                                        className="reset-button"
                                        onClick={() =>
                                            updateStatus(
                                                application.id,
                                                'Pending'
                                            )
                                        }
                                    >
                                        Reset
                                    </button>
                                )}

                                {application.status === 'Rejected' && (
                                    <button
                                        className="reset-button"
                                        onClick={() =>
                                            updateStatus(
                                                application.id,
                                                'Pending'
                                            )
                                        }
                                    >
                                        Review Again
                                    </button>
                                )}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </main>
    )
}

export default AdminDashboard