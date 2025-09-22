function Hello() {
    function handleClick(){
        console.log("Hello World")
    }
    return (
        <div> <button onClick={(handleClick) }> Off </button>
    

        </div>
    )
}

export default Hello;