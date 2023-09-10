import React, {useState, useEffect} from "react";
import { Box, Button, Paper, Grid } from '@mui/material';
// styles
import useStyles from "./styles";

// services 
import {getAllStates} from '../../services/state/index';
import {addCity} from '../../services/city/index';

// components
import { Typography } from "../../components/Wrappers/Wrappers";

import GenericInput from '../../common-components/form-elements/genericInput';
import GenericAutocomplete from '../../common-components/form-elements/genericAutocomplete';
import GenericSwitch from "../../common-components/form-elements/genericSwitch";


export default function CityPage() {
  var classes = useStyles();
  const [state, setState] = useState([]);
  const [data, setData] = useState({
    'state_id': "",
    'name': "",
  });
  
  const getStateOptionData  = async () => {
    const getData = await getAllStates();
    if (getData.data) {
        const statesArr =  getData.data;
        const statesObj = statesArr.map(elem => (
          {
            id: elem.id,
            label: elem.name,
          } 
        ));
        setState(statesObj);
    }
  }

  const handlerChange = (evt) => {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value
    });
  };

  const handleOnChange = (event, value) => {
    if(event=='state'){
      setData({
        ...data,
        ['state_id']: value.id,
      });
    }
  }

  const saveData = async() => {
    try {    
      const postData = data;    
      const resp  = await addCity(postData);
      //toast.success('City saved successfully');
    } catch (error) {
      //toast.error(error.message);
    }
  }

  useEffect(()=>{
    getStateOptionData();
 },[])


  return (
    <>
      {/* <PageTitle title="Driver" /> */}
      <Paper sx={{ padding: '30px' }}>
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Add City
          </Typography>
        </Box>
      <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
          <GenericAutocomplete
                  name="state"
                  onChange={(e,val) => {
                    handleOnChange('state',val)
                  }} 
                  options={state}
                  label={'Select State'} 
                  />
            </Grid>
          <Grid item xs={12} md={4}>
           <GenericInput label={'City Name'}
            name={'name'}
            onChange={(e) => {
              handlerChange(e)
            }}
           />
          </Grid>

              <Grid item xs={12} md={3}>
                <GenericSwitch label={'IsVisible'} required />
              </Grid>
          <Grid item xs={12} md={2}>
            <Button variant="contained" fullWidth sx={{ my: 3 }} onClick={saveData} >
              Add City
            </Button>
          </Grid>
          
        </Grid>
        </Paper>
    </>
  );
}
