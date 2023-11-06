import { Box, Button } from '@mui/material';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { searchValidation } from '../configs/configs';
import FormInput from './FormInput';

interface ISearchInput {
    handleSearch: (id: number) => void;
}

function SearchInput({ handleSearch }: ISearchInput) {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FieldValues>({
        mode: 'all',
        resolver: zodResolver(searchValidation),
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) =>
        handleSearch(data.id);

    return (
        <Box
            sx={{
                width: '50%',
                display: 'flex',
                gap: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormInput
                register={register}
                errors={errors}
                size="small"
                label="User ID"
                name="id"
            />
            <Button
                size="medium"
                type="submit"
                disabled={!isValid}
                sx={{ py: 1 }}
            >
                Search
            </Button>
        </Box>
    );
}

export default SearchInput;
