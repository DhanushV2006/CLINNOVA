import { useState } from 'react'

function ApplicationStatus() {

    const [applicationId, setApplicationId] = useState('')
    const [status, setStatus] = useState(null)

    const checkStatus = (event) => {
        event.preventDefault()

        if (!applicationId.trim()) {
            alert('Please enter your application ID.')
            return
        }

        // Demo status for frontend MVP
        setStatus('Pending Verification')
    }

    return (
        <main className="application-status-page">

            <div className="application-status-container">

                <h1>Check Application Status</h1>

                <p>
                    Enter your doctor application ID to check
                    your verification status.
                </p>

                <form
                    className="application-status-form"
                    onSubmit={checkStatus}
                >

                    <label>Application ID</label>

                    <input
                        type="text"
                        placeholder="Example: CLN-1001"
                        value={applicationId}
                        onChange={(event) =>
                            setApplicationId(event.target.value)
                        }
                    />

                    <button type="submit">
                        Check Status
                    </button>

                </form>

                {status && (
                    <div className="status-result">

                        <h2>Application Found</h2>

                        <p>
                            <strong>Application ID:</strong>{' '}
                            {applicationId}
                        </p>

                        <p>
                            <strong>Status:</strong>{' '}
                            <span>{status}</span>
                        </p>

                        <p>
                            Your application is currently waiting
                            for admin verification.
                        </p>

                    </div>
                )}

            </div>

        </main>
    )
}

export default ApplicationStatus