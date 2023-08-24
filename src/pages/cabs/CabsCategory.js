import React, { useState, useEffect }  from "react";
import { Box, Button, Paper, Grid } from '@mui/material';
// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";

import GenericInput from '../../common-components/form-elements/genericInput';
//import GenericDropdown from '../../common-components/form-elements/genericDropdown';
import GenericCheckbox from "../../common-components/form-elements/genericCheckbox";
//import MUIDataTable from "mui-datatables";
import GenericSwitch from "../../common-components/form-elements/genericSwitch";
import CabCategoryTable from "../tables/CabCategoryTable";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addCabCategory, getCabCategory} from '../../services/cab/index';

export default function CabsCategoryPage() {
  var classes = useStyles();
  const [isToggled, setIsToggled] = useState(false);
  const [data, setData] = useState({
    'category_name': "",
    'seat_no': "",
    'seat_code':""
  });
  const onToggle = () => setIsToggled(!isToggled);

  useEffect(() => {
    getCabCategoryData();
  }, []); 
  const [categoryList, setCategoryList] = useState([]);

  const handlerChange = (evt) => {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value
    });
  };

const saveData = async () => {
  try {
      let status = (isToggled)?1:0;
      const postData = data;
      postData.status = status;
      const resp  = await addCabCategory(postData);
      toast.success('Category saved successfully');
  } catch (error) {
      //toast.error(error.message);
  }
}


const getCabCategoryData  = async () => {
  const getData = await getCabCategory();
  if (getData.data) {
       setCategoryList(getData.data);
  }
}



  return (
    <>
      {/* <PageTitle title="Driver" /> */}
      <Paper sx={{ padding: '30px' }}>
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Add Cab Category 
          </Typography>
        </Box>
      <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
           <GenericInput 
                label={'Vehicle Category Name'} 
                name='category_name' required 
                onChange={(e) => {
                  handlerChange(e)
                }} />
          </Grid>
          <Grid item xs={12} md={6}>
          <GenericInput label={'Vehicle Segment By Seat'}
           name='seat_no' required 
           onChange={(e) => {
             handlerChange(e)
           }}   />
          </Grid>
          <Grid item xs={12} md={6}>
          <GenericInput label={'Vehicle Segment By Code'} required name='seat_code' onChange={(e) => {
             handlerChange(e)
           }} />
          </Grid>
                    
          <Grid item xs={12} md={3}>
                <GenericSwitch label={'Visible'} required name='active' checked={isToggled} onChange={onToggle} />
          </Grid>

          <Grid item xs={12} md={12}>
            <Grid item xs={2} md={2}>
              <Button variant="contained" fullWidth sx={{ my: 3 }} onClick={saveData}> Save </Button>
            </Grid>    
          </Grid>    

        </Grid>
     
        </Paper>

        <Grid container spacing={4} sx={{ marginTop:'20px' }}>
          <Grid item xs={12}>
           <CabCategoryTable categoryList= {categoryList} />
          </Grid>
          </Grid>
        
    </>
  );
}
