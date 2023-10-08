import { NavLink } from "react-router-dom";

function People(props: any) {

  return (
    <>
      <h1>People</h1>
      <div className="list-container">
        <ul>
          {props.people.map((people: any, index: number) => (
            <NavLink
              key={people.name}
              to={`people/${index + 1}`}
              className={({ isActive }) => isActive ? 'activeClass' : ''}
            >
              {people.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  )
}

export default People;