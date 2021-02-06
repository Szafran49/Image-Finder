import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";
import { makeStyles } from '@material-ui/styles'
import ListBoxComponent from './ListBoxComponent'
import { useNavigate } from 'react-router-dom'
import { tags } from './tags'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  spacing: 0;
  align-items: center;
  justify: center;
  margin:auto;
  width: 50vw;
  height:7vh;
  left: 0;
  right: 0;
`
const useStyles = makeStyles(() => ({
  input: {
    flexGrow: 1,
  },
}));

const filterOptions = createFilterOptions({
  matchFrom: "start",
  limit: 6,
});

export default function SearchBar() {
  const [value, setValue] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();
  function handleEnterClick() {
    if (value !== "")
      navigate(`/search/${value}`)
  }
  return (
    <StyledWrapper>
      <Autocomplete
        ListboxComponent={ListBoxComponent}
        filterOptions={filterOptions}
        className={classes.input}
        id="autocomplete searchbar"
        options={tags.map((tag) => tag.name)}
        open={value.length >= 3}
        onClose={() => setValue("")}
        popupIcon={false}
        closeIcon={false}
        onInputChange={(e, val) => setValue(val)}
        noOptionsText={"Brak pasujących tagów"}
        size="small"
        renderInput={(params) => (
          <TextField
            {...params}

            label="Szukaj"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEnterClick();
              }
            }}
          />
        )}
      />
    </StyledWrapper>

  );
}