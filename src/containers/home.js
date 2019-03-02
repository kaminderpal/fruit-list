import React, { Component, Fragment } from 'react'
import { Navbar } from '../ui/navbar'
import { Container } from '../ui/container';
import Brand from '../components/brand';
import SortByPrice from '../components/sortByPrice';
import { Section } from '../ui/section';
import list from '../storeItems.json';
import FruitCard from '../components/fruitCard';
import {Wrapper} from '../ui/wrapper';

export class Home extends Component {
  state = {list};
  getFruits = () => {
    return this.state.list.length && this.state.list
                                            .map((item,index) => {
                                              return <FruitCard key={index} {...item}/>
                                            });
  }
  render() {
    return (
      <Fragment>
        <Navbar>
          <Container>
            <Wrapper display="flex" alignItems="flex-end" justifyContent="space-between">
              <Brand />
              <SortByPrice />
            </Wrapper>
          </Container>
        </Navbar>
        <Section>
          <Container>
            <Wrapper display="flex" flexWrap="wrap">
            {this.getFruits()}
            </Wrapper>
          </Container>
        </Section>
      </Fragment>
    )
  }
}

export default Home
