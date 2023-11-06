import { FC } from 'react';
import {
    AppBar,
    Container,
    Box,
    Toolbar,
    List,
    ListItemButton,
    ListItem,
    Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { navigationLinks } from '../configs/configs';

const Header: FC = () => {
    return (
        <Box>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar component="nav" sx={{ p: 0 }}>
                        <List
                            sx={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'flex-start',
                            }}
                        >
                            {navigationLinks.map((link, ind) => (
                                <ListItem key={ind} sx={{ width: 'auto' }}>
                                    <ListItemButton
                                        component={RouterLink}
                                        to={link.route}
                                    >
                                        <Typography variant="h6">
                                            {link.title}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;
