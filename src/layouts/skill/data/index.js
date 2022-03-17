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
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import { useEffect, useState } from "react";

export default function data() {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    axios
      .get("https://theweekendexpertise.azurewebsites.net/api/v1/skills")
      .then((res) => {
        setSkill(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function dataTable() {
    return skill.map((item, index) => ({
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
      { Header: "Kỹ năng", accessor: "name", align: "center" },
      { Header: "Trạng thái", accessor: "status", align: "center" },
      { Header: "Thao tác", accessor: "action", align: "center" },
    ],

    rows: dataTable(),
  };
}
