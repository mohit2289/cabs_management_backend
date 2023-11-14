import React,{useEffect,useState} from "react";
//import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

import {getSearchCabData} from '../../services/fare/index';

const columns = [
  {
   name: "username",
   label: "User Name",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "mobile",
   label: "Mobile No.",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
    name: "pickup_city",
    label: "Pickup City",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "drop_city",
    label: "Drop City",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "pickup_address",
    label: "Pickup Address",
    options: {
     filter: true,
     sort: false,
    }
   },
  {
   name: "drop_address",
   label: "Address",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
    name: "package",
    label: "Local Package",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "module_name",
    label: "Module",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "pickup_date",
    label: "Pickup Date",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "pickup_time",
    label: "Pickup Time",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "added_date",
    label: "Created Date",
    options: {
     filter: true,
     sort: false,
    }
   },
 ];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function TaxiRequestTable() {

const [searchCabList ,setSearchCabList] = useState([]);

useEffect(()=>{
  getAllSearchCabData();
},[])

const getAllSearchCabData = async() => {
  const response = await getSearchCabData();
  if (response.data) {
    setSearchCabList(response.data);
  }
}
  return (
    <>
       <MUIDataTable
            title="View Attach Taxi Request "
            data={searchCabList}
            columns={columns}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
