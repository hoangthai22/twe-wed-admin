/* eslint-disable react/prop-types */
// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
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

  const Group = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Mentor = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "group", accessor: "group", width: "25%", align: "left" },
      { Header: "members", accessor: "members", width: "10%", align: "left" },
      { Header: "mentor", accessor: "mentor", align: "center" },
      { Header: "date/time", accessor: "date_time", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
    ],

    rows: [
      {
        group: <Group image={team2} name="abc" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        mentor: <Mentor image={team2} name="abc" email="john@creative-tim.com" />,
        date_time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/02/22__7h:45
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Done" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        group: <Group image={team2} name="abc" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        mentor: <Mentor image={team2} name="abc" email="john@creative-tim.com" />,
        date_time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/02/22__7h:45
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Done" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        group: <Group image={team2} name="abc" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        mentor: <Mentor image={team2} name="abc" email="john@creative-tim.com" />,
        date_time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/02/22__7h:45
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Done" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        group: <Group image={team2} name="abc" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        mentor: <Mentor image={team2} name="abc" email="john@creative-tim.com" />,
        date_time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/02/22__7h:45
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Done" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        group: <Group image={team2} name="abc" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        mentor: <Mentor image={team2} name="abc" email="john@creative-tim.com" />,
        date_time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/02/22__7h:45
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Done" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        group: <Group image={team2} name="abc" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        mentor: <Mentor image={team2} name="abc" email="john@creative-tim.com" />,
        date_time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/02/22__7h:45
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Done" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
    ],
  };
}
