function Con(){
    function greet(){
        console.log("good morning")
        alert("good morning")
    }
    return (
        <div>
            <button onClick={greet}>submit</button>
        </div>
    )
}
 
export default Con;