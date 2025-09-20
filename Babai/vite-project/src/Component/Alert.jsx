function Alert() {
    function handleButton() {
        alert("Hello World");
    }

    return (
        <div>
            <h1> This is an alert</h1>  
            <button onClick={handleButton}>Click me</button>
        </div>
    );
}
export default Alert;