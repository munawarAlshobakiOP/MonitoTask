import GiftBoxIcon from '@/app/assets/icons/GiftBox.jsx';
import * as Styles from './ProductCard.styles';
export default function ProductCard({ product }) {
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
             <Styles.DetailsHeader> . size:</Styles.DetailsHeader>
             {product.size}
           </Styles.ProductSize>
         )}
       </Styles.DetailsRow>
       <Styles.ProductPrice>{product.price}</Styles.ProductPrice>
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
