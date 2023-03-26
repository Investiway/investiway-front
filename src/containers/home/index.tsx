import React from 'react'

interface MyComponentProps {
    name: string;
    age: number;
}
const MyComponent = ({ name, age }:MyComponentProps) => {
    // const [count, setCount] = useState(0);
    // const increaseCount = () => {
        // setCount(prevCount => prevCount + 1)
    // }
    return (
        <div>
            Home
        </div>
    );
}
export default MyComponent

