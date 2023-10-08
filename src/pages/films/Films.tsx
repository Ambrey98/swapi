import { NavLink, Route } from "react-router-dom";

function Films(props: any) {
  return (
    <>
      <div className="list-container">
        <h1>Films</h1>
        <ul>
          {props.films.map((film: any, index: number) => (
            <NavLink
              key={film.title} 
              to={`films/${index + 1}`} 
              className={({isActive}) => isActive ? 'activeClass' : ''}
            >
              {film.title}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Films;