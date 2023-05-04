import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Card, CardContent, FormControlLabel, FormGroup, Typography, Divider } from "@mui/material";
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined'
import { FormControl } from 'react-bootstrap';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function Filter(){
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    return(
        <Card variant="outlined">
            <CardContent>
                <Typography fontWeight="bold">Filter</Typography>
                <Divider/>
                <Accordion variant="outlined" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreOutlined />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Aksesoris Mobil</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Spion</Typography>
                        <Typography>Pelek</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion variant="outlined">
                    <AccordionSummary expandIcon={<ExpandMoreOutlined />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Aksesoris Motor</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Spion</Typography>
                        <Typography>Pelek</Typography>
                    </AccordionDetails>
                </Accordion>
                <hr></hr>
                <Typography>Lokasi</Typography>
                <FormGroup className="ml-2">
                    <FormControlLabel control={<Checkbox/>} label="Jakarta" />
                    <FormControlLabel control={<Checkbox/>} label="Bandung" />
                    <FormControlLabel control={<Checkbox/>} label="Surabaya" />
                    <FormControlLabel control={<Checkbox/>} label="Medan" />
                </FormGroup>
                <hr></hr>
                <Typography>Pengiriman</Typography>
                <FormGroup className="ml-2">
                    <FormControlLabel control={<Checkbox/>} label="J&T" />
                    <FormControlLabel control={<Checkbox/>} label="Sicepat" />
                    <FormControlLabel control={<Checkbox/>} label="Go Send" />
                    <FormControlLabel control={<Checkbox/>} label="Grab Express" />
                </FormGroup>
                <hr></hr>
                <Typography>Baru</Typography>
                <FormGroup className="ml-2">
                    <FormControlLabel control={<Checkbox/>} label="Baru" />
                    <FormControlLabel control={<Checkbox/>} label="Bekas" />
                </FormGroup>
            </CardContent>
        </Card>
    )
}