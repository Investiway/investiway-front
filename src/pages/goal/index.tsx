import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, TextField, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Add, Edit, HorizontalRuleOutlined } from '@mui/icons-material';
import dayjs from 'dayjs';
import AddGoal from '../../components/pages/goal/addGoal';
import { ReactComponent as LogoLoadingIcon } from '../../assets/icons/svg/logo-loading.svg';
//#region [Import Store]
import { createGoal, DeleteGoal, FetchTypeGoal, getGoal } from '../../api/goal';
import { useSelector } from 'react-redux';
import { AppState } from '../../stores/store';
//#endregion
//#region [Import Type]
import type { FilterGoal, Goal } from '../../types/goal';
import { PriorityColor, PriorityType } from '../../utils/enums/goal';
import { toast } from 'react-toastify';
import { GoalTypeResponse, Response } from '../../types/response';
import { GoalType } from '../../types/goalType';
//#endregion
const Goal = () => {
  const filterSchema: FilterGoal = {
    typeId: '',
    date: null,
    priority: undefined,
    search: undefined,
    page: 1,
    take: 10,
  };
  const userStore = useSelector((state: AppState) => state.user);
  const [goalList, setGoalList] = useState([]);
  //#region [Modal action]
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [goalEdit, setGoalEdit] = useState({} as Goal);
  const enableModel = () => {
    setShowModal(true);
  };
  const closeModel = () => {
    setShowModal(false);
  };
  const editGoal = (goal: Goal) => {
    const completeDate = goal.completeDate ? dayjs(goal.completeDate) : null;
    setGoalEdit((prevState) => {
      return { ...prevState, ...goal, completeDate };
    });
    enableModel();
  };
  const createGoalByModel = (goal: Goal) => {
    const userId = userStore.currentUser._id;
    setIsLoading(true);
    createGoal({ ...goal, amountTarget: Number(goal.amountTarget), userId, _id: undefined })
      .then((response) => {
        const result = response.data.result;
        if (result) {
          getGoalUser();
          toast('Create goal success');
        }
      })
      .catch(() => {
        toast('Create goal fail');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //#endregion
  //#region [Filter]
  const [filter, setFilter] = useState(filterSchema);
  const [typeGoalList, setTypeGoalList] = useState([] as GoalType[]);
  const keywordChange = (value: string) => {
    setFilter((prevState) => {
      return {
        ...prevState,
        search: value,
      };
    });
  };
  const changeType = (value: string) => {
    setFilter((prevState) => {
      return {
        ...prevState,
        typeId: value,
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
  const getTypeGoal = () => {
    const userId = userStore.currentUser._id;
    FetchTypeGoal({ userId })
      .then((response: Response) => {
        const result = response.data?.result as GoalTypeResponse;
        setTypeGoalList(result.data as GoalType[]);
      })
      .catch((e) => {
        toast(e);
      })
      .finally();
  };
  //#endregion
  //#region [Get Goal]
  const getGoalUser = () => {
    const userId = userStore.currentUser._id;
    setIsLoading(true);
    getGoal({ userId, ...filter, date: dayjs(filter.date).format('DD/MM/YYYY') })
      .then((response) => {
        setGoalList(response.data.result.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //#endregion
  const onDeleteGoal = (id: string) => {
    DeleteGoal(id)
      .then((response: Response) => {
        const result = response.data?.result;
        if (result) {
          toast('Delete goal success');
          getGoalUser();
        }
      })
      .catch((e) => toast(e));
  };
  //#region [Hook]
  useEffect(() => {
    getGoalUser();
    getTypeGoal();
  }, [filter.typeId]);
  //#endregion
  const getColorBadge = (priority: number) => {
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
      >
        <Button className="!tw-absolute tw-right-0" onClick={() => onDeleteGoal(item._id)}>
          <HorizontalRuleOutlined className="tw-text-white" />
        </Button>
        <Button className="!tw-absolute tw-right-14" onClick={() => editGoal(item)}>
          <Edit className="tw-text-white" />
        </Button>
        <div
          className={`tw-h-4 tw-w-1/2 tw-rounded-br-2xl tw-rounded-tl-xl tw-bg-opacity-70 tw-backdrop-blur-2xl ${getColorBadge(
            item.priority,
          )}`}
        />
        <div className="tw-p-4">
          <Typography variant="h5">{item.name}</Typography>
          <div className="tw-mt-4">
            <span>{dayjs(item.completeDate).format('DD/MM/YYYY')}</span>
            <Typography variant="h5">{item.amountTarget}</Typography>
          </div>
        </div>
        <div className="tw-p-4 tw-duration-300">{item.description}</div>
      </div>
    );
  };
  return (
    <div className="tw-p-4">
      <AddGoal isOpen={showModal} goalEdit={goalEdit} handelEdit={createGoalByModel} handleClose={closeModel} />
      <div className="tw-pb-4">
        <Box>
          <FormControl className="!tw-flex-row tw-space-x-4 tw-w-full">
            <div>
              <InputLabel id="type-select-label">Type</InputLabel>
              <Select
                labelId="type-select-label"
                id="select-label"
                className="tw-w-40"
                value={filter.typeId}
                label="Type"
                onChange={(event) => changeType(event.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {typeGoalList?.length &&
                  typeGoalList?.map((e: GoalType, index: number) => (
                    <MenuItem key={index} value={e._id}>
                      {e.name}
                    </MenuItem>
                  ))}
              </Select>
            </div>
            <div className="tw-w-80">
              <LocalizationProvider labelId="datetime-label" dateAdapter={AdapterDayjs}>
                <DatePicker value={filter.date} onChange={(value: any) => changeDate(value)} />
              </LocalizationProvider>
            </div>
            <div className="tw-flex tw-space-x-2 tw-w-full">
              <TextField
                label="Search"
                value={filter.search}
                onChange={(event) => keywordChange(event.target.value)}
                fullWidth={true}
                placeholder="Type keyword..."
                onKeyPress={(event) => {
                  event.key === 'Enter' && getGoalUser();
                }}
              />
              <Button
                onClick={() => {
                  getGoalUser();
                }}
              >
                Search
              </Button>
            </div>
          </FormControl>
        </Box>
        <div></div>
      </div>
      <div className="tw-h-[calc(100vh-11rem)] tw-overflow-hidden tw-relative">
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
          {isLoading && (
            <LogoLoadingIcon className="tw-absolute tw-right-0 tw-bottom-0 tw-animate-spin tw-duration-1000" />
          )}
          {goalList?.length && goalList?.map((goal, index) => goalItem(goal, index))}
        </div>
      </div>
    </div>
  );
};
export default Goal;
