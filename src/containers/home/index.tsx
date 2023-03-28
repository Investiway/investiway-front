import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../stores/store';
import { decrement, increment } from '../../stores/counter';
import { Button } from '@mui/material'
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
            <div className="tw-flex tw-space-x-4 tw-justify-center tw-text-center">
            <Button
                className="tw-p-2 tw-bg-blue-300 tw-rounded-lg"
                variant="contained"
                onClick={
                    () => dispatch(increment())
                }
            >
                Increment
            </Button>
            <Button
                className="tw-p-2 tw-bg-red-300 tw-rounded-lg"
                variant="outlined"
                onClick={
                    () => dispatch(decrement())
                }
            >
                Decrement
            </Button>
            </div>
        </div>
    );
}
export default MyComponent

