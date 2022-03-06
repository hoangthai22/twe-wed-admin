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

export const Author = ({ image, name }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1} p={1}>
    <MDAvatar src={image} name={name} size="sm" />
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
      {/* <MDTypography variant="caption">{email}</MDTypography> */}
    </MDBox>
  </MDBox>
);
export const Job = ({ title }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {title}
    </MDTypography>
    {/* <MDTypography variant="caption">{description}</MDTypography> */}
  </MDBox>
);

function getMajorString(majorList) {
  let majors = "";
  // eslint-disable-next-line array-callback-return
  majorList.map((major) => {
    // eslint-disable-next-line eqeqeq
    if (majors != "") {
      majors = `${majors}, ${major}`;
    } else {
      majors = major;
    }
  });

  return majors;
}

export default function data() {
  const [mentor, setMentor] = useState([]);
  useEffect(() => {
    axios
      .get("https://theweekendexpertise.azurewebsites.net/api/v1/mentors")
      .then((res) => {
        const mentors = res.data;
        // eslint-disable-next-line array-callback-return
        mentors.map((item) => {
          // eslint-disable-next-line no-param-reassign
          item.listMajor = getMajorString(item.listMajor);
          const day = item.birthday.split(" ")[0];
          // eslint-disable-next-line no-param-reassign
          item.birthday = day;
        });
        setMentor(mentors);
      })
      .catch((error) => console.log(error));
  }, []);

  function dataTable() {
    return mentor.map((item, index) => ({
      stt: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {index + 1}
        </MDTypography>
      ),
      session: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.birthday}
        </MDTypography>
      ),
      member: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.birthday}
        </MDTypography>
      ),
      mentor: <Author image={item.image} name={item.fullname} />,
      price: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.birthday}
        </MDTypography>
      ),
      function: <Job title={item.listMajor} description="" />,

      location: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.address}
        </MDTypography>
      ),
      date_time: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.address}
        </MDTypography>
      ),
      phone: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.phone}
        </MDTypography>
      ),
      status: (
        <MDBox ml={-1}>
          <MDBadge
            badgeContent={item.status ? "Active" : "InActive"}
            color="success"
            variant="gradient"
            size="sm"
          />
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
      { Header: "session", accessor: "session", width: "25%", align: "left" },
      { Header: "thành viên", accessor: "member", width: "10%", align: "left" },
      { Header: "giảng viên", accessor: "mentor", align: "center" },
      { Header: "giá", accessor: "price", align: "center" },
      { Header: "địa điểm", accessor: "location", align: "center" },
      { Header: "thời gian", accessor: "date_time", align: "center" },
      { Header: "điện thoại", accessor: "phone", align: "left" },
      { Header: "trạng thái", accessor: "status", align: "center" },
    ],

    rows: dataTable(),
  };
}
