import {useState} from "react";
const Heading = ()=>{
    const [count , setCount] = useState(1);
return (
    <div>
        <button
        onClick={() =>{
            setCount(count + 1);
        }}>
            {""}
            +
            {""}
        </button>
        <button
        onClick={() =>{
            setCount(count - 1);
        }}>
            {""}
            -
            {""}
        </button>
        <p>Current Number is {count}</p>
    </div>
    
);
};
export default Heading ; 