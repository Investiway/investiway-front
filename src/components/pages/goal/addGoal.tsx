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
import Select from '@mui/material/Select';
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
const AddGoal = ({ isOpen, goalEdit, handleClose, handelEdit }: propsGoadInterface) => {
  const [goal, setGoal] = useState({
    name: '',
    typeId: '',
    completeDate: dayjs(Date.now()),
    priority: 10,
    description: '',
    amountTarget: 0,
  } as Goal);
  useEffect(() => {
    setGoal((prevState) => {
      return {
        ...prevState,
        ...goalEdit,
      };
    });
  }, [isOpen]);
  const setStateByKey = (key: string, value: any) => {
    setGoal((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };
  const createNewGoal = () => {
    handelEdit(goal);
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
        <TextField
          value={goal.name}
          onChange={(event) => setStateByKey('name', event.target.value)}
          placeholder="Goal name"
        />
        <TextField
          value={goal.amountTarget}
          onChange={(event) => setStateByKey('amountTarget', event.target.value)}
          placeholder="Saving goal"
        />
        <FormControl>
          <FormLabel>Priority</FormLabel>
          <RadioGroup
            value={goal.priority}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="High"
            name="radio-buttons-group"
            className="tw-flex !tw-flex-row tw-space-x-4 tw-text-gray-300"
            onChange={(event) => setStateByKey('priority', Number(event.target.value))}
          >
            <FormControlLabel value="10" control={<Radio />} label="High" />
            <FormControlLabel value="20" control={<Radio />} label="Medium" />
            <FormControlLabel value="30" control={<Radio />} label="Low" />
          </RadioGroup>
        </FormControl>
        <div className="tw-flex tw-space-x-4">
          <FormControl className="tw-flex-1">
            <InputLabel id="type-select-label-create">Select type</InputLabel>
            <Select
              labelId="type-select-label-create"
              id="select-label-create"
              className="tw-w-full"
              value={goal.typeId}
              defaultValue={goal.typeId}
              label="Select type"
              onChange={(event) => setStateByKey('typeId', event.target.value)}
            >
              <MenuItem value={'Shopping'}>Shopping</MenuItem>
              <MenuItem value={'Tech'}>Tech</MenuItem>
              <MenuItem value={'Travel'}>Travel</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider labelId="datetime-label" dateAdapter={AdapterDayjs}>
            <DatePicker
              value={goal.completeDate}
              label="Date goal"
              defaultValue={goal.completeDate}
              className="tw-flex-1"
              onChange={(value) => setStateByKey('completeDate', value)}
            />
          </LocalizationProvider>
        </div>
        <TextareaAutosize
          value={goal.description}
          placeholder="Description..."
          minRows={4}
          className="tw-bg-transparent tw-rounded-lg tw-p-4 tw-text-gray-300 tw-border tw-border-gray-300"
          onChange={(event) => setStateByKey('description', event.target.value)}
        />
        <Box className="tw-space-x-4 tw-text-right">
          <Button onClick={() => handleClose()} className="">
            Cancel
          </Button>
          <Button variant="contained" onClick={() => createNewGoal()} className="">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default AddGoal;
