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
  ["Bihar", "Patna", "803221", "2", "chekbox", "chekbox", "chekbox", "chekbox", "Visible", "Edid   Delete"],
  ["Delhi", "Delhi", "110005", "3", "chekbox", "chekbox", "chekbox", "chekbox", "Visible", "Edid   Delete"],
 
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

export default function CityTable() {
  const classes = useStyles();
  return (
    <>
       <MUIDataTable
            title="City LIst"
            data={datatableData}
            columns={["State", "City", "Pin Code", "Sort Order", 
            "Local", "Point to Point", "Outstaton", "Transfer", "Status", "Action"]}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
