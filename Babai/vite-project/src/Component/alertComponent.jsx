export default function Alert() {
    function handleClick() {
        alert('Hello World');
    }

    return (
        <>
            <button onClick={handleClick}>Click me</button>
        </>
    );
}