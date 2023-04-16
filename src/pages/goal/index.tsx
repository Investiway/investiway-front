import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, TextField, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Add, HorizontalRuleOutlined } from '@mui/icons-material';
import AddGoal from '../../components/pages/Goal/addGoal';
import type { FilterGoal, Goal } from '../../utils/interfaces/goal';
import { PriorityColor, PriorityType } from '../../utils/enums/goal';
import dayjs from 'dayjs';

const Goal = () => {
  const filterSchema: FilterGoal = {
    type: '',
    date: null,
    priority: '',
    keyword: '',
  };
  //#region [Modal action]
  const [showModal, setShowModal] = useState(false);
  const [goalEdit, setGoalEdit] = useState({} as Goal);
  // const goalSelect = useMemo(() => goalEdit, [goalEdit]);
  const enableModel = () => {
    setShowModal(true);
  };
  const closeModel = () => {
    setShowModal(false);
  };
  const editGoal = (goal: Goal) => {
    setGoalEdit((prevState) => {
      return { ...prevState, ...goal };
    });
    enableModel();
  };
  //#endregion
  //#region [Filter]
  const [filter, setFilter] = useState(filterSchema);
  const keywordChange = (value: string) => {
    setFilter((prevState) => {
      return {
        ...prevState,
        keyword: value,
      };
    });
  };
  const changeType = (value: string) => {
    setFilter((prevState) => {
      return {
        ...prevState,
        type: value,
      };
    });
  };
  const changeDate = (value: any) => {
    setFilter((prevState) => {
      return {
        ...prevState,
        date: value,
      };
    });
  };
  //#endregion
  const arr: Goal[] = [
    {
      title: 'Mua Macbook Pro M2',
      date: dayjs('01/11/2023'),
      savingGoal: '40000000',
      description: 'xxxx',
      priority: 'Medium',
      remainingAmount: '40000000',
      type: '10',
    },
    {
      title: 'Mua Macbook Pro M2',
      date: dayjs('01/11/2023'),
      savingGoal: '40000000',
      description: 'xxxx',
      priority: 'High',
      remainingAmount: '40000000',
      type: 'Shopping',
    },
    {
      title: 'Mua Macbook Pro M2',
      date: dayjs('01/11/2023'),
      savingGoal: '40000000',
      description: 'xxxx',
      priority: 'High',
      remainingAmount: '40000000',
      type: 'Shopping',
    },
    {
      title: 'Mua Macbook Pro M2',
      date: dayjs('01/11/2023'),
      savingGoal: '40000000',
      description: 'xxxx',
      priority: 'High',
      remainingAmount: '40000000',
      type: 'Shopping',
    },
    {
      title: 'Mua Macbook Pro M2',
      date: dayjs('01/11/2023'),
      savingGoal: '40000000',
      description: 'xxxx',
      priority: 'High',
      remainingAmount: '40000000',
      type: 'Shopping',
    },
    {
      title: 'Mua Macbook Pro M2',
      date: dayjs('01/11/2023'),
      savingGoal: '40000000',
      description: 'xxxx',
      priority: 'High',
      remainingAmount: '40000000',
      type: 'Shopping',
    },
    {
      title: 'Mua Macbook Pro M2',
      date: dayjs('01/11/2023'),
      savingGoal: '40000000',
      description: 'xxxx',
      priority: 'High',
      remainingAmount: '40000000',
      type: 'Shopping',
    },
    {
      title: 'Mua Macbook Pro M2',
      date: dayjs('30/11/2023', 'dd/MM/YYYY'),
      savingGoal: '40000000',
      description: 'xxxx',
      priority: 'High',
      remainingAmount: '40000000',
      type: 'Shopping',
    },
    {
      title: 'Mua Macbook Pro M2',
      date: dayjs('01/11/2023'),
      savingGoal: '40000000',
      description: 'xxxx',
      priority: 'High',
      remainingAmount: '40000000',
      type: 'Shopping',
    },
  ];
  const getColorBadge = (priority: string) => {
    if (priority === PriorityType.High) return PriorityColor.High;
    if (priority === PriorityType.Medium) return PriorityColor.Medium;
    return PriorityColor.Low;
  };
  const goalItem = (item: Goal, key: number) => {
    return (
      <div
        key={key}
        className="tw-group tw-relative
          tw-shadow-2xl tw-rounded-2xl
          tw-duration-300 tw-transform
          tw-cursor-pointer
          tw-min-w-[280px] tw-min-h-[260px]
          hover:tw-shadow-gray-900"
        onClick={() => editGoal(item)}
      >
        <Button className="!tw-absolute tw-right-0">
          <HorizontalRuleOutlined className="tw-text-white" />
        </Button>
        <div
          className={`tw-h-4 tw-w-1/2 tw-rounded-br-2xl tw-rounded-tl-xl tw-bg-opacity-70 tw-backdrop-blur-2xl ${getColorBadge(
            item.priority,
          )}`}
        />
        <div className="tw-p-4">
          <Typography variant="h5">{item.title}</Typography>
          <div className="tw-mt-4">
            <span>{dayjs(item.date).format('DD/MM/YYYY')}</span>
            <Typography variant="h5">{item.savingGoal}</Typography>
          </div>
        </div>
        <div className="tw-p-4 tw-duration-300">{item.description}</div>
      </div>
    );
  };
  return (
    <div className="tw-p-4">
      <AddGoal isOpen={showModal} goalEdit={goalEdit} handelEdit={() => editGoal(goalEdit)} handleClose={closeModel} />
      <div className="tw-pb-4">
        <Box>
          <FormControl className="!tw-flex-row tw-space-x-4 tw-w-full">
            <div>
              <InputLabel id="type-select-label">Type</InputLabel>
              <Select
                labelId="type-select-label"
                id="select-label"
                className="tw-w-40"
                value={filter.type}
                label="Type"
                onChange={(event) => changeType(event.target.value)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
            <div className="tw-w-80">
              <LocalizationProvider labelId="datetime-label" dateAdapter={AdapterDayjs}>
                <DatePicker value={filter.date} onChange={(value: any) => changeDate(value)} />
              </LocalizationProvider>
            </div>
            <div className="tw-w-full">
              <TextField
                label="Search"
                value={filter.keyword}
                onChange={(event) => keywordChange(event.target.value)}
                fullWidth={true}
                placeholder="Type keyword..."
              />
            </div>
          </FormControl>
        </Box>
        <div></div>
      </div>
      <div className="tw-h-[calc(100vh-11rem)] tw-overflow-hidden">
        <div className="tw-grid tw-grid-cols-2 2xl:tw-grid-cols-4 tw-gap-8 tw-overflow-y-auto tw-h-full tw-p-4 tw-rounded-xl tw-shadow-2xl">
          <div
            className="tw-flex tw-flex-col tw-shadow-2xl tw-items-center tw-justify-center tw-border tw-border-gray-600 tw-duration-300 hover:tw-border-gray-300 tw-cursor-pointer tw-rounded-2xl tw-min-w-[220px] tw-min-h-[220px]"
            onClick={enableModel}
          >
            <Add className="tw-text-gray-600 tw-mx-auto" />
            <Typography variant="h5" className="tw-text-center tw-text-gray-600">
              Add goal
            </Typography>
          </div>
          {arr.map((goal, index) => goalItem(goal, index))}
        </div>
      </div>
    </div>
  );
};
export default Goal;
