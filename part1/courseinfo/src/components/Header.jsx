const Header = (props) =>{
    return(
        <div>
            <h1>
                Welcome to the course
                <br/>
                {props.course}
            </h1>
        </div>
    )
}

export default Header
