function newComponent() {
    function handleClick() {
        alert("2+2=4!")
    };

    return (
        <button onClick={handleClick}>New Alert</button>
    );
}
export default newComponent;