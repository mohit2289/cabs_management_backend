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
  ["SUV", "4+1", "4+1", "SUV", "2021", "4+1", "4X", "Visible", "SUV", "4+1", "4X", "Visible", "Visible", "Edid  Update   Delete   "],
  ["SUV", "4+1", "4X", "Visible", "SUV", "4+1", "4X", "Visible", "SUV", "4+1", "4X", "Visible", "Visible", "Edid  Update   Delete   "],
 
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
            title="Cab Category LIst"
            data={datatableData}
            columns={["Vehicle Name", "Vehicle Image", "Vehicle Seat", "Category Name", 
            "Model Year", "Bags", "English S", "Uniform", "GPS", "TV", "Water B", "News P", "Music", "Action"]}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
