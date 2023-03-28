import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../stores/store';
import { increment } from '../../stores/counter';
interface MyComponentProps {
    name: string;
    age: number;
}
const MyComponent = ({ name, age }:MyComponentProps) => {
    const counter = useSelector((state:AppState) => state.counter.value);
    const dispatch = useDispatch()
    return (
        <div className="tw-text-center">
            <p className="tw-font-bold">{counter}</p>
            <button
                className="tw-p-2 tw-bg-blue-300 tw-rounded-lg"
                onClick={
                    () => dispatch(increment())
                }
            >
                Increment
            </button>
        </div>
    );
}
export default MyComponent

