import React, { useState, useEffect }  from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

import {getAllFareDetails} from '../../services/fare/index';

const columns = [{
  name: "city_name",
  label: "City",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "package_mode",
  label: "Booking Type",
  options: {
   filter: true,
   sort: true,
  }
 }, 
 {
  name: "local_pkg_name",
  label: "Package",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "vehicle_name",
  label: "vehicle Model",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "local_pkg_fare",
  label: "Fixed Fare",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "per_km_charge",
  label: "Fare/Km",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "per_hr_charge",
  label: "Fare/Extra Hour",
  options: {
   filter: true,
   sort: true,
  }
 },

];

const useStyles = makeStyles (theme => ({
  tableOverflow: {
    overflow: 'auto'
  },
 
}))

export default function DriverTable() {
  const classes = useStyles();
  const [fareList, setFareList] = useState([]);

  useEffect(()=>{
    getAllFare();
  },[])

  const getAllFare = async() => {
    const response = await getAllFareDetails();
    if (response.data) {
      setFareList(response.data);
    }
  }
  return (
    <>
    
       <MUIDataTable
            title="Fare LIst"
            data={fareList}
            columns={columns}
            options={{
              filter: true,
			  filterType: 'dropdown',
			  responsive: 'standard',
			   customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.alert("EDIT");
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    const { data } = this.state;
                    data.shift();
                    this.setState({ data });
                  }}
                >
                  Delete
                </button>
              </>
            );
			   }
            }}
          />
    </>
  );
}
