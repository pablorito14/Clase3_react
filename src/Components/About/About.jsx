import './About.css';


const About = ({user}) => {
  return(
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-4">
          <img src="{user.img}" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{user.name} {user.lasname}</h5>
            <p className="card-text">Edad: {user.age}</p>
            <p className="card-text">
              <small className="text-body-secondary">Te gusta el css? {user.likeCSS ? 'Si': 'No'}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { About }