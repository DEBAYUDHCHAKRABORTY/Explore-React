function Click(){
    function handleButton(){
        console.log("Hello World");
    };

    return(
        <div>
            <button onClick={handleButton}>Click Me!</button>
        </div>
    )
}
export default Click;