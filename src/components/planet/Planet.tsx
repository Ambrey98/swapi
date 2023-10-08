import { useParams } from "react-router-dom";

function Planet(props: any) {
  const { id } = useParams();
  const currentPlanet = props.planets[Number(id) - 1];

  return (
    <>
    <h3>Name: {currentPlanet.name}</h3>
    <p><b>Diameter</b>: {currentPlanet.diameter}</p>
    <p><b>Climate</b>: {currentPlanet.climate}</p>
    </>
  )
}

export default Planet;