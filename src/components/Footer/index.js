import { Link } from 'gatsby'
import React from 'react'
import {
  Popover,
  PopoverHeader,
  PopoverBody,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'
import './style.scss'

const toggle = function() {}

class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      popoverOpen: false,
    }
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    })
  }

  render() {
    return (
      <div className="footer">
        <div className="d-flex flex-row-reverse">
          <div className="p-2">
            <a id="Popover1" onClick={this.toggle} href="javascript:void(0)">
              Site Credits
            </a>
          </div>
          <Popover
            placement="bottom"
            isOpen={this.state.popoverOpen}
            target="Popover1"
            toggle={toggle}
            className="site-credits"
          >
            <PopoverHeader>Site Credits</PopoverHeader>
            <PopoverBody>
              <ListGroup>
                <ListGroupItem>
                  Content: <strong>Davey Hiester</strong>
                </ListGroupItem>
                <ListGroupItem>
                  Design: <strong>Olivia Hiester</strong>
                </ListGroupItem>
                <ListGroupItem>
                  Development: <strong>Chris Hiester</strong>
                </ListGroupItem>
              </ListGroup>
            </PopoverBody>
          </Popover>
          {/* <div className="p-2">Contact Us</div> */}
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-center copyright-statement">
              <p>
                &copy; Center City Chamber Orchestra 2018. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
