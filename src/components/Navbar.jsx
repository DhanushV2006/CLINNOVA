function Navbar(){
    return(
        <nav className="navbar">
            <img src="/assets/clinnova-logo.png" alt="CLINNOVA" className="nav-logo"/>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/doctors">Doctors</a>
                <a href="/join-doctor">Join as Doctor</a>
            </div>
        </nav>
    )
}

export default Navbar