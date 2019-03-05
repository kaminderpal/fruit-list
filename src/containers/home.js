import React, { Component, Fragment } from 'react'
import { Navbar } from '../ui/navbar'
import { Container } from '../ui/container';
import Brand from '../components/brand';
import SortByPrice from '../components/sortByPrice';
import { Section } from '../ui/section';
import fruitList from '../storeItems.json';
import FruitCard from '../components/fruitCard';
import {Wrapper} from '../ui/wrapper';

export class Home extends Component {
  state = {
            list : []
          };
  componentDidMount(){
    this.setState({ list: this.sortTheListByLowestPrice( fruitList ) });
  }
  /**
   * List fruit lists.
   */
  getFruits = () => {
    return this.state.list.length ? this.state.list.map((item,index) => {
                                          return <FruitCard key={index}
                                                            id={index} 
                                                            {...item} 
                                                            removeItem = { this.removeItemFromList } 
                                                  />
                                        }) : "";
  }
  /**
   * remove given item from list.
   */
  removeItemFromList = (e) => {
    const id = parseInt(e.currentTarget.dataset.id);
    const { list } = this.state;
    this.setState( { list : this.filterListById(id,list)  });
  }
  /** 
   * filter the list by id.
   */
  filterListById = (id,list) => {
    return list.filter( (item, index) => {
      return index !== id;
    });
  }
  /**
   * Sort the list by ascending price order.
   */
  sortTheListByLowestPrice = (list) => {
    return list.sort( (a, b) => { 
        return a.price - b.price;
    });
  }
  /**
   * Sort the list by descending price order.
   */
  sortTheListByHighestPrice = (list) => {
    return list.sort( (a, b) => { 
      return b.price - a.price;
  });
  }
  /**
   * Handler for changing the price order.
   */
  handlerChangeOrderByPrice = (e) => {
    const {list} = this.state;
    const {value} = e.currentTarget;
    let result;
    if(value==="1"){
      result = this.sortTheListByHighestPrice(list);
    }
    else{
      result = this.sortTheListByLowestPrice(list);
    }
    this.setState( { list: result } );
  }
  render() {
    return (
      <Fragment>
        <Navbar>
          <Container>
            <Wrapper display="flex" alignItems="flex-end" justifyContent="space-between">
              <Brand />
              <SortByPrice changePriceOrder={(e)=>this.handlerChangeOrderByPrice(e)} />
            </Wrapper>
          </Container>
        </Navbar>
        <Section>
          <Container>
            <Wrapper display="flex" flexWrap="wrap" marginLeft="-1rem" marginRight="-1rem">
            { this.getFruits() }
            </Wrapper>
          </Container>
        </Section>
      </Fragment>
    )
  }
}

export default Home
