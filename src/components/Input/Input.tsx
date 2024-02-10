import TextField from '@mui/material/TextField';
import React from 'react';

type TextFieldVariants = 'standard' | 'outlined' | 'filled';

export interface TextFieldProps{
    label: string,
    variant: TextFieldVariants
}

const Input = (props: TextFieldProps)=>{
    return <TextField  label={props.label} variant={props.variant} />
}

export default Input;