import users1 from '../assets/users1.jpg'
import users2 from '../assets/users2.jpg'

let Carousel = () => {
    return(
        <>
<div id="carouselExampleIndicators" className="carousel slide h-[500px">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
  </div>
  <div className="carousel-inner h-[500px] w-screen">
    <div className="carousel-item active">
      <img src={users2} className="d-block w-100 h-[500px]" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={users1} className="d-block w-100 h-[500px]" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
    )
}

export default Carousel