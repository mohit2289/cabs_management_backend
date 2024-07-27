import React,{useEffect,useState} from "react";
//import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

import {getAllAttachTaxiList} from '../../services/attachtaxi/index';

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
    label: "Email",
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
    name: "state",
    label: "State",
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
    name: "cab_category",
    label: "Cab Category",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "cab_name",
    label: "Cab Name",
    options: {
     filter: true,
     sort: false,
    }
   }
 ];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function TaxiRequestTable() {

const [attachTaxiList ,setAttachTaxiList] = useState([]);

useEffect(()=>{
  getAttachTaxiListData();
},[])

const getAttachTaxiListData = async() => {
  const response = await getAllAttachTaxiList();
  if (response.data) {
    setAttachTaxiList(response.data);
  }
}

  return (
    <>
       <MUIDataTable
            title="View Attach Taxi Request "
            data={attachTaxiList}
            columns={columns}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
