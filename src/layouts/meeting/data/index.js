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
import Tooltip from "@mui/material/Tooltip";
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
export const Job = ({ title, description }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {title}
    </MDTypography>
    <MDTypography variant="caption">{description}</MDTypography>
  </MDBox>
);

// function getMember(memberImage) {
//   let images = "";
//   memberImage.map((image) => {
//     if (images !== "") {
//       images = `${images} ${image}`;
//     } else {
//       images = image;
//     }
//   });
//   return images;
// }
export const Avatars = ({ image }) => (
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
function getSlot(slot) {
  const SLOT = [
    "07:00 - 08:30",
    "08:45 - 10:15",
    "10:30 - 12:00",
    "12:30 - 14:00",
    "14:15 - 15:45",
    "16:00 - 17:30",
  ];
  switch (slot) {
    case 1:
      return SLOT[1];
    case 2:
      return SLOT[2];
    case 3:
      return SLOT[3];
    case 4:
      return SLOT[4];
    case 5:
      return SLOT[5];
    case 6:
      return SLOT[6];
    default:
  }
  return getSlot;
}
export default function data() {
  const [meeting, setMeeting] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://theweekendexpertise.azurewebsites.net/api/v1/admin/sessions?pageIndex=1&pageSize=5"
      )
      .then((res) => {
        console.log(res.data);
        console.log(meeting);
        // const meetings = res.data;
        // meetings.map((abc) => {
        //   abc.listMemberImage = getMember(abc.listMemberImage);
        // });
        // setMeeting(meetings)
        setMeeting(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function dataTable() {
    return meeting.map((item, index) => ({
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
        <MDBox display="flex" py={2}>
          <Avatars image={item.listMemberImage} />
        </MDBox>
      ),
      mentor: <Author image={item.mentorImage} name={item.mentorName} />,
      price: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.price}.000 VND
        </MDTypography>
      ),
      location: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.cafeName}
        </MDTypography>
      ),
      date_time: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.date}, {getSlot(item.slot)}
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
      { Header: "STT", accessor: "stt", width: "5%", align: "left" },
      { Header: "giảng viên", accessor: "mentor", width: "15%", align: "left" },
      { Header: "thành viên", accessor: "member", width: "25%", align: "left" },
      { Header: "giá", accessor: "price", align: "center" },
      { Header: "địa điểm", accessor: "location", align: "center" },
      { Header: "thời gian", accessor: "date_time", align: "center" },
      { Header: "trạng thái", accessor: "status", align: "center" },
    ],

    rows: dataTable(),
  };
}
