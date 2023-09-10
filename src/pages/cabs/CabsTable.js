import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { fontWeight } from "@mui/system";
//import Widget from "../../components/Widget/Widget";
//import Table from "../dashboard/components/Table/Table";

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

const columns = [
  {
   name: "cab_name",
   label: "Cab Name",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "model_year",
   label: "Model Year",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "category_name",
   label: "Category Name",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "cab_seat",
   label: "Cab Seat",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
    name: "no_bags",
    label: "No of bags",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "amenities",
    label: "Amenities",
    options: {
     filter: true,
     sort: false,
    }
  },
    {
      name: "status",
      label: "Status",
      options: {
       filter: true,
       sort: false,
    }
   },
 ];

export default function CabsTable({cabList}) {
  const classes = useStyles();
  const datatableData = cabList;
  return (
    <>
       <MUIDataTable
            title="Cab Category List"
            data={datatableData}
            columns={columns}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
