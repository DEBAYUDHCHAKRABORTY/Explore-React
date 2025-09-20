function Button() {

        function handleClick() {
        console.log("3*6=18")
    };
    return (
        <button onClick={handleClick}>Click Me</button>
    );
}
export default Button;