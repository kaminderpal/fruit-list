import React from 'react'
import {Card} from '../ui/card';
import {Image} from '../ui/image';
import { CardBody } from '../ui/cardBody';
import { Button } from '../ui/button';

const FruitCard = ({
    itemName,
    imgSrc,
    price,
    quantityRemaining
}) => {
  return (
    <Card>
        <Image src={imgSrc} />
        <CardBody>
            <p>{itemName}</p>
            <div className="d-flex">
                <div>
                    $ {price}
                </div>
                <div>
                    {quantityRemaining} In Stock
                </div>
            </div>
            <Button width={`w-100`} >Remove</Button>
        </CardBody>
    </Card>
  )
}

export default FruitCard
