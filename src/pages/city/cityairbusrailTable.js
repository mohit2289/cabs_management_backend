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
  ["Sardar Vallabhbhai Patel International Airport", "Ahmedabad", "Airport", "1", "Visible", "Edid   Delete"],
  ["Bandra Terminus", "Mumbai", "Railway Staion", "2", "Visible", "Edid   Delete"],
  ["Patna Bus Stand", "Patna", "Bus Stand", "3", "Visible", "Edid   Delete"],
 
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

export default function AirbusrailTable() {
  const classes = useStyles();
  return (
    <>
       <MUIDataTable
            title="Airport / Railway Station / Bus Stand"
            data={datatableData}
            columns={["Airport/Bus Stand/ Railway Station Name", "City Name", "Type", "Sort Order", "Status", "Action/Status"]}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
