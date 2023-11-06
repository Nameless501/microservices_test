import { TextField } from '@mui/material';
import {
    FieldError,
    FieldErrors,
    FieldValues,
    UseFormRegister,
} from 'react-hook-form';

interface IFormInput {
    label: string;
    errors: FieldErrors;
    name: string;
    register: UseFormRegister<FieldValues>;
    size?: 'small' | 'medium';
}

const FormInput = ({
    register,
    name,
    label,
    errors,
    size = 'medium',
}: IFormInput) => {
    const getError = (input: string) => {
        if (input in errors) {
            return errors[input] as FieldError;
        }
    };

    return (
        <TextField
            {...register(name)}
            fullWidth
            label={label}
            error={getError(name) ? true : false}
            helperText={getError(name)?.message}
            size={size}
        />
    );
};

export default FormInput;
