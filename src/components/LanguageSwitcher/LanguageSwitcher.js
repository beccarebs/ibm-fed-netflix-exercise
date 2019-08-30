import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      color: '#ffffff'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      color: '#ffffff'
    },
    // formLabel: {
    //     color: '#ffffff'
    // }
  }),
);

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    language: ''
  });

  function handleChange(event) {
    setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
    }));

    props.getLanguage(event.target.value);
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="language">Language</InputLabel>
        <Select
          value={values.language}
          onChange={handleChange}
          inputProps={{
            name: 'language',
            id: 'language',
          }}
        >
          <MenuItem value={'en_US'}>English</MenuItem>
          <MenuItem value={'la_PG'}>Pig Latin</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}