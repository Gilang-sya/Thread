import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, TextField, Button } from '@mui/material';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <FormControl sx={{ ml: 2, mt: 1, mb: 5 }}>
      <TextField
        label="Judul"
        sx={{ mb: 2 }}
        size="small"
        value={title}
        onChange={onTitleChange}
      />
      <TextField
        label="Kategori"
        size="small"
        sx={{ mb: 2 }}
        value={category}
        onChange={onCategoryChange}
      />
      <TextField
        multiline
        maxRows={4}
        sx={{ width: 1120 }}
        label="Masukkan Ide Kamu"
        value={body}
        onChange={onBodyChange}
      />
      <Button
        variant="contained"
        sx={{ mt: 1 }}
        onClick={() => addThread({ title, body, category })}
      >
        Kirim
      </Button>
    </FormControl>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
