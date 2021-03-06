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
// import MDButton from "components/MDButton";
import { useEffect, useState } from "react";
// import AddUser from "examples/EditUser/AddUser";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import { Link } from "react-router-dom";

export const Author = ({ image, name }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1} p={1}>
    <MDAvatar src={image} name={name} size="lg" />
    <MDBox ml={1} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium" fontSize="13.5px">
        {name}
      </MDTypography>
    </MDBox>
  </MDBox>
);
export const Job = ({ title }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography
      display="block"
      variant="caption"
      color="text"
      fontWeight="medium"
      fontSize="13.5px"
    >
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
      .get("https://theweekendexpertise.azurewebsites.net/api/v1/mentors?pageIndex=1&pageSize=20")
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

  function handleEditUser() {
    return (
      function toggle() {
        alert("click me");
      },
      (
        <Modal
          isOpen
          toggle={() => {
            this.toggle();
          }}
          // className={"abcClassName"}
        >
          <ModalHeader
            toggle={() => {
              this.toggle();
            }}
          >
            Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.toggle();
              }}
            >
              Do Something
            </Button>{" "}
            <Button
              onClick={() => {
                this.toggle();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      )
    );
  }
  function dataTable() {
    return mentor.map((item, index) => ({
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
      author: <Author image={item.image} name={item.fullname} />,
      function: <Job title={item.listMajor} description="" />,
      slogan: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          {item.slogan}
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
          {item.sex === "male" ? "Nam" : "N????"}
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
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          fontSize="13.5px"
        >
          <Icon
            sx={{ cursor: "pointer", fontWeight: "bold" }}
            fontSize="small"
            onClick={handleEditUser}
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
      { Header: "Gia??ng vi??n", accessor: "author", width: "18%", align: "left" },
      { Header: "Chuy??n nga??nh", accessor: "function", width: "10%", align: "left" },
      { Header: "slogan", accessor: "slogan", width: "10%", align: "left" },
      { Header: "email", accessor: "email", align: "center" },
      { Header: "Nga??y sinh", accessor: "birthday", align: "center" },
      { Header: "??i??a chi??", accessor: "address", align: "center" },
      { Header: "Gi????i ti??nh", accessor: "sex", align: "center" },
      { Header: "Tra??ng tha??i", accessor: "status", width: "10%", align: "center" },
      { Header: "Thao ta??c", accessor: "action", width: "8%", align: "center" },
    ],

    rows: dataTable(),
  };
}
