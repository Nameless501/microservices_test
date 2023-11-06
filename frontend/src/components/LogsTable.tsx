import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { ILog } from '../types/types';
import { getFormattedDate } from '../utils/helpers';

interface ILogsTable {
    logsList: ILog[];
}

function LogsTable({ logsList }: ILogsTable) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">User ID</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logsList.map(({ id, userId, type, time }) => (
                        <TableRow key={id}>
                            <TableCell align="center">{userId}</TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    color: type === 'create' ? 'blue' : 'green',
                                }}
                            >
                                {type}
                            </TableCell>
                            <TableCell align="center">
                                {getFormattedDate(time)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default LogsTable;
