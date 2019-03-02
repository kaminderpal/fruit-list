import React, { Component, Fragment } from 'react'
import { Navbar } from '../ui/navbar'
import { Container } from '../ui/container';
import Brand from '../components/brand';
import SortByPrice from '../components/sortByPrice';




export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar>
          <Container flex="flex" alignItems="flex-end" jusifyItems="space-between">
            <Brand />
            <SortByPrice />
          </Container>
        </Navbar>
      </Fragment>
    )
  }
}

export default Home
