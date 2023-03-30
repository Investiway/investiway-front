import * as React from 'react'
import request from '../../services/request'
import { useLoginByGoogleMutation } from '../../stores/api'
import {Container} from "@mui/material";
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
        <Container className="tw-p-4">

        </Container>
    );
}
export default MyComponent

