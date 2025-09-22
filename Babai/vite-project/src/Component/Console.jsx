export default function NewAlert() {

    function handleClick() {

        console.log("Hello World")
        alert("Hello World")
    }
    return (
        <div>
            <button onClick={handleClick}>click me</button>
        </div>
    )

};
