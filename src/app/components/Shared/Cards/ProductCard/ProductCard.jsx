import GiftBoxIcon from '@/app/assets/icons/GiftBox.jsx';
import * as Styles from './ProductCard.styles';
import { useCurrency } from '@/app/assets/Functions/CurrencyContext';
export default function ProductCard({ product }) {
  const { currency, convert } = useCurrency();
  const convertedPrice = convert(product.price);
  return (
    <Styles.ProductCard>
     <Styles.ProductImageContainer>
       <Styles.ProductImage src={product.image} alt={product.title} />
     </Styles.ProductImageContainer>
     <Styles.ProductInfo>
       <Styles.ProductName>{product.title}</Styles.ProductName>
       <Styles.DetailsRow>
         {product.product && (
           <Styles.ProductTypes>
             <Styles.DetailsHeader>product:</Styles.DetailsHeader>
             {product.product}
           </Styles.ProductTypes>
         )}
         {product.size && (
           <Styles.ProductSize>
             <Styles.DetailsHeader>size:</Styles.DetailsHeader>
             {product.size}
           </Styles.ProductSize>
         )}
       </Styles.DetailsRow>
       <Styles.ProductPrice>{convertedPrice.toLocaleString()} {currency}</Styles.ProductPrice>
     </Styles.ProductInfo>
     <Styles.GiftContainer>
      <Styles.GiftIcon>
        <GiftBoxIcon />      </Styles.GiftIcon>

        <Styles.Dot>•</Styles.Dot>
        <Styles.GiftText> Free Toy & Free Shaker</Styles.GiftText>
    </Styles.GiftContainer>
  </Styles.ProductCard>
  );
}
