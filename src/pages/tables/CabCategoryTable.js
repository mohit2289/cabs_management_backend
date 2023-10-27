import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
  {
   name: "vehicle_type",
   label: "Vehicle Category",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "seating_capacity",
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
