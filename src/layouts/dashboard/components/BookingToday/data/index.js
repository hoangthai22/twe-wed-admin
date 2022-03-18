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
    <MDAvatar src={image} name={name} size="lg" />
    <MDBox ml={1} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium" fontSize="15px">
        {name}
      </MDTypography>
    </MDBox>
  </MDBox>
);
export const Avatars = ({ image }) => (
  <Tooltip placeholder="bottom">
    <MDAvatar
      src={image}
      size="sm"
      sx={{
        border: ({ borders: { borderWidth }, palette: { white } }) =>
          `${borderWidth[1]} solid ${white.main}`,
        cursor: "pointer",
        position: "relative",

        "&:not(:first-of-type)": {
          ml: -1,
        },

        "&:hover, &:focus": {
          zIndex: "10",
        },
      }}
    />
  </Tooltip>
);

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
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="bold"
          fontSize="15px"
        >
          {index + 1}
        </MDTypography>
      ),
      session: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="bold"
          fontSize="15px"
        >
          {item.subjectName}
        </MDTypography>
      ),
      member: (
        <MDBox display="flex" py={1}>
          {item.listMemberImage.map((image) => (
            <Avatars image={image} />
          ))}
        </MDBox>
      ),
      mentor: <Author image={item.mentorImage} name={item.mentorName} />,
      price: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="bold"
          fontSize="15px"
        >
          {item.price}.000 VND
        </MDTypography>
      ),

      location: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="bold"
          fontSize="15px"
        >
          {item.cafeName}
        </MDTypography>
      ),
      date_time: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="bold"
          fontSize="15px"
        >
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
            fontSize="15px"
          />
        </MDBox>
      ),
    }));
  }

  return {
    columns: [
      { Header: "STT", accessor: "stt", width: "5%", align: "left" },
      { Header: "giảng viên", accessor: "mentor", align: "left" },
      { Header: "thành viên", accessor: "member", width: "25%", align: "left" },
      { Header: "giá", accessor: "price", align: "center" },
      { Header: "địa điểm", accessor: "location", align: "center" },
      { Header: "thời gian", accessor: "date_time", align: "center" },
      { Header: "trạng thái", accessor: "status", align: "center" },
    ],

    rows: dataTable(),
  };
}
