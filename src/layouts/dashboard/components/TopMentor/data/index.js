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
export default function data() {
  const [topMentor, setMentor] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://theweekendexpertise.azurewebsites.net/api/v1/admin/sessions/top_rate?pageIndex=1&pageSize=6"
      )
      .then((res) => {
        console.log(res.data);
        console.log(topMentor);
        setMentor(res.data);
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
    return topMentor.map((item, index) => ({
      stt: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="15px"
        >
          {index + 1}
        </MDTypography>
      ),
      mentor: <Author image={item.image} name={item.fullname} />,
      slogan: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="15px"
        >
          {item.slogan}
        </MDTypography>
      ),
      rating: <Rating name="read-only" value={item.rate} readOnly fontSize="15px" />,
    }));
  }
  return {
    columns: [
      { Header: "STT", accessor: "stt", align: "left" },
      { Header: "mentor", accessor: "mentor", width: "25%", align: "left" },
      { Header: "slogan", accessor: "slogan", width: "25%", align: "left" },
      { Header: "rating", accessor: "rating", align: "center" },
    ],

    rows: dataTable(),
  };
}
