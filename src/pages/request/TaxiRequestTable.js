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
  ["1", "Rajesh", "0000000000", "info@triloki.com", "Patan", "Bihar", "Kankarbag, Patna", "Sedan", "Bolero", "Confirm Delete"],
  ["1", "Rajesh", "0000000000", "info@triloki.com", "Patan", "Bihar", "Kankarbag, Patna", "Sedan", "Bolero", "Confirm Delete"],
 
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function TaxiRequestTable() {
  const classes = useStyles();
  return (
    <>
       <MUIDataTable
            title="View Attach Taxi Request "
            data={datatableData}
            columns={["S.No.", "Name", "MobileNo.", "EmailId", "City", 
            "State", "Addrerss", "CabType", "CabName", "Action"]}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
