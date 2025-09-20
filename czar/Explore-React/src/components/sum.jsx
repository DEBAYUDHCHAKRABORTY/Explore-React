function Sum(){
    function handleSum(){
        console.log("2+2=4")
    };

    return(
        <div>
            <button onClick={handleSum}>2 + 2 = ?</button>
        </div>
    )
}
export default Sum;