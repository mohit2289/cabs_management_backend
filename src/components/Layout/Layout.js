import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {Box, IconButton, Link} from '@material-ui/core'
import Icon from '@mdi/react'

//icons
//import {
 // mdiFacebook as FacebookIcon,
//  mdiTwitter as TwitterIcon,
 // mdiGithub as GithubIcon,
//} from '@mdi/js'

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Driver from "../../pages/driver";
import Cabs from "../../pages/cabs";
import CabsCategory from "../../pages/cabs/CabsCategory";
import DriverList from "../../pages/driver/driverList"
import City from "../../pages/city/City";
import ViewCity from "../../pages/city/viewCity";
import AddAirBusRail from "../../pages/city/addAirBusRail";
import ViewAirBusRail from "../../pages/city/viewAirBusRail";
import Distance from "../../pages/distance/Distance";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import CabCategoryTable from "../../pages/tables/CabCategoryTable";
import Booking from "../../pages/booking/Booking"
import Fare from "../../pages/fare/Fare";
import FareView from "../../pages/fare/fareView"
import Payment from "../../pages/finance/Payment"
import AttachTaxiRequest from "../../pages/request/AttachTaxiRequest";
import ViewEnquiryPage from "../../pages/request/ViewEnquiry";
import AboutUs from "../../pages/cms/AboutUs";



// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/driver" component={Driver} />
              <Route path="/app/driverList" component={DriverList} />
              <Route path="/app/cabs" component={Cabs} />
              <Route path="/app/cabsCategory" component={CabsCategory} />
              <Route path="/app/city" component={City} />
              <Route path="/app/distance" component={Distance} />
              <Route path="/app/addAirBusRail" component={AddAirBusRail} />
              <Route path="/app/viewAirBusRail" component={ViewAirBusRail} />
              <Route path="/app/viewCity" component={ViewCity} />
              <Route path="/app/fareView" component={FareView} />
              <Route path="/app/fare" component={Fare} />
              <Route path="/app/booking" component={Booking} /> 
              <Route path="/app/finance" component={Payment} />
              <Route path="/app/request" component={AttachTaxiRequest} /> 
              <Route path="/app/ViewEnquiry" component={ViewEnquiryPage} /> 
              <Route path="/app/cms" component={AboutUs} />             
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/tables" component={Tables} />
              <Route path="/app/CabCategoryTable" component={CabCategoryTable} />
              <Route path="/app/notifications" component={Notifications} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>
            <Box
              mt={5}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent="space-between"
            >
            </Box>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
