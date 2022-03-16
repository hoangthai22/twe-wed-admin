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
import Tooltip from "@mui/material/Tooltip";
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
export const avatars = (members) =>
  members.map(([image]) => (
    <Tooltip placeholder="bottom">
      <MDAvatar
        src={image}
        size="xs"
        sx={{
          border: ({ borders: { borderWidth }, palette: { white } }) =>
            `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",

          "&:not(:first-of-type)": {
            ml: -1.25,
          },

          "&:hover, &:focus": {
            zIndex: "10",
          },
        }}
      />
    </Tooltip>
  ));
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
  const [bookingToday, setBookingToday] = useState([]);
  useEffect(() => {
    axios
      .get("https://theweekendexpertise.azurewebsites.net/status?pageIndex=1&pageSize=5")
      .then((res) => {
        console.log(res.data);
        console.log(bookingToday);
        setBookingToday(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function dataTable() {
    return bookingToday.map((item, index) => ({
      stt: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {index + 1}
        </MDTypography>
      ),
      session: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.subjectName}
        </MDTypography>
      ),
      member: (
        <MDBox display="flex" py={1}>
          {avatars([item.listMemberImage])}
        </MDBox>
      ),
      mentor: <Author image={item.mentorImage} name={item.mentorName} />,
      price: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.price}.000 VND
        </MDTypography>
      ),
      function: <Job title={item.listMajor} description="" />,

      location: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.cafeStreet}, {item.cafeDistric}
        </MDTypography>
      ),
      date_time: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.date}, slot: {item.slot}
        </MDTypography>
      ),
      status: (
        <MDBox ml={-1}>
          <MDBadge
            badgeContent={item.status ? "Confirm" : "2"}
            color="success"
            variant="gradient"
            size="sm"
          />
        </MDBox>
      ),
    }));
  }

  return {
    columns: [
      { Header: "STT", accessor: "stt", align: "left" },
      { Header: "giảng viên", accessor: "mentor", align: "center" },
      { Header: "thành viên", accessor: "member", width: "15%", align: "left" },
      { Header: "giá", accessor: "price", align: "center" },
      { Header: "địa điểm", accessor: "location", align: "center" },
      { Header: "thời gian", accessor: "date_time", align: "center" },
      { Header: "trạng thái", accessor: "status", align: "center" },
    ],

    rows: dataTable(),
  };
}
