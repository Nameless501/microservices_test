import { Box, Container } from '@mui/material';
import Header from './Header';
import UsersList from './UsersList';
import LogsList from './LogsList';
import NewUser from './NewUser';
import UpdateUser from './UpdateUser';
import { Navigate, Route, Routes } from 'react-router-dom';
import { appRoutes } from '../configs/configs';

function App() {
    return (
        <Box display="flex" flexDirection="column" gap={1}>
            <Header />
            <Container maxWidth="xl" sx={{ mt: 10 }}>
                <Routes>
                    <Route path={appRoutes.usersList} element={<UsersList />} />
                    <Route path={appRoutes.logsList} element={<LogsList />} />
                    <Route path={appRoutes.newUser} element={<NewUser />} />
                    <Route
                        path={appRoutes.updateUser}
                        element={<UpdateUser />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to={appRoutes.usersList} replace />}
                    />
                </Routes>
            </Container>
        </Box>
    );
}

export default App;
