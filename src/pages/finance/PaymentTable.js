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
  ["1", "002", "01", "25-08-2023", "Local", "Rajesh", "1500", "1500", "0", "Paid", "View Bill  Edit Bill AddVoucher  "],
  ["2", "003", "02", "25-08-2023", "Local", "Rajesh", "1500", "500", "1000", "Partial", "View Bill  Edit Bill Add Voucher  "],
 
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
            title="Billing Invoice"
            data={datatableData}
            columns={["S.No.", "Book.Ref.No", "Invoice No", "Bill Date", 
            "Type", "Name", "Total", "Advance", "Balance", "Status", "Action"]}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
