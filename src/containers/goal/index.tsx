import React, { useState } from 'react'
import {Container, Typography, MenuItem, InputLabel, Box, FormControl, TextField, Button} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Add, HorizontalRuleOutlined } from "@mui/icons-material";
import AddGoal from "./components/addGoal";

const Goal = () => {
    const [type, setType] = useState('')
    const [showModal, setShowModal] = useState(false)
    const enableModel = () => {
        setShowModal(true)
    }
    const closeModel = () => {
        setShowModal(false)
    }
    const changeType = (event: SelectChangeEvent) => {
        setType(event.target.value)
    }
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const goalItem = () => {
        return arr.map(item => (
                <div className="
                    tw-group tw-relative
                    tw-shadow-2xl tw-rounded-2xl
                    tw-duration-300 tw-transform
                    tw-cursor-pointer
                    tw-min-w-[220px] tw-min-h-[220px]
                    hover:tw-shadow-gray-900"
                >
                    <Button className="!tw-absolute tw-right-0">
                        <HorizontalRuleOutlined className="tw-text-white"/>
                    </Button>
                    <div className="tw-h-4 tw-w-1/2 tw-rounded-br-2xl tw-rounded-tl-xl tw-bg-opacity-70 tw-backdrop-blur-2xl tw-bg-amber-200" />
                    <div className="tw-p-4">
                        <Typography variant="h5">Title</Typography>
                        <div className="tw-mt-4">
                            <span>dd/mm/yyyy</span>
                            <Typography variant="h5">XXX.XXX.XXX</Typography>
                        </div>
                    </div>
                    <div className="tw-p-4 tw-duration-300">
                        descriptions
                    </div>
                </div>))
    }
    return (
        <Container className="tw-p-4">
            <AddGoal isOpen={showModal} handleClose={ closeModel } />
            <div className="tw-pb-4">
                <Box >
                    <FormControl className="!tw-flex-row tw-space-x-4">
                        <div>
                            <InputLabel id="type-select-label">Type</InputLabel>
                            <Select
                                labelId="type-select-label"
                                id="select-label"
                                className="tw-w-40"
                                value={type}
                                label="Type"
                                onChange={changeType}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>
                        <div>
                            <LocalizationProvider labelId="datetime-label" dateAdapter={AdapterDayjs}>
                                <DatePicker />
                            </LocalizationProvider>
                        </div>
                        <div>
                            <TextField label="Search" placeholder="Type keyword..."/>
                        </div>
                    </FormControl>
                </Box>
                <div></div>
            </div>
            <div className="tw-h-[calc(100vh-11rem)] tw-overflow-hidden">
                <div className="tw-grid tw-grid-cols-4 tw-gap-8 tw-overflow-y-auto tw-h-full tw-p-4 tw-rounded-xl tw-shadow-2xl">
                    <div
                        className="tw-flex tw-flex-col tw-shadow-2xl tw-items-center tw-justify-center tw-border tw-border-gray-600 tw-duration-300 hover:tw-border-gray-300 tw-cursor-pointer tw-rounded-2xl tw-min-w-[220px] tw-min-h-[220px]"
                        onClick={enableModel}
                    >
                        <Add className="tw-text-gray-600 tw-mx-auto"/>
                        <Typography variant="h5" className="tw-text-center tw-text-gray-600">Add goal</Typography>
                    </div>
                    {
                        goalItem()
                    }
                </div>
            </div>
        </Container>
    )
}
export default Goal