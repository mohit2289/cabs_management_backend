import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import {getAllcityList} from '../../services/city/index';

//
const datatableData = [
  ["Bihar", "Patna", "803221", "2", "chekbox", "chekbox", "chekbox", "chekbox", "Visible", "Edid   Delete"],
  ["Delhi", "Delhi", "110005", "3", "chekbox", "chekbox", "chekbox", "chekbox", "Visible", "Edid   Delete"],
 
];

const columns = [
  {
    name: "id",
    label: "Id",
    options: {
     filter: true,
     sort: true,
    }
   },

  {
   name: "name",
   label: "City Name",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "state_name",
   label: "State Name",
   options: {
    filter: true,
    sort: false,
   }
  }
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
 
  const [cityList, setCityList] = useState([]);

  useEffect(()=>{
    getAllCityData();
  },[])

  const getAllCityData = async() => {
    const response = await getAllcityList();
    if (response.data) {
      setCityList(response.data);
    }
  }

  return (
    <>
       <MUIDataTable
            title="City LIst"
            data={cityList}
            columns={columns}
            options={{
              filterType: "checkbox",
            }}
          />
    </>
  );
}
