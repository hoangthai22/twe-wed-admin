/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
// import MDInput from "components/MDInput";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
// import { navbarRow } from "examples/Navbars/DashboardNavbar/styles";
// Data
import authorsTableData from "layouts/mentor/data/authorsTableData";
import { useEffect, useState } from "react";
import axios from "axios";

function Tables() {
  const { columns, rows } = authorsTableData();
  const [major, setMajor] = useState([]);

  // const techCompanies = [
  //   { label: "BigData", value: 1 },
  //   { label: "Bussiness", value: 2 },
  //   { label: "Commerce", value: 3 },
  //   { label: "IT", value: 4 },
  // ];
  useEffect(() => {
    let newList = [];
    axios
      .get("https://theweekendexpertise.azurewebsites.net/api/v1/majors")
      .then((res) => {
        const majors = res.data;
        return majors;
      })
      .then((result) => {
        // eslint-disable-next-line array-callback-return
        result.map((item) => {
          const value = { label: item.name, value: item.id };
          newList = [...newList, value];
        });
        setMajor(newList);
        const data = rows;
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleSelect(e) {
    axios
      .get(
        `https://theweekendexpertise.azurewebsites.net/api/v1/mentors/filter?major=${e.label}&pageIndex=1&pageSize=10`
      )
      .then((res) => {
        const mentors = res.data;
        console.log(mentors);
      })

      .catch((error) => console.log(error));
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDBox justifyContent="space-between" alignItems="center">
                  <MDTypography variant="h6" color="white">
                    Danh sách mentor
                  </MDTypography>
                  <MDBox>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4">
                          <Select
                            options={major}
                            title="Filter..."
                            onChange={(e) => handleSelect(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </MDBox>
                  {/* <MDInput margin="50px" label="Search by name" /> */}
                </MDBox>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted
                  entriesPerPage
                  showTotalEntries
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
