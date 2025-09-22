"use client";
import ViewMoreButton from "@/app/components/Shared/Buttons/ViewMoreButton/ViewMoreButon.jsx";
import * as Styles from './PetsList.styles';
import { Dogs } from '@/app/Data/data';
import PetCard from '@/app/components/Shared/Cards/PetCard/PetCard';

export default function PetsList() {
    return (
     <Styles.PetListSection>
    <Styles.PetsListContainer >
        <Styles.PetsListHeader>          
              <Styles.PetsListHeaderRow>
            <Styles.PetsListTitle>Whats new?</Styles.PetsListTitle>
                <Styles.PetP>Take a look at some of our pets</Styles.PetP>     
                       </Styles.PetsListHeaderRow>
                <Styles.ViewMoreButtonDesktop>
                    <ViewMoreButton />
                </Styles.ViewMoreButtonDesktop>
        </Styles.PetsListHeader>
<Styles.PetsListGrid>
{Dogs.slice(0, 8).map((pet) => (
    <Styles.PetCardLink key={pet._id} href={`/pet/${pet._id}`}>
        <PetCard pet={pet} />
    </Styles.PetCardLink>
))}

</Styles.PetsListGrid>

<Styles.ViewMoreButtonMobile>
    <ViewMoreButton />
</Styles.ViewMoreButtonMobile>
    

    </Styles.PetsListContainer>
    </Styles.PetListSection>);
}