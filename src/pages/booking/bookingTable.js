import React, {useEffect, useState} from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

import {getAllBookingList} from '../../services/booking/index';


const columns = [
  {
   name: "booking_reference",
   label: "PNR",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
    name: "booking_date",
    label: "Date of Booking",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "travel_date",
    label: "Journey Date",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "booking_type",
    label: "Booking Type",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "vehice_name",
    label: "Vehicle Name",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "name",
    label: "Customer Name",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "mobile",
    label: "Mobile",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "",
    label: "Pickup City",
    options: {
     filter: true,
     sort: true,
    }
   },

    {
    name: "pickup_address",
    label: "Pickup Address",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "drop_address",
    label: "Drop Address",
    options: {
     filter: true,
     sort: true,
    }
   }
]

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function CabsTable() {
  const classes = useStyles();

  const [bookingList ,setBookingList] = useState([]);

  useEffect(()=>{
    getAllBookingData();
  },[])

  const getAllBookingData = async() => {
    const response = await getAllBookingList();
    if (response.data) {
      setBookingList(response.data);
    }
  }

  return (
    <>
       <MUIDataTable
            title="Booking LIst"
            data={bookingList}
            columns={columns}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
