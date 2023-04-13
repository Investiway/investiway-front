import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Button,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  InputLabel,
  MenuItem,
  TextareaAutosize,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { Goal } from '../../../utils/interfaces/goal';
import dayjs from 'dayjs';

interface propsGoadInterface {
  isOpen: boolean;
  goalEdit: Goal;
  handelEdit: Function;
  handleClose: Function;
}
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgColor: 'background.paper 10%',
  backdropFilter: 'blur(10px)',
  border: '1px solid #fff',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};
const AddGoal = ({ isOpen, goalEdit, handleClose }: propsGoadInterface) => {
  const [type, setType] = useState('');
  const [goal, setGoal] = useState({
    title: '',
    type: 'Shopping',
    date: dayjs(Date.now()),
    priority: 'High',
    description: '',
    savingGoal: '',
  } as Goal);
  // console.log(goal);
  useEffect(() => {
    setGoal((prevState) => {
      return {
        ...prevState,
        ...goalEdit,
      };
    });
  }, [isOpen]);
  const changeType = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };
  const changeDate = (value: any) => {
    setGoal((prevState) => {
      return {
        ...prevState,
        date: value,
      };
    });
  };
  return (
    <Modal
      open={isOpen}
      onClose={() => handleClose()}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 600 }} className="tw-flex tw-flex-col tw-space-y-4">
        <h2 className="tw-text-xl tw-text-gray-300 tw-font-bold">Create goal</h2>
        <TextField value={goal.title} placeholder="Goal name" />
        <TextField value={goal.savingGoal} placeholder="Saving goal" />
        <FormControl>
          <FormLabel>Priority</FormLabel>
          <RadioGroup
            value={goal.priority}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="High"
            name="radio-buttons-group"
            className="tw-flex !tw-flex-row tw-space-x-4 tw-text-gray-300"
          >
            <FormControlLabel value="High" control={<Radio />} label="High" />
            <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="Low" control={<Radio />} label="Low" />
          </RadioGroup>
        </FormControl>
        <div className="tw-flex tw-space-x-4">
          <FormControl className="tw-flex-1">
            <InputLabel id="type-select-label-create">Select type</InputLabel>
            <Select
              labelId="type-select-label-create"
              id="select-label-create"
              className="tw-w-full"
              value={goal.type}
              defaultValue={goal.type}
              label="Select type"
              onChange={changeType}
            >
              <MenuItem value={'Shopping'}>Ten</MenuItem>
              <MenuItem value={'20'}>Twenty</MenuItem>
              <MenuItem value={'30'}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider labelId="datetime-label" dateAdapter={AdapterDayjs}>
            <DatePicker
              value={goal.date}
              label="Date goal"
              defaultValue={goal.date}
              className="tw-flex-1"
              onChange={(value: any) => changeDate(value)}
            />
          </LocalizationProvider>
        </div>
        <TextareaAutosize
          value={goal.description}
          placeholder="Description..."
          minRows={4}
          className="tw-bg-transparent tw-rounded-lg tw-p-4 tw-text-gray-300 tw-border tw-border-gray-300"
        />
        <Box className="tw-space-x-4 tw-text-right">
          <Button onClick={() => handleClose()} className="">
            Cancel
          </Button>
          <Button variant="contained" onClick={() => handleClose()} className="">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default AddGoal;
