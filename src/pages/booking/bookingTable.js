import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { fontWeight } from "@mui/system";
//import Widget from "../../components/Widget/Widget";
//import Table from "../dashboard/components/Table/Table";

// data
//import mock from "../dashboard/mock";

const datatableData = [
  ["1", "24-07-2023 08:50 PM", "Pick Up Date   16-06-2023 Pick Up Time 11:15 AM", "Trip Type:  One way Trip Mode: One way", "SEDAN 4+1 Maruti Suzuki Swift Dzire OR SIMILAR(4+1 )", "ajay Passengers - 1", "7870141333", "Patna ,Bihar", "Patna Bihar", "Rajgir", "View Fare    Confirm   Assign   Edit   Cancle  Broadcast   "],
  ["1", "24-07-2023 08:50 PM", "Pick Up Date   16-06-2023 Pick Up Time 11:15 AM", "Trip Type:  One way Trip Mode: One way", "SEDAN 4+1 Maruti Suzuki Swift Dzire OR SIMILAR(4+1 )", "ajay Passengers - 1", "7870141333", "Patna ,Bihar", "Patna Bihar", "Rajgir", "View Fare    Confirm   Assign   Edit   Cancle  Broadcast   "],
 
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function CabsTable() {
  const classes = useStyles();
  return (
    <>
       <MUIDataTable
            title="Booking LIst"
            data={datatableData}
            columns={["PNR", "Date of Booking", "Date if Jurney", "Trip Type", 
            "Vehicle", "Customer Name", "Phone No", "Home City", "Pickup Add", "Dropup Add", "Action"]}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
