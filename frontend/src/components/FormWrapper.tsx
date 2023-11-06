import { FormEvent, ReactNode, useState } from 'react';
import { Box, Button, Snackbar } from '@mui/material';

interface IFormWrapper {
    handleSubmit: () => Promise<void>;
    disabled: boolean;
    children: ReactNode;
}

const FormWrapper = ({ handleSubmit, disabled, children }: IFormWrapper) => {
    const [notificationIsOpen, setNotificationState] = useState<boolean>(false);

    const onSubmit = async (evt: FormEvent) => {
        try {
            evt.preventDefault();
            await handleSubmit();
            setNotificationState(true);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Box
            sx={{
                mt: 6,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                component="form"
                noValidate
                onSubmit={onSubmit}
                sx={{
                    width: '100%',
                    maxWidth: 550,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                }}
            >
                {children}
                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    disabled={disabled}
                >
                    Submit
                </Button>
            </Box>
            <Snackbar
                open={notificationIsOpen}
                autoHideDuration={4000}
                onClose={() => setNotificationState(false)}
                message="Success"
            />
        </Box>
    );
};

export default FormWrapper;
