import Counter from "./New-component";

function HelloWorld() {

    function handleClick() {
        console.log("Hello World")
    };
    return (
        <button onClick={handleClick}>Hello World</button>

    )
};
export default HelloWorld;