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
  ["SUV", "4+1", "4X", "Visible", "Edid  Update   Delete   "],
  ["HATCHBACK", "6+1.", "6X.", "Visible", "Edid  Update   Delete"],
 
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function CabCategoryTable() {
  const classes = useStyles();
  return (
    <>
       <MUIDataTable
            title="Cab Category LIst"
            data={datatableData}
            columns={["Vehicle Category", "Vehicle Segment by Seat", "Vehicle Segment by Code", "Status", "Action"]}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
