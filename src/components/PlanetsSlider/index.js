import Slider from 'react-slick'

import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
  }

  return (
    <div className="planets-slider-container" data-testid="planets">
      <h1 className="planets-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem planet={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
