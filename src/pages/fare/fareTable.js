import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { fontWeight } from "@mui/system";
//import Widget from "../../components/Widget/Widget";
//import Table from "../dashboard/components/Table/Table";
//import useStyles from "./styles";
// data
//import mock from "../dashboard/mock";

const datatableData = [
  ["01", "Patna", "Bhagalpur", "Local", "100km - 10Hrs", "SUV", "700", "12", "30", "100", "22-03-2024", "Viue  Edid  Delete"],
  ["01", "Patna", "Bhagalpur", "Local", "100km - 10Hrs", "SUV", "700", "12", "30", "100", "22-03-2024", "Viue  Edid  Delete"],
 
];

const useStyles = makeStyles (theme => ({
  tableOverflow: {
    overflow: 'auto'
  },
 
}))

export default function DriverTable() {
  const classes = useStyles();
  return (
    <>
    
       <MUIDataTable
            title="Fare LIst"
            data={datatableData}
            columns={["S.No.", "City", "DestinationCity", "Booking Type", "Package", "Vehicle Model", 
             "Fixed Fare", "Fare/Km", "Fare/Extra Hour", "StateEntry", "Valid Date", "Action/Status"]}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
