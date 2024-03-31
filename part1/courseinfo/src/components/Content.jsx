import Part from "./Part"

const Content = (props) => {

    console.log(props.values);
    //console.log(props.values.length);

    const content = props.values

    return(
        <div>
            <Part part = {content[0].tittle} tests = {content[0].tests}/>
            <Part part = {content[1].tittle} tests = {content[1].tests}/>
            <Part part = {content[2].tittle} tests = {content[2].tests}/>
        </div>
    )
}

export default Content

