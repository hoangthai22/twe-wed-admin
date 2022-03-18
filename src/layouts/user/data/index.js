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
import Icon from "@mui/material/Icon";
import { useEffect, useState } from "react";

export const User = ({ image, name }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1} p={1}>
    <MDAvatar src={image} name={name} size="lg" />
    <MDBox ml={1} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium" fontSize="13.5px">
        {name}
      </MDTypography>
    </MDBox>
  </MDBox>
);

export default function data() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://theweekendexpertise.azurewebsites.net/api/v1/admin/members?pageIndex=1&pageSize=5"
      )
      .then((res) => {
        const users = res.data;
        // eslint-disable-next-line array-callback-return
        users.map((item) => {
          // eslint-disable-next-line no-param-reassign
          const day = item.birthday.split(" ")[0];
          // eslint-disable-next-line no-param-reassign
          item.birthday = day;
        });
        setUser(users);
      })
      .catch((error) => console.log(error));
  }, []);

  function dataTable() {
    return user.map((item, index) => ({
      stt: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          {index + 1}
        </MDTypography>
      ),
      user: <User image={item.image} name={item.fullname} />,
      function: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          {item.majorName}
        </MDTypography>
      ),

      birthday: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          {item.birthday}
        </MDTypography>
      ),
      email: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          {item.email}
        </MDTypography>
      ),
      address: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          {item.address}
        </MDTypography>
      ),
      sex: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          {item.sex === "Male" ? "Nam" : "Nữ"}
        </MDTypography>
      ),
      phone: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
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
            fontSize="13.5px"
          />
        </MDBox>
      ),
      action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Icon
            sx={{ cursor: "pointer", fontWeight: "bold" }}
            fontSize="small"
            // onClick={handleEditUser}
          >
            edit
          </Icon>
        </MDTypography>
      ),
    }));
  }

  return {
    columns: [
      { Header: "STT", accessor: "stt", width: "5%", align: "left" },
      { Header: "Người dùng", accessor: "user", width: "20%", align: "left" },
      { Header: "Chuyên ngành", accessor: "function", align: "left" },
      { Header: "Ngày sinh", accessor: "birthday", align: "center" },
      { Header: "Email", accessor: "email", align: "center" },
      { Header: "Địa chỉ", accessor: "address", align: "center" },
      { Header: "Giới tính", accessor: "sex", align: "center" },
      { Header: "Điện thoại", accessor: "phone", align: "center" },
      { Header: "Trạng thái", accessor: "status", align: "center" },
      { Header: "Thao tác", accessor: "action", align: "center" },
    ],

    rows: dataTable(),
  };
}
