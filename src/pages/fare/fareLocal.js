import React from "react";
import { Grid } from '@mui/material';


import GenericInput from '../../common-components/form-elements/genericInput';
import GenericAutocomplete from '../../common-components/form-elements/genericAutocomplete';


export default function FareLocal(props) {
  const {localPackage, handleOnChange, handlerChange, packageId} = props;
  
  return (
    <>
      {/* <PageTitle title="Driver" /> */}

      
      <Grid item xs={12} md={12}>
      <Grid container spacing={2}>
            {(packageId=='1' &&  
              <Grid item xs={12} md={4}>
                  <GenericAutocomplete
                      name="local_package"
                      onChange={(e,val) => {
                        handleOnChange('local_package',val)
                      }} 
                      options={localPackage}
                      label={'Select Local Package'} 
                      />   
              </Grid>
              )}  
                <Grid item xs={12} md={4}>                
                  <GenericInput label={'Fixed Fare'} 
                    name="local_pkg_fare"
                    onChange={(e)=>{
                      handlerChange(e)
                    }}                   
                  />           
              </Grid>
              <Grid item xs={12} md={4}>
                <GenericInput label={'Fare Per Kms'}
                 name="per_km_charge"
                 onChange={(e)=>{
                   handlerChange(e)
                 }}  />
              </Grid>

              {packageId=='1' &&  
                <Grid item xs={12} md={4}>
                  <GenericInput label={'Fare Per Extra Hours'} 
                  name="per_hr_charge"
                  onChange={(e)=>{
                    handlerChange(e)
                  }} />
                </Grid>
              }

             
                <Grid item xs={12} md={4}>
                  <GenericInput label={'Driver allowance'} 
                  name="driver_allowance"
                  onChange={(e)=>{
                    handlerChange(e)
                  }} />
                </Grid>
             
            
              {/* <Grid item xs={12} md={4}>
                <GenericInput label={'Waiting Time'} />
              </Grid> 
              <Grid item xs={12} md={4}>
                <GenericInput label={'Extra Waiting Time Charges'} />
              </Grid>  */}
             
               <Grid item xs={12} md={4}>
                <GenericInput 
                label={'Night Charges Extra'}
                name='night_charge'
                 onChange={(e)=>{
                   handlerChange(e)
                 }}
                />
              </Grid>
          </Grid>
        </Grid>
          
    </>
  );
}
