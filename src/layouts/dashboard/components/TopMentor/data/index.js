/* eslint-disable react/prop-types */
// @mui material components
// import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import Rating from "@mui/material/Rating";

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
  // const avatars = (members) =>
  //   members.map(([image, name]) => (
  //     <Tooltip key={name} title={name} placeholder="bottom">
  //       <MDAvatar
  //         src={image}
  //         alt="name"
  //         size="xs"
  //         sx={{
  //           border: ({ borders: { borderWidth }, palette: { white } }) =>
  //             `${borderWidth[2]} solid ${white.main}`,
  //           cursor: "pointer",
  //           position: "relative",

  //           "&:not(:first-of-type)": {
  //             ml: -1.25,
  //           },

  //           "&:hover, &:focus": {
  //             zIndex: "10",
  //           },
  //         }}
  //       />
  //     </Tooltip>
  //   ));

  const Mentor = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "STT", accessor: "stt", align: "left" },
      { Header: "mentor", accessor: "mentor", align: "center" },
      { Header: "feedback", accessor: "feedback", align: "center" },
      { Header: "rating", accessor: "rating", align: "center" },
    ],

    rows: [
      {
        mentor: <Mentor image={team3} name="abc" email="john@creative-tim.com" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Very good
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={5} readOnly />,
      },
      {
        mentor: <Mentor image={team4} name="abc" email="john@creative-tim.com" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            nice
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={5} readOnly />,
      },
      {
        mentor: <Mentor image={team2} name="abc" email="john@creative-tim.com" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Very good
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={value} readOnly />,
      },
      {
        mentor: <Mentor image={team2} name="abc" email="john@creative-tim.com" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Very good
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={5} readOnly />,
      },
      {
        mentor: <Mentor image={team2} name="abc" email="john@creative-tim.com" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Very good
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={5} readOnly />,
      },
      {
        mentor: <Mentor image={team1} name="abc" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Nice
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={5} readOnly />,
      },
      {
        mentor: <Mentor image={team2} name="abc" />,
        feedback: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Very good
          </MDTypography>
        ),
        rating: <Rating name="read-only" value={5} readOnly />,
      },
    ],
  };
}
