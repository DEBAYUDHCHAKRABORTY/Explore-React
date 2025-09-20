function Alert(){
    function alertMe(){
        alert("hello")
    }
    return(
        <div>
            <button onClick={(alertMe)}> Click</button>
        </div>
    )
}
export default Alert;