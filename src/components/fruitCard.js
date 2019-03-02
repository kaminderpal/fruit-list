import React from 'react'
import { Card } from '../ui/card';
import { Image } from '../ui/image';
import { CardBody } from '../ui/cardBody';
import { Button } from '../ui/button';
import { CardFooter } from '../ui/cardFooter';
import { CardTitle } from '../ui/cardTitle';
import { CardPrice } from '../ui/cardPrice';
import { CardQuantity } from '../ui/cardQuantity';
import { CardBodyWrapper } from '../ui/cardBodyWrapper';
import { CardImageWrapper } from '../ui/cardImage';

const FruitCard = ({
    itemName,
    imgSrc,
    price,
    quantityRemaining
}) => {
  return (
    <Card>
        <CardImageWrapper>
            <Image src={imgSrc} width="120px" height="120px" />
        </CardImageWrapper>
        <CardBody>
            <CardTitle>{itemName}</CardTitle>
            <CardBodyWrapper>
                <CardPrice> 
                    ${price} 
                </CardPrice>
                <CardQuantity>
                    {quantityRemaining} In Stock
                </CardQuantity>
            </CardBodyWrapper>
        </CardBody>
        <CardFooter>
           <Button width="100%" >Remove</Button>
        </CardFooter>
    </Card>
  )
}

export default FruitCard
