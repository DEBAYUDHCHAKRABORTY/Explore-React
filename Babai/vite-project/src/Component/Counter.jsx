

function Counter3() {

    function handleClick() {
        console.log("2+2=4")
    };
    return (
        <div>
            <h1>Counter Component</h1>
            <button onClick={handleClick}>Button</button>
        </div>
    );
}
export default Counter3;