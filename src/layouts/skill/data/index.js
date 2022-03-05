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

export const Author = ({ image, name, email }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1} p={1}>
    <MDAvatar src={image} name={name} size="sm" />
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

// function getMajorString(majorList) {
//   let majors = "";
//   // eslint-disable-next-line array-callback-return
//   majorList.map((major) => {
//     // eslint-disable-next-line eqeqeq
//     if (majors != "") {
//       majors = `${majors}, ${major}`;
//     } else {
//       majors = major;
//     }
//   });

//   return majors;
// }

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
    return skill.map((item) => ({
      // author: <Author image={item.image} name={item.fullname} email="" />,
      // function: <Job title={item.listMajor} description="" />,

      // birthday: (
      //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //     {item.birthday}
      //   </MDTypography>
      // ),
      // address: (
      //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //     {item.address}
      //   </MDTypography>
      // ),
      id: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.id}
        </MDTypography>
      ),
      name: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.name}
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
      { Header: "ID", accessor: "id", width: "25%", align: "left" },
      // { Header: "Chuyên ngành", accessor: "function", align: "center" },
      { Header: "Kỹ năng", accessor: "name", align: "center" },
      { Header: "Trạng thái", accessor: "status", align: "center" },
      { Header: "Thao tác", accessor: "action", align: "center" },
    ],

    rows: dataTable(),
  };
}
