import { Button, Stack, TextField} from '@mui/material'
import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';

const Addemp = () => {
    const {register,handleSubmit}= useForm();
    const getVal=(val)=>{
        axios.post('https://reqres.in/api/users',val).then((res)=>{
      alert(`The data is posted with id ${res.data.id}`)
        })

    }
  return (
    <div>
      <Stack
      component="form"
      sx={{
        width: '25ch',
        marginLeft: '570px',
        marginTop:'50px'
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        name='empname'
        {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
        label="Employee Name"
        variant="outlined"
        
      />
      <TextField
        name='emplocation'
        {...register('emplocation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        label="Employee Location"
        variant="outlined"
      />

      <TextField
       name='empdesignation'
       {...register('empdesignation')}
       hiddenLabel
       id="filled-hidden-label-normal"
       label="Employee Designation"
       variant="outlined"
     />
       <Button onClick={handleSubmit(getVal)} variant ='contained'>Submit</Button>
    </Stack>

    </div>
  )
}

export default Addemp
