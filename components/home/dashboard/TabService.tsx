import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import PulsaService from '@/components/home/service/PulsaSrvice';
import DataPackageService from '@/components/home/service/DataPackageService';
import ListrikService from '@/components/home/service/ListrikService';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
        <>  
              {children}
        </>
        )}
      </div>
    );
}
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function TabService(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number)=> {
        setValue(newValue);
    }
    return(
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'none'}}>
                <Tabs 
                    textColor="secondary"
                    indicatorColor="secondary"
                    value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Pulsa" {...a11yProps(0)} />
                    <Tab label="Paket Data" {...a11yProps(1)} />
                    <Tab label="Listrik PLN" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <PulsaService />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <DataPackageService />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <ListrikService />
                </TabPanel>
            </Box>
        </Box>
    )
}