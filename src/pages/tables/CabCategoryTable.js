import React ,{useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import {getCabCategory} from '../../services/cab/index';

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

const columns = [
  {
   name: "category_name",
   label: "Vehicle Category",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "seat_no",
   label: "Vehicle Segment by Seat",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "seat_code",
   label: "Vehicle Segment by Code",
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
 

export default function CabCategoryTable({categoryList}) {
  const classes = useStyles();
  const datatableData = categoryList;

  return (
    <>
       <MUIDataTable
            title="Cab Category LIst"
            data={datatableData}
            columns={columns}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
