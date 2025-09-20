function Greet(){
    function handleClick(){
        console.log("hello")
    }

    return(
        <button onClick={(handleClick)}>Click</button>
    )
}
export default Greet;