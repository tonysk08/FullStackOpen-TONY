const Total = (props) =>{

    const exercises = props.exercises

    return(
        <div>
            <p>
                <b>Number of exercises:</b> {exercises[0]+exercises[1]+exercises[2]}
            </p>
        </div>
    )
}

export default Total

