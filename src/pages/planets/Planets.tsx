import { NavLink } from "react-router-dom";

function Planets(props: any) {
  return (
    <>
      <h1>Planets</h1>
      <div className="list-container">
        <ul>
          {props.planets.map((planet: any, index: number) => (
            <NavLink
              to={`planets/${index + 1}`}
              key={planet.name}
              className={({ isActive }) => isActive ? 'activeClass' : ''}
            >
              {planet.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Planets;