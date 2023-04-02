import React, { useState } from 'react'
import {Container, Typography, MenuItem, InputLabel, Box, FormControl} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ReactComponent as PlusIcon } from "../../assets/icons/svg/plus.svg";
import { DateTimePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Goal = () => {
    const [type, setType] = useState('')
    const changeType = (event: SelectChangeEvent) => {
        setType(event.target.value)
    }
    return (
        <Container className="tw-p-4">
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
                                <DateTimePicker />
                            </LocalizationProvider>
                        </div>
                    </FormControl>
                </Box>
                <div></div>
            </div>
            <div className="tw-grid tw-grid-cols-4 tw-grid-rows-2 tw-gap-4">
                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-border tw-border-gray-600 tw-duration-300 hover:tw-border-gray-300 tw-cursor-pointer tw-rounded-2xl tw-min-w-[220px] tw-min-h-[220px]">
                    <PlusIcon className="tw-text-gray-600 tw-mx-auto"/>
                    <Typography variant="h5" className="tw-text-center tw-text-gray-600">Add goal</Typography>
                </div>
                <div className="tw-group tw-border tw-border-amber-300 tw-rounded-2xl tw-duration-300 tw-transform tw-cursor-pointer tw-min-w-[220px] tw-min-h-[220px]">
                    <div className="tw-h-4 tw-w-1/2 tw-rounded-br-2xl tw-rounded-tl-xl tw-bg-amber-300" />
                    <div className="tw-p-4">
                        <Typography variant="h5">Title</Typography>
                        <div className="tw-mt-4">
                            <span>dd/mm/yyyy</span>
                            <Typography variant="h5">XXX.XXX.XXX</Typography>
                        </div>
                    </div>
                    <div className="tw-p-4 tw-duration-300 tw-border-t-amber-300 tw-border-t">
                        descriptions
                    </div>
                </div>
                <div className="tw-group tw-border tw-border-amber-300 tw-rounded-2xl tw-duration-300 tw-transform tw-cursor-pointer tw-min-w-[220px] tw-min-h-[220px]">
                    <div className="tw-h-4 tw-w-1/2 tw-rounded-br-2xl tw-rounded-tl-xl tw-bg-amber-300" />
                    <div className="tw-p-4">
                        <Typography variant="h5">Title</Typography>
                        <div className="tw-mt-4">
                            <span>dd/mm/yyyy</span>
                            <Typography variant="h5">XXX.XXX.XXX</Typography>
                        </div>
                    </div>
                    <div className="tw-p-4 tw-duration-300 tw-border-t-amber-300 tw-border-t">
                        descriptions
                    </div>
                </div>
                <div className="tw-group tw-border tw-border-amber-300 tw-rounded-2xl tw-duration-300 tw-transform tw-cursor-pointer tw-min-w-[220px] tw-min-h-[220px]">
                    <div className="tw-h-4 tw-w-1/2 tw-rounded-br-2xl tw-rounded-tl-xl tw-bg-amber-300" />
                    <div className="tw-p-4">
                        <Typography variant="h5">Title</Typography>
                        <div className="tw-mt-4">
                            <span>dd/mm/yyyy</span>
                            <Typography variant="h5">XXX.XXX.XXX</Typography>
                        </div>
                    </div>
                    <div className="tw-p-4 tw-duration-300 tw-border-t-amber-300 tw-border-t">
                        descriptions
                    </div>
                </div>
                <div className="tw-group tw-border tw-border-amber-300 tw-rounded-2xl tw-duration-300 tw-transform tw-cursor-pointer tw-min-w-[220px] tw-min-h-[220px]">
                    <div className="tw-h-4 tw-w-1/2 tw-rounded-br-2xl tw-rounded-tl-xl tw-bg-amber-300" />
                    <div className="tw-p-4">
                        <Typography variant="h5">Title</Typography>
                        <div className="tw-mt-4">
                            <span>dd/mm/yyyy</span>
                            <Typography variant="h5">XXX.XXX.XXX</Typography>
                        </div>
                    </div>
                    <div className="tw-p-4 tw-duration-300 tw-border-t-amber-300 tw-border-t">
                        descriptions
                    </div>
                </div>
                <div className="tw-group tw-border tw-border-amber-300 tw-rounded-2xl tw-duration-300 tw-transform tw-cursor-pointer tw-min-w-[220px] tw-min-h-[220px]">
                    <div className="tw-h-4 tw-w-1/2 tw-rounded-br-2xl tw-rounded-tl-xl tw-bg-amber-300" />
                    <div className="tw-p-4">
                        <Typography variant="h5">Title</Typography>
                        <div className="tw-mt-4">
                            <span>dd/mm/yyyy</span>
                            <Typography variant="h5">XXX.XXX.XXX</Typography>
                        </div>
                    </div>
                    <div className="tw-p-4 tw-duration-300 tw-border-t-amber-300 tw-border-t">
                        descriptions
                    </div>
                </div>
                <div className="tw-group tw-border tw-border-amber-300 tw-rounded-2xl tw-duration-300 tw-transform tw-cursor-pointer tw-min-w-[220px] tw-min-h-[220px]">
                    <div className="tw-h-4 tw-w-1/2 tw-rounded-br-2xl tw-rounded-tl-xl tw-bg-amber-300" />
                    <div className="tw-p-4">
                        <Typography variant="h5">Title</Typography>
                        <div className="tw-mt-4">
                            <span>dd/mm/yyyy</span>
                            <Typography variant="h5">XXX.XXX.XXX</Typography>
                        </div>
                    </div>
                    <div className="tw-p-4 tw-duration-300 tw-border-t-amber-300 tw-border-t">
                        descriptions
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Goal