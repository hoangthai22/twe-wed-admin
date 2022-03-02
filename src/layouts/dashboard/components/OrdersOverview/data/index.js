/* eslint-disable react/prop-types */
// @mui material components
import Tooltip from "@mui/material/Tooltip";
import Rating from "@mui/material/Rating";
import * as React from "react";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const [value] = React.useState(2);
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
      { Header: "group", accessor: "group", width: "10%", align: "left" },
      { Header: "members", accessor: "members", width: "10%", align: "left" },
      { Header: "mentor", accessor: "mentor", width: "15%", align: "center" },
      { Header: "feedback", accessor: "feedback", width: "15%", align: "center" },
      { Header: "rating", accessor: "rating", align: "center" },
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
        mentor: <Mentor image={team1} name="abc" email="john@creative-tim.com" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Very good
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={5} readOnly />,
      },
      {
        group: <Group image={team4} name="abc" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
            ])}
          </MDBox>
        ),
        mentor: <Mentor image={team2} name="abc" email="john@creative-tim.com" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Nice
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={4} readOnly />,
      },
      {
        group: <Group image={team2} name="abc" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        mentor: <Mentor image={team2} name="abc" email="john@creative-tim.com" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Không gian thoải mái
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={4} readOnly />,
      },
      {
        group: <Group image={team1} name="abc" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team1, "Ryan Tompson"]])}
          </MDBox>
        ),
        mentor: <Mentor image={team2} name="abc" email="john@creative-tim.com" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Khá ổn
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={value} readOnly />,
      },
      {
        group: <Group image={team3} name="abc" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        mentor: <Mentor image={team4} name="abc" email="john@creative-tim.com" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Very good
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={5} readOnly />,
      },
      {
        group: <Group image={team3} name="abc" />,
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
        mentor: <Mentor image={team1} name="abc" email="john@creative-tim.com" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Không gian đẹp, thoải mái
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={value} readOnly />,
      },
    ],
  };
}
