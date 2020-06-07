import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styles from '../custom-styles/sourceboxStyles';

export default function SourcesForm({ value, change, submit }) {
    return (
        <form onSubmit={submit}>
            <TextField
              value={value}
              onChange={change}
              id="filled-search"
              label="Or search for your very own topic!"
              type="search"
              style={styles.textField}
              margin="normal"
              variant="filled"
            />
        </form>
    );
}

SourcesForm.defaultProps = {
  value: String,
};

SourcesForm.propTypes = {
  value: PropTypes.string,
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};
