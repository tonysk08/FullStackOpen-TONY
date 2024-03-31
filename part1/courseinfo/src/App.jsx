import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = 'Half Stack application development'

  const values = [
    { tittle: 'Fundamentals of React',    tests: 10 },
    { tittle: 'Using props to pass data', tests: 7  },
    { tittle: 'State of a component',     tests: 14 }
  ]

  return (
    <div>

      <Header course={course}/>

      <Content values={values}/>

      <Total total1={values[0].tests} total2={values[1].tests} total3={values[2].tests}/>
    </div>
  )
}

export default App
