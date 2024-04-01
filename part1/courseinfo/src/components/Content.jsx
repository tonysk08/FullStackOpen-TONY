import Part from "./Part"

const Content = (props) => {

    console.log(props);

    return(
        <div>
            <Part tittle={props.part1.name} exercises={props.part1.exercises}/>
            <Part tittle={props.part2.name} exercises={props.part2.exercises}/>
            <Part tittle={props.part3.name} exercises={props.part3.exercises}/>
        </div>
    )
}

export default Content

