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
  ["code34", "Raman", "Image", "SUV", "9999999999", "20-05-2027", "01-03-2023", "22-03-2024", "Patna, Bihar", "Edid  Update   Delete"],
  ["code34", "Raman", "Image", "SUV", "9999999999", "20-05-2027", "01-03-2023", "22-03-2024", "Patna, Bihar", "Edid  Update   Delete"],
 
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
  return (
    <>
       <MUIDataTable
            title="Driver LIst"
            data={datatableData}
            columns={["Driver Code", "Driver Name", "Driver Image", "Vehicle Model", 
            "Mobile No.", "DL No./Expiry Date", "Joining Date", "Expiry Date", "City, State", "Action/Status"]}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
