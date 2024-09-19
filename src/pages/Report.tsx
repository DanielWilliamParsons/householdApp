import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Report = () => {
    return (
        <div>
            <Typography fontWeight="fontWeightRegular">
                This is fontweight 400
            </Typography>
            <Typography fontWeight="fontWeightMedium">
                This is fontweight 500
            </Typography>
            <Typography fontWeight="fontWeightBold">
                This is fontweight 700
            </Typography>
            <Box fontWeight="fontWeightBold">This is font weight 700.</Box>
        </div>
        
    );
};

export default Report;