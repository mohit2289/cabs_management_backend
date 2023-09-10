import React, { useState, useEffect }  from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

import {getAllDriverData} from '../../services/driver/index';

const columns = [
  {
   name: "driver_name",
   label: "Driver Name",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "driver_mobile",
   label: "Mobile No.",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "driver_email",
   label: "Driver Email",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
    name: "pincode",
    label: "Pincode",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "city",
    label: "City",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "locality",
    label: "locality",
    options: {
     filter: true,
     sort: false,
    }
   },
  {
   name: "address",
   label: "Address",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
    name: "aadhar_number",
    label: "Aadhar Numer",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "pan_number",
    label: "Pan Number",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "vehicle_category",
    label: "Vehicle category",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "vehicle_name",
    label: "Vehicle name",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "dl_number",
    label: "Driver License",
    options: {
     filter: true,
     sort: false,
    }
   },
 ];

const useStyles = makeStyles (theme => ({
  tableOverflow: {
    overflow: 'auto'
  },
  tableRow: {
    height: '10'
  },
  MUITableleCell: {
    padding: '10px !important'
  }
}))

export default function DriverTable() {
  const classes = useStyles();
  const [driverList, setDriverList] = useState([]);

  useEffect(()=>{
    getAllDriver();
  },[])

  const getAllDriver = async() => {
    const response = await getAllDriverData();
    if (response.data) {
      setDriverList(response.data);
    }
  }

  return (
    <>
       <MUIDataTable
            title="Driver LIst"
            data={driverList}
            columns={columns}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
