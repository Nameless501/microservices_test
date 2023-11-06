import { useEffect, useState } from 'react';
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { IUser } from '../types/types';
import { apiRoutes, appRoutes } from '../configs/configs';
import { setRouteId } from '../utils/helpers';

function UsersList() {
    const [usersList, setUsersList] = useState<IUser[]>([]);

    useEffect(() => {
        fetch(apiRoutes.usersList)
            .then((res) => res.json())
            .then((users) => setUsersList(users))
            .catch((err) => console.log(err));
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usersList.map(({ id, name, email }) => (
                        <TableRow key={id}>
                            <TableCell align="center">{id}</TableCell>
                            <TableCell align="center">{name}</TableCell>
                            <TableCell align="center">{email}</TableCell>
                            <TableCell align="center">
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    size="small"
                                    component={RouterLink}
                                    to={setRouteId(appRoutes.updateUser, id)}
                                >
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersList;
