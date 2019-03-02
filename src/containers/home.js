import React, { Component, Fragment } from 'react'
import { Navbar } from '../ui/navbar'
import { Container } from '../ui/container';
import Brand from '../components/brand';




export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar>
          <Container>
            <Brand/>
          </Container>
        </Navbar>
      </Fragment>
    )
  }
}

export default Home
