import * as React from 'react'
import request from '../../services/request'
import { useLoginByGoogleMutation } from '../../stores/api'
request.get('/getUser')
    .then(response => {})
    .catch()
    .finally(() => {})

const MyComponent = () => {
    const [ loginByGoogle, { data, isLoading }] = useLoginByGoogleMutation()
    function clickApi () {
        loginByGoogle('1').then(() => {
            console.log(data, isLoading)
        })
    }
    return (
        <div className="">
            <div>{isLoading ? 'loading' : ''}</div>
            <button onClick={clickApi}>click</button>
        </div>
    );
}
export default MyComponent

