"use client";
import ViewMoreButton from '@/app/components/Shared/Buttons/ViewMoreButton/ViewMoreButon.jsx';
import data from '@/app/Data/data.json';
import * as Styles from './PetSeller.styles';
export default function PetSeller() {
return (
    <Styles.PetSellerSection>
        <Styles.PetSellerContainer>
            <Styles.PetSellerHeader>
<Styles.PetSellerTitle>Proud to be part of<Styles.HeaderSpan>Pet Sellers</Styles.HeaderSpan></Styles.PetSellerTitle>

<Styles.PetSellerButton><ViewMoreButton>View all our sellers</ViewMoreButton></Styles.PetSellerButton>
            </Styles.PetSellerHeader>

<Styles.PetSellerBrands>
    
{data.PetFoodBrands.map((brand) => (
    <Styles.PetSellerBrandContainer key={brand.id}>
        <Styles.PetSellerBrandImage src={brand.image} alt={brand.name} />
    </Styles.PetSellerBrandContainer>
))}

</Styles.PetSellerBrands>
</Styles.PetSellerContainer>
</Styles.PetSellerSection>
);



}