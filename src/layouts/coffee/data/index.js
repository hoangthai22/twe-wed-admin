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
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useEffect, useState } from "react";

export const Coffee = ({ image, name, email }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1} p={1}>
    <MDAvatar src={image} name={name} size="lg" />
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
      <MDTypography variant="caption">{email}</MDTypography>
    </MDBox>
  </MDBox>
);
export const Job = ({ title, description }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {title}
    </MDTypography>
    <MDTypography variant="caption">{description}</MDTypography>
  </MDBox>
);

export default function data() {
  const [coffees, setCoffees] = useState([]);
  // const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios
      .get("https://theweekendexpertise.azurewebsites.net/api/v1/cafe?pageIndex=1&pageSize=20")
      .then((res) => {
        console.log(res.data);
        console.log(coffees);
        setCoffees(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function dataTable() {
    return coffees.map((item, index) => ({
      stt: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {index + 1}
        </MDTypography>
      ),
      name: <Coffee image={item.image} name={item.name} email="" />,

      description: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.description}
        </MDTypography>
      ),
      address: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.street}, {item.distric}
        </MDTypography>
      ),
      time: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.openTime} - {item.closeTime}
        </MDTypography>
      ),
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="Active" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
    }));
  }

  return {
    columns: [
      { Header: "STT", accessor: "stt", align: "left" },
      { Header: "Tên coffee", accessor: "name", width: "20%", align: "left" },
      { Header: "Địa chỉ", accessor: "address", width: "20%", align: "left" },
      { Header: "Thời gian hoạt động", accessor: "time", width: "15%", align: "left" },
      { Header: "Mô tả ", accessor: "description", align: "center" },
      { Header: "Trạng thái", accessor: "status", align: "center" },
      { Header: "Thao tác", accessor: "action", align: "left" },
    ],

    rows: dataTable(),
  };
}
