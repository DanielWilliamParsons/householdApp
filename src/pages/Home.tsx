import React from 'react'
import { Box, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, ListItemButton, Toolbar } from '@mui/material';
import MonthlySummary from '../components/layout/MonthlySummary';
import Calendar from '../components/layout/Calendar';
import TransactionMenu from '../components/layout/TransactionMenu';
import TransactionForm from '../components/layout/TransactionForm';


const Home = () => {
    return (
        <Box>
            {/*Left content */}
            <Box>
                <MonthlySummary />
                <Calendar />
            </Box>

            {/*Right content */}
            <Box>
                <TransactionMenu />
                <TransactionForm />
            </Box>

        </Box>
    );
};

export default Home;