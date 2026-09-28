function ApplicationStatus(){
    return(
        <main className="application-status">
            <div className="status-card">
                <h1>Application Submitted</h1>

                <p>
                    Your doctor registration application has been submitted successfully.
                </p>

                <div className="status-box">
                    <span>Application Status</span>
                    <strong>Under Review</strong>
                </div>

                <p>
                    Our admin team will review your professional details and medical
                    license information.
                </p>
            </div>
        </main>
    )
}

export default ApplicationStatus