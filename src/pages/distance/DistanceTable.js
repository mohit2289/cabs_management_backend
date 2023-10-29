import React , { useState, useEffect }from "react";
//import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

import {getAllCityDistance} from '../../services/distance/index';

const columns = [
  {
   name: "from_city_name",
   label: "From Name",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "to_city_name",
   label: "To City",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "distance",
   label: "Distance",
   options: {
    filter: true,
    sort: false,
   }
  } 
 ];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function DistanceTable() {
  const classes = useStyles();
  const [distanceList, setDistanceList] = useState([]);

  useEffect(()=>{
    getAllDistanceList();
  },[])

  const getAllDistanceList = async() => {
    const response = await getAllCityDistance();
    if (response.data) {
      setDistanceList(response.data);
    }
  }
  return (
    <>
       <MUIDataTable
            title="Distance LIst"
            data={distanceList}
            columns={columns}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
