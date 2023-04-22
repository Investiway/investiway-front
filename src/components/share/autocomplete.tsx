import React, { SyntheticEvent, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';
import { AppState } from '../../stores/store';
import { Response } from '../../types/response';
import { GoalType } from '../../types/goalType';
import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
interface AutocompleteProps {
  list: object[];
  onChange: Function;
  onDelete: Function;
  call: Function;
}
const AutocompleteInput = ({ list, onChange, onDelete, call }: AutocompleteProps) => {
  const filter = createFilterOptions<any>();
  const [state, setState] = useState({} as any);
  const userId = useSelector((state: AppState) => state.user.currentUser._id);
  useEffect(() => {
    console.log(list);
    console.log(state);
  }, [list]);

  const onChangeItem = (valueOption: any) => {
    if (typeof valueOption === 'string') {
      setState(valueOption);
      onChange(valueOption);
    } else {
      valueOption?.value?.name &&
        call({ userId, ...valueOption?.value, _id: undefined }).then((response: Response) => {
          const result = response.data?.result as GoalType;
          if (result) {
            onChange(result._id, true);
            setState(result._id);
          }
        });
    }
  };
  const onDeleteItem = (id: string) => {
    console.log('state', state === id);
    if (state === id) {
      setTimeout(() => {
        setState('');
      });
    }
    console.log(state);
    onDelete(id);
  };
  return (
    <Autocomplete
      freeSolo
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      value={state?._id}
      onChange={(event: SyntheticEvent, newValue) => {
        onChangeItem(newValue);
      }}
      getOptionLabel={(option: Object | string) => option?.name}
      renderInput={(params) => <TextField {...params} label="Select type" />}
      renderOption={(props, option) => (
        <div className="tw-flex tw-justify-between">
          <div {...props} style={{ flex: '1 1 0%' }}>
            {option?.name}
          </div>
          {!option?.isNewValue && (
            <Button onClick={() => onDeleteItem(option._id)}>
              <Close />
            </Button>
          )}
        </div>
      )}
      options={list}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option?.name);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            name: inputValue,
            isNewValue: true,
            value: {
              _id: inputValue,
              name: inputValue,
              description: inputValue,
            },
          });
        }
        return filtered;
      }}
    />
  );
};
export default AutocompleteInput;
