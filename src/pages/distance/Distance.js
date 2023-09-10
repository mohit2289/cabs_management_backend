import React, {useState,useEffect} from "react";
import { Box, Button, Paper, Grid } from '@mui/material';
// styles
import useStyles from "./styles";

import {getAllcityList,addCityDistance} from '../../services/city/index';
// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";

import GenericInput from '../../common-components/form-elements/genericInput';
//import GenericDropdown from '../../common-components/form-elements/genericDropdown';
import GenericCheckbox from "../../common-components/form-elements/genericCheckbox";
//import MUIDataTable from "mui-datatables";
import DistanceTable from "../distance/DistanceTable";
import GenericAutocomplete from '../../common-components/form-elements/genericAutocomplete';

export default function DistancePage() {
  const [fromcity, setFromCity] = useState([]);
  const [tocity, setTocity] = useState([]);
  const [data, setData] = useState({
    'from_city': '',
    'to_city': '',
    'distance': '',
    'status':1
  });
  useEffect(()=>{
    getFromCityData();
    getToCityData();
  },[])

  const getFromCityData = async() => {
    const response = await getAllcityList();
    if (response.data) {
      const cityData =  response.data;
      const cityArr = cityData.map(elem => (
        {
          id: elem.id,
          label: elem.name,
        } 
      ));
      setFromCity(cityArr);
      setTocity(cityArr);
    }
  }

  const getToCityData = async() => {
    const response = await getAllcityList();
    if (response.data) {
      const cityData =  response.data;
      const cityArr = cityData.map(elem => (
        {
          id: elem.id,
          label: elem.name,
        } 
      ));
      setTocity(cityArr);
    }
  }
  const handleOnChange = (event, value) => {
    if(event=='from_city'){
      setData({
        ...data,
        ['from_city']: value.id,
      });
    }
    if(event=='to_city'){
      setData({
        ...data,
        ['to_city']: value.id,
      });
    }
  }
  const handlerChange = (evt) => {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value
    });
  };
  
  const saveData = async() => {
    try {    
      const postData = data;    
      const resp  = await addCityDistance(postData);
      //toast.success('City saved successfully');
    } catch (error) {
      //toast.error(error.message);
    }
  }

  return (
    <>
      {/* <PageTitle title="Driver" /> */}
      <Paper sx={{ padding: '20px' }}>
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Add Distance 
          </Typography>
        </Box>
      <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
          <GenericAutocomplete
                  name="from_city"
                  onChange={(e,val) => {
                    handleOnChange('from_city',val)
                  }} 
                  options={fromcity}
                  label={'Select From city'} 
                  />
          </Grid>
          <Grid item xs={12} md={4}>
          <GenericAutocomplete
                  name="to_city"
                  onChange={(e,val) => {
                    handleOnChange('to_city',val)
                  }} 
                  options={tocity}
                  label={'Select To city'} 
                  />          </Grid>
          <Grid item xs={12} md={4}>
            <GenericInput label={'Distance'}   
              name={'distance'}
              onChange={(e) => {
                handlerChange(e)
              }} />
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Button variant="contained" fullWidth sx={{ my: 3 }} onClick={saveData}>
              Add Distance
            </Button>
          </Grid>
          
        </Grid>
        </Paper>

        <Grid container spacing={4} sx={{ marginTop:'20px' }}>
          <Grid item xs={12}>
           <DistanceTable />
          </Grid>
          </Grid>
        
    </>
  );
}
