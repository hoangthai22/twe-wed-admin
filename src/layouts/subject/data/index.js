/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import axios from "axios";
import MDBadge from "components/MDBadge";
import MDBox from "components/MDBox";
import Icon from "@mui/material/Icon";
import MDTypography from "components/MDTypography";
import { useEffect, useState } from "react";

export default function data() {
  const [subject, setSubject] = useState([]);
  useEffect(() => {
    axios
      .get("https://theweekendexpertise.azurewebsites.net/api/v1/subjects?pageIndex=1&pageSize=20")
      .then((res) => {
        setSubject(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function dataTable() {
    return subject.map((item, index) => ({
      stt: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          {index + 1}
        </MDTypography>
      ),
      id: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          {item.id}
        </MDTypography>
      ),
      name: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          {item.name}
        </MDTypography>
      ),
      majorID: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          {item.majorId}
        </MDTypography>
      ),
      status: (
        <MDBox ml={-1}>
          <MDBadge
            badgeContent="Active"
            color="success"
            variant="gradient"
            size="sm"
            fontSize="13.5px"
          />
        </MDBox>
      ),
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
            edit
          </Icon>
        </MDTypography>
      ),
    }));
  }

  return {
    columns: [
      { Header: "STT", accessor: "stt", align: "left" },
      { Header: "ID", accessor: "id", width: "25%", align: "left" },
      { Header: "Subject", accessor: "name", align: "center" },
      { Header: "MajorID", accessor: "majorID", align: "center" },
      { Header: "Trạng thái", accessor: "status", align: "center" },
      { Header: "Thao tác", accessor: "action", align: "center" },
    ],

    rows: dataTable(),
  };
}
