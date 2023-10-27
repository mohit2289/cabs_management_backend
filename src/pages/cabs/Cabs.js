import React, { useState, useEffect } from "react";
import { Box, Button, Paper, Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// styles
import useStyles from "./styles";

// components
import { Typography } from "../../components/Wrappers/Wrappers";

import GenericInput from '../../common-components/form-elements/genericInput';
import GenericAutocomplete from '../../common-components/form-elements/genericAutocomplete';
import GenericCheckbox from "../../common-components/form-elements/genericCheckbox";
import GenericSwitch from "../../common-components/form-elements/genericSwitch";
import CabsTableable from "./CabsTable";
import {getCabCategory, addCabsDetails, getAllCabs} from '../../services/cab/index';

export default function CabsPage() {
  var classes = useStyles();
  const [options, setOptions ] = useState([]);
  const [bags, setBags] = useState([
    { id:1, label:'1'},
    { id:2, label:'2'},
    { id:3, label:'3'},
    { id:4, label:'4'},
    { id:5, label:'5'},
    { id:5, label:'6'},
    { id:5, label:'7'},
    { id:5, label:'8'},
    { id:5, label:'9'},
    { id:5, label:'10'}
  ])
  const [isToggled, setIsToggled] = useState(false);
  const [seatSegment, setSeatSegment] = useState('');
  const [data, setData] = useState({
    'cab_name': "",
    'model_year': null,
    'category_id': "",
    'cab_seat': "",
    'no_bags': null,
    'amenities': [],
  });
  const [cabList, setCabList] = useState([]);
  const onToggle = () => setIsToggled(!isToggled);

  useEffect(()=>{
    getCabCategoryData();
    getAllCabsdata();
  },[])

  const getAllCabsdata = async() => {
    const cabsData = await getAllCabs();
    if (cabsData.data) {
      setCabList(cabsData.data);
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
            seat: elem.seating_capacity
          } 
        ));
        setOptions(categoryObj);
    }
  }

  const handlerChange = (evt) => {
    // const value = evt.target.value;
    const { value, checked } = evt.target;
    const { amenities } = data;
    if (checked) {
      setData({
        ...data,
        amenities: [...amenities, value],
      });
    }else{   
        setData({
          ...data,
          [evt.target.name]: value
        });
     
    }
  };

  const handleOnChange = (event, value) => {
    if(event=='category_id'){
      setSeatSegment(value.seat);
      setData({
        ...data,
        ['category_id']: value.id,
        ['cab_seat']: value.seat,
      });
    }
    if(event=='no_bags'){
      setData({
        ...data,
        ['no_bags']: value.label
        });
    }
  };
   

  const saveData = async () => {
    try {
      let status = (isToggled) ? 1 : 0;
      const postData = data;
      postData.status = status;
      const resp  = await addCabsDetails(postData);
      toast.success('Cab saved successfully');
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
            Add Cab Details
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <GenericInput
              label={'Vehicle Model Name'}
              name={'cab_name'}
              onChange={(e) => {
                handlerChange(e)
              }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericInput label={'Model Year'}
              type={Number}
              name='model_year'
              onChange={(e) => {
                handlerChange(e)
              }} />
          </Grid>
          <Grid item xs={12} md={4}>         
          <GenericAutocomplete  
              name="category_id"
              onChange={(e,val) => {
                handleOnChange('category_id',val)
              }} 
              options={options}
              label={'Select Vehicle Category'} 
          />
          </Grid>

          <Grid item xs={12} md={4}>
          <GenericInput 
              label={'Vehicle Segment By Seat'}
              type={Number}
              name={'cab_seat'}
              value={seatSegment}
          />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <GenericAutocomplete 
              label={'No Of Bags'}
              name={'no_bags'}
              options={bags}
              onChange={(e,val) => {
                handleOnChange('no_bags',val)
              }}  />
          </Grid>

          <Grid item xs={12} md={4}>
            <GenericInput label={''} type={'file'} required helperText="Upload Vehicle Image" />
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(English Speaking Driver )'}
                  name={"amenities"}
                  value="English Speaking Driver"
                  onChange={(e) => {
                    handlerChange(e)
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(Uniform Driver)'}
                  name={"amenities"}
                  value={"Uniform Driver"}
                  onChange={(e) => {
                    handlerChange(e)
                  }} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(GPS )'}
                  name="amenities"
                  value={"GPS"}
                  onChange={(e) => {
                    handlerChange(e)
                  }} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(Water Bottles )'}
                  name="amenities"
                  value={"Water Bottles"}
                  onChange={(e) => {
                    handlerChange(e)
                  }} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(LCD TV )'}
                  name="amenities"
                  value={"LCD TV"}
                  onChange={(e) => {
                    handlerChange(e)
                  }} />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(Newspaper )'}
                  name="amenities"
                  value={"Newspaper"}
                  onChange={(e) => {
                    handlerChange(e)
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericCheckbox label={'(Music System )'}
                  name="amenities"
                  value={"Music System"}
                  onChange={(e) => {
                    handlerChange(e)
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericSwitch label={'Visible'} required name='active' checked={isToggled} onChange={onToggle} />
              </Grid>
            </Grid>
          </Grid>




          <Grid item xs={12} md={2}>
            <Button variant="contained" fullWidth sx={{ my: 3 }} onClick={saveData}>
              save
            </Button>
          </Grid>

        </Grid>
      </Paper>

      <Grid container spacing={4} sx={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <CabsTableable cabList={cabList}/>
        </Grid>
      </Grid>
    </>
  );
}
