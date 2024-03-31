const Total = (props) =>{
    return(
        <div>
            <p>
                <b>Number of exercises:</b> {props.total1 + props.total2 +props.total3}
            </p>
        </div>
    )
}

export default Total

