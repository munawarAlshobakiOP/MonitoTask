"use client";
import { Products } from '@/app/Data/data';
import ViewMoreButton from "@/app/components/Shared/Buttons/ViewMoreButton/ViewMoreButon.jsx";
import * as Styles from './ProductList.styles';
import ProductCard from '@/app/components/Shared/Cards/ProductCard/ProductCard';

const ProductList = () => {
    return (
        <Styles.ProductsListSection>
            <Styles.ProductsListContainer>
                <Styles.ProductsListHeader>               
                         <Styles.ProductsListHeaderRow>

                    <Styles.ProductsListTitle>Hard to choose right products for your pets?</Styles.ProductsListTitle>
                        <Styles.ProductP>Our Products</Styles.ProductP>               
                             </Styles.ProductsListHeaderRow>

                        <Styles.ViewMoreButtonDesktop>
                            <ViewMoreButton />
                        </Styles.ViewMoreButtonDesktop>
                </Styles.ProductsListHeader>
                <Styles.ProductsListGrid>
                    {Products.slice(0, 8).map((product) => (
                        <Styles.ProductCardLink key={product._id} href={`/`}>
                            <ProductCard product={product} />
                        </Styles.ProductCardLink>
                    ))}
                </Styles.ProductsListGrid>
              
            </Styles.ProductsListContainer>
        </Styles.ProductsListSection>
    );
};

export default ProductList;