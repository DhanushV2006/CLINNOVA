function SpecialityCard({name,image}){
    return(
        <div className="speciality-card">
            <img src={image} alt={name}/>
            <p>{name}</p>
        </div>
    )
}

export default SpecialityCard