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
      .get("https://theweekendexpertise.azurewebsites.net/api/v1/mentors?pageIndex=1&pageSize=6")
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
      author: <Author image={item.image} name={item.fullname} />,
      function: <Job title={item.listMajor} description="" />,
      slogan: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.slogan}
        </MDTypography>
      ),

      birthday: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.birthday}
        </MDTypography>
      ),
      address: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.address}
        </MDTypography>
      ),
      sex: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.sex === "male" ? "Nam" : "Nữ"}
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
      { Header: "Giảng viên", accessor: "author", width: "20%", align: "left" },
      { Header: "Chuyên ngành", accessor: "function", width: "10%", align: "left" },
      { Header: "slogan", accessor: "slogan", width: "10%", align: "left" },
      { Header: "Ngày sinh", accessor: "birthday", align: "center" },
      { Header: "Địa chỉ", accessor: "address", align: "center" },
      { Header: "Giới tính", accessor: "sex", align: "center" },
      { Header: "Điện thoại", accessor: "phone", align: "center" },
      { Header: "Trạng thái", accessor: "status", align: "center" },
      { Header: "Thao tác", accessor: "action", align: "center" },
    ],

    rows: dataTable(),
  };
}
