/* eslint-disable react/prop-types */
// @mui material components
// import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";
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

  // const Mentor = ({ image, name }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" />
  //     <MDBox ml={2} lineHeight={1}>
  //       <MDTypography display="block" variant="button" fontWeight="medium">
  //         {name}
  //       </MDTypography>
  //     </MDBox>
  //   </MDBox>
  // );
  function dataTable() {
    return mentor.map((item, index) => ({
      stt: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {index + 1}
        </MDTypography>
      ),
      mentor: <Author image={item.image} name={item.fullname} />,
      feedback: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Very good
        </MDTypography>
      ),
      rating: <Rating name="read-only" value={5} readOnly />,
    }));
  }
  return {
    columns: [
      { Header: "STT", accessor: "stt", align: "left" },
      { Header: "mentor", accessor: "mentor", align: "center" },
      { Header: "feedback", accessor: "feedback", align: "center" },
      { Header: "rating", accessor: "rating", align: "center" },
    ],

    rows: dataTable(),
  };
}
