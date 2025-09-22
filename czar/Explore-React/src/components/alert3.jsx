function Alert3(){

    function handleBtn(){
        alert("Hello Alert")
        console.log("Hello Console")
    }
    return(
        <div>
            <button onClick={handleBtn}>console & alert</button>
        </div>
    )
}

export default Alert3;