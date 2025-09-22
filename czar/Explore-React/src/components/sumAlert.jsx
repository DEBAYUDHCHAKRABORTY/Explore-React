function Plus(){

    function handlePlus(){
        alert("2+2=4")
    }
    return(
        <div>
            <button onClick={handlePlus}>SUM ALERT</button>
        </div>
    )
}

export default Plus;