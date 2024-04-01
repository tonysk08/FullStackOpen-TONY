import Part from "./Part"

const Content = (props) => {

    console.log(props.parts);

    const finalParts = props.parts

    return(
        <div>
            {
                finalParts.map(element => (
                    <Part tittle={element.name} exercise={element.exercises}/>
                ))
            }
        </div>
    )
}

export default Content

