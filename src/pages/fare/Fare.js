import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Grid } from '@mui/material';
// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";

import GenericInput from '../../common-components/form-elements/genericInput';
import GenericDropdown from '../../common-components/form-elements/genericDropdown';
import GenericAutocomplete from '../../common-components/form-elements/genericAutocomplete';

import { grey } from "@material-ui/core/colors";
import GenericDatePicker from "../../common-components/form-elements/genericDatePicker";
import GenericSwitch from "../../common-components/form-elements/genericSwitch";
import GenericRadio from "../../common-components/form-elements/genericRadio";
//import GenericDatePicker from '../../../../../common-components/form-elements/genericDatePicker';

import FareOutstation from "./fareOutstation";
import FareLocal from "./fareLocal";
import FarePoint from "./farePoint";

import {getAllcityList} from '../../services/city/index';
import {getCabCategory, getVechicleByCategoryId} from '../../services/cab/index';
import {getAllLocalPackage} from '../../services/localpackage/index';
import {addFare} from '../../services/fare/index';


export default function FarePage() {
 const [packageId, setPackageId] = useState(1);
 const [fromcity, setFromCity] = useState([]);
 const [destinationCity, setDestinationCity] = useState([]);
 const [vehicleCategory, setVehicleCategory ] = useState([]);
 const [vehicle, setVehicle ] = useState([]);
 const [localPackage, setLocalPackage] = useState([]);

 const [data, setData] = useState({
  "master_package_id": packageId,
  "master_package_mode_id": "",
  'city_id': '',
  'vehicle_category':"",
  'vehicle_model':"",
  'local_package':"",
  "local_pkg_fare":"",
  "minimum_distance":"",
  "per_km_charge":"",
  "per_hr_charge":null,
  'destination_city': '',
  'driver_allowance':"",
  "night_charge":"",
  "night_start_time":"22:00:00",
  "night_end_time":"06:00:00"

});
  const optionData = [
    {
      label: 'Local',
      value: 1
    },
    {
      label: 'Point-to-point',
      value: 2
    },
    {
      label: 'Airport transfer',
      value: 3
    },
    {
      label: 'Outstation',
      value: 4
    }    
  ];
  const handlerChange = (evt) => {
    let value = evt.target.value;
    let evtName = evt.target.name;
    if(evtName=='package'){
      setPackageId(Number(value));   
      let pkgid = Number(value);
      if(pkgid==1 || pkgid==2){
        setData({
          ...data,
          ['master_package_mode_id']: 3,
          ['master_package_id']: pkgid
        });
        
      }else{
        setData({
          ...data,
          ['master_package_mode_id']: 1,
          ['master_package_id']: pkgid
        });
      }
    }else {
      setData({
        ...data,
        [evtName]: value
      });
    }
  };

  const handleOnChange = (event, value) =>{
    if(event=='from_city'){
      setData({
        ...data,
        ['city_id']: value.id,
      });
    }
    if(event=='vehicle_category'){
      setData({
        ...data,
        ['vehicle_category']: value.id,
      });
      getVechileOptionData(value.id);
    }
    
    if(event=='vehicle_model'){
      setData({
        ...data,
        ['vehicle_model']: value.id,
      });
    }

    if(event=='local_package'){
      setData({
        ...data,
        ['local_package']: value.id,
        ['master_package_mode_id']: value.pkgmodeId,
      });
    }
    if(event=='destination_city'){
      setData({
        ...data,
        ['destination_city']: value.id,
      });
    }
  }

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
      setDestinationCity(cityArr);
    }
  }

  const getCabCategoryData  = async () => {
    const getData = await getCabCategory();
    if (getData.data) {
        const categoryData =  getData.data;
        const categoryObj = categoryData.map(elem => (
          {
            id: elem.id,
            label: elem.vehicle_type,
          } 
        ));
        setVehicleCategory(categoryObj);
    }
  }

  const getVechileOptionData = async(categoryid) => {
    const response = await getVechicleByCategoryId(categoryid);
    setVehicle([]);
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

  const getLocalPackageData = async() => {
    const getData = await getAllLocalPackage();
    if (getData.data) {
        const packagesData =  getData.data;
        const packagesObj = packagesData.map(elem => (
          {
            id: elem.id,
            label: elem.name,
            pkgmodeId: elem.package_mode_id
          } 
        ));
        setLocalPackage(packagesObj);
    }
  }

  const saveData = async() => {
    try {    
      const postData = data;  
      console.log(postData)
      postData.minimum_charge =  postData.local_pkg_fare;
      const resp  = await addFare(postData);
      //toast.success('Data saved successfully');
      //history.push('/app/driverList');
    } catch (error) {
      //toast.error(error.message);
    }
  }

  useEffect(()=>{
    getFromCityData();
    getCabCategoryData();
    getLocalPackageData();
  },[])

  console.log(data)
  return (
    <>
      {/* <PageTitle title="Driver" /> */}
      <Paper sx={{ padding: '30px' }}>
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Add Fare Details
          </Typography>
        </Box>
      <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
          <Grid container spacing={1}>
        
              <Grid item xs={12} md={12}>
                <GenericRadio orientation={'row'} name="package" 
                options={optionData} 
                defaultValue={1} 
                value={packageId}
                onChange={handlerChange} />
              </Grid>
          </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
          <GenericAutocomplete
                  name="from_city"
                  onChange={(e,val) => {
                    handleOnChange('from_city',val)
                  }} 
                  options={fromcity}
                  label={'Select city'} 
                  />
          </Grid>
          {packageId!='1' && 
          <Grid item xs={12} md={4}>
          <GenericAutocomplete 
            label={'Destination City'} 
            options={destinationCity}
            onChange={(e,val) => {
              handleOnChange('destination_city',val)
            }} 
            required />
          
          </Grid> }
          <Grid item xs={12} md={4}>
            <GenericAutocomplete
                  name="vehicle_category"
                  onChange={(e,val) => {
                    handleOnChange('vehicle_category',val)
                  }} 
                  options={vehicleCategory}
                  label={'Select Vehicle Category'} 
                  />
          </Grid>
          <Grid item xs={12} md={4}>
          <GenericAutocomplete
                  name="vehicle_model"
                  onChange={(e,val) => {
                    handleOnChange('vehicle_model',val)
                  }} 
                  options={vehicle}
                  label={'Select Vehicle Model'} 
                  />
          </Grid>
         
          {(packageId=='1' || packageId=='2' || packageId==4) && 
            <FareLocal 
              localPackage={localPackage} 
              handleOnChange={handleOnChange}
              handlerChange={handlerChange} 
              packageId = {data.master_package_id}
              />
          }
          {/* {packageId==4 && 
            <FareOutstation/>
          } */}
          {/* {packageId==2 && 
              <FarePoint />
          } */}
       
          {/* <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
          
                <Grid item xs={12} md={6}>
                     <GenericInput type={'date'} label={'Start Date'}  value={''}/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericInput type={'date'} label={'End Date'}  value={''}/>
                </Grid>
              </Grid>
          </Grid> */}

          <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
       
            <Grid item xs={12} md={6}>
              <GenericInput 
              type={'time'} 
              label={'Night Charges Start Time'} 
              name="night_start_time"
              value={'22:00'} 
              onChange={(e)=>{
                handlerChange(e)
              }}
              />
            </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput type={'time'} 
             value={'06:00'} 
             label={'Night Charges End Time'} 
             name="night_end_time"
             onChange={(e)=>{
               handlerChange(e)
             }}
             />
          </Grid>
          </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
                <GenericSwitch label={'Active'} required />
              </Grid>

          <Grid item xs={12} md={2}>
            <Button variant="contained" 
            fullWidth sx={{ my: 3 }} 
            style={{marginTop:0}}
            onClick={saveData} >
              Add Fare
            </Button>
          </Grid>
          
        </Grid>
        </Paper>
    </>
  );
}
