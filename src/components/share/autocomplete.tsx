import React, { SyntheticEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { GoalType } from '../../types/goalType';
const AutocompleteInput = ({ goalTypeList }: { goalTypeList: GoalType[] }) => {
  const filter = createFilterOptions<GoalType>();
  const [state] = useState({} as GoalType | null);
  return (
    <Autocomplete
      freeSolo
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      value={state}
      onChange={(event: SyntheticEvent) => {
        console.log(event);
      }}
      renderInput={(params) => <TextField {...params} />}
      options={goalTypeList}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option._id);
        if (inputValue !== '' && !isExisting) {
          console.log(inputValue);
        }

        return filtered;
      }}
    />
  );
};
export default AutocompleteInput;
