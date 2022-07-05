const Header = ({name}) =>{
    return(<h2>{name}</h2>);
}
  
const Content = ({parts}) =>{
    return(
        <>
        {
            parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} />)
        }
        {/* <Part part={parts[0].name} exercises={parts[0].exercises} />
        <Part part={parts[1].name} exercises={parts[1].exercises} />
        <Part part={parts[2].name} exercises={parts[2].exercises} /> */}
        </>
    );
}
  
const Part = ({name, exercises}) =>{
    return(
        <p>
            {name} {exercises}
        </p>
    );
}
  
const Total = ({parts}) =>{
    let total = parts.reduce((pre, part) => pre + part.exercises, 0);
    return(
        <p><strong>Number of exercises {total}</strong></p>
    );
}

export const Course = ({course}) =>{
    return(
      <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
}   