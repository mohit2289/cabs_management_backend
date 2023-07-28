import React from "react";
//import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
//import PageTitle from "../../components/PageTitle/PageTitle";
//import { fontWeight } from "@mui/system";
//import Widget from "../../components/Widget/Widget";
//import Table from "../dashboard/components/Table/Table";

// data
//import mock from "../dashboard/mock";

const datatableData = [
  ["Patna", "Bhagalpur", "200KM", "Edite  Delete   "],
  ["Patna", "Banka.", "240KM.", "Edite  Delete"],
 
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function DistanceTable() {
  const classes = useStyles();
  return (
    <>
       <MUIDataTable
            title="Distance LIst"
            data={datatableData}
            columns={["From City", "To City", "Distance", "Action"]}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
