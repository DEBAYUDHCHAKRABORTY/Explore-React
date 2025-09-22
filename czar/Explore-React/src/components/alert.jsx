function Alert(){

    function handleAlert(){
        alert("Hello World")
    };
    return(
        <div>
            <button onClick={handleAlert}>Alert !</button>
        </div>
    )
}

export default Alert;