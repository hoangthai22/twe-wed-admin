import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isOpenModal: true,
    };
  }

  componentDidMount() {}

  render() {
    return (
      function toggle() {
        alert("click me");
      },
      (
        <Modal
          // isOpen={true}
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
}

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };
export default AddUser;
