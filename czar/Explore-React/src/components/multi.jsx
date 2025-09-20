function Multi(){

    function handleMulti(){
        console.log("3 * 6 = 18")
    }
    return(
        <div>
            <button onClick={handleMulti}>3 * 6 ?</button>
        </div>
    )
}

export default Multi;