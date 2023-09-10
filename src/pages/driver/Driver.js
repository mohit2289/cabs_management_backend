import React, {useState, useEffect} from 'react';

import { Box, Button, Paper, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import { Typography } from "../../components/Wrappers/Wrappers";

import GenericInput from '../../common-components/form-elements/genericInput';
import GenericDropdown from '../../common-components/form-elements/genericDropdown';
import GenericAutocomplete from '../../common-components/form-elements/genericAutocomplete';
import {addDriver} from '../../services/driver/index';
import {getAllStates} from '../../services/state/index';
import {getCityByStateId} from '../../services/city/index';
import {getCabCategory, getVechicleByCategoryId} from '../../services/cab/index';
//import GenericDatePicker from "../../common-components/form-elements/genericDatePicker";

export default function DriverPage() {

  const [data, setData] = useState({
    'driver_name': "",
    'driver_mobile': null,
    'driver_email': "",
    'pincode': null,
    'state': '',
    'city': '',
    'locality': "",
    'address': "",
    'aadhar_number': "",
    'pan_number':'',
    'vehicle_category_id': '',
    'vehicle_id': '',
    'dl_number':"",
    'dl_expiry':'',
  });
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [vehcileCategory, setVehcileCategory ] = useState([]);
  const [vehicle, setVehicle ] = useState([]);
  const [selectState, setSelectState ] = useState('');
  const [selectedCategory, setSelectedCategory ] = useState('');

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

  const saveData = async() => {
    try {    
      const postData = data;    
      const resp  = await addDriver(postData);
      toast.success('Cab saved successfully');
      //history.push('/app/driverList');
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleOnChange = (event, value) => {
    if(event=='state'){
      setData({
        ...data,
        ['state']: value.id,
      });
      setSelectState(value.id)
    }
    if(event=='city'){
      setData({
        ...data,
        ['city']: value.id,
      });
    }
    if(event=='vehicle_category_id'){
      setData({
        ...data,
        ['vehicle_category_id']: value.id,
      });
      setSelectedCategory(value.id);
    }
    if(event=='vehicle_id'){
      setData({
        ...data,
        ['vehicle_id']: value.id,
      });
    }
  };

  const getCityOptionData = async(stateid) => {
    const cityData = await getCityByStateId(stateid);
      if (cityData.data) {
        const cityArr =  cityData.data;
        const cityObj = cityArr.map(elem => (
          {
            id: elem.id,
            label: elem.name,
          } 
        ));
        setCity(cityObj);
    }
  };

  const getVechileOptionData = async(categoryid) => {
    const response = await getVechicleByCategoryId(categoryid);
      if (response.data) {
        const vehicleData =  response.data;
        const vehicleObj = vehicleData.map(elem => (
          {
            id: elem.cab_id,
            label: elem.cab_name,
          } 
        ));
        setVehicle(vehicleObj);
    }
  }

  const getCabCategoryData  = async () => {
    const getData = await getCabCategory();
    if (getData.data) {
        const categoryData =  getData.data;
        const categoryObj = categoryData.map(elem => (
          {
            id: elem.category_id,
            label: elem.category_name,
            seat: elem.seat_no
          } 
        ));
        setVehcileCategory(categoryObj);
    }
  }

  useEffect(()=>{
     getStateOptionData();
     getCabCategoryData();
  },[])

  useEffect(()=> {
    if(data.state){
     getCityOptionData(data.state);
    }
    if(data.vehicle_category_id){
      getVechileOptionData(data.vehicle_category_id);
    }
  },[selectState,selectedCategory])

  // useEffect(async()=> {
   
  // },[data.vehicle_category_id])

  return (
    <>
      {/* <PageTitle title="Driver" /> */}
      <Paper sx={{ padding: '30px' }}>
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Add Driver Details
          </Typography>
        </Box>
      <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
           <GenericInput label={'Driver Name'}
              name={'driver_name'}
              onChange={(e) => {
                handlerChange(e)
              }}/>
          </Grid>
          <Grid item xs={12} md={4}>
          <GenericInput label={'Contact no'}  
              name={'driver_mobile'}
              onChange={(e) => {
                handlerChange(e)
              }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericInput label={'Email'} 
             name={'driver_email'}
             onChange={(e) => {
               handlerChange(e)
             }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <GenericInput label={'Pincode'} 
                name={'pincode'}
                onChange={(e) => {
                  handlerChange(e)
                }} />
              </Grid>
              <Grid item xs={12} md={6}>
                  <GenericAutocomplete
                  name="state"
                  onChange={(e,val) => {
                    handleOnChange('state',val)
                  }} 
                  options={state}
                  label={'Select State'} 
                  />
              </Grid>
              <Grid item xs={12} md={6}>
              <GenericAutocomplete
                  name="city"
                  onChange={(e,val) => {
                    handleOnChange('city',val)
                  }} 
                  options={city}
                  label={'Select city'} 
                  />
              </Grid>
              <Grid item xs={12} md={6}>
                <GenericInput label={'Locality'} 
                 name={'locality'}
                 onChange={(e) => {
                   handlerChange(e)
                 }}  />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
          <GenericInput label={'Address'}  multiline rows={3} 
           name={'address'}
           onChange={(e) => {
             handlerChange(e)
           }} 
           />
          </Grid>
       
          <Grid item xs={12} md={6}>
            <GenericInput label={'Aadhar No'}  
            name={'aadhar_number'}
            onChange={(e) => {
              handlerChange(e)
            }}  />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput label={''} type={'file'} required helperText="Upload Aadhar" />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput label={'PAN No'}
              name={'pan_number'}
            onChange={(e) => {
              handlerChange(e)
            }} />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <GenericInput label={''} type={'file'} required helperText="Upload Pancard" />
          </Grid>

          <Grid item xs={12} md={6}>
            <GenericAutocomplete  
                name="vehicle_category_id"
                onChange={(e,val) => {
                  handleOnChange('vehicle_category_id',val)
                }} 
                options={vehcileCategory}
                label={'Select Vehicle Category'} 
            />
          </Grid>

              <Grid item xs={12} md={6}>
                <GenericAutocomplete  
                  name="vehicle_id"
                  onChange={(e,val) => {
                    handleOnChange('vehicle_id',val)
                  }} 
                  options={vehicle}
                  label={'Select Vehicle Name'}
              />
                
              </Grid>

          <Grid item xs={12} md={6}>
            <GenericInput label={'DL No'}  
            name={'dl_number'}
            onChange={(e) => {
              handlerChange(e)
            }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput label={'DL Expiry'} type={'date'} 
            name='dl_expiry'
            onChange={(e) => {
              handlerChange(e)
            }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <GenericInput label={''} type={'file'} required  helperText="Upload DL"/>
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput label={''} type={'file'} required  helperText="Upload Police Verification"/>
            
          </Grid>

          <Grid item xs={12} md={6}>
            <GenericInput label={''} type={'file'} required  helperText="Driver Image Upload"/>
            
          </Grid>
          <Grid item xs={12} md={3} >
            <Grid container spacing={1}>
                <Grid item xs={12} md={8} style={{border: '1px solid black', height:'150px'}}></Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={2}>
            <Button variant="contained" fullWidth sx={{ my: 3 }} onClick={saveData}>
              Add Driver
            </Button>
          </Grid>
          
        </Grid>
        </Paper>
    </>
  );
}
