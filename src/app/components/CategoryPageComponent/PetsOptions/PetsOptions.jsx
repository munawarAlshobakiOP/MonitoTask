"use client";
import ViewMoreButton from "@/app/components/Shared/Buttons/ViewMoreButton/ViewMoreButon.jsx";
import * as Styles from './PetsOptions.styles';
import data from '@/app/Data/data.json';
import PetCard from '@/app/components/Shared/Cards/PetCard/PetCard';

export default function PetsOptions() {
    return (
     <Styles.PetOptionsSection>
    <Styles.PetsOptionContainer >
        <Styles.PetsOptionsHeader>          
              <Styles.PetsOptionsHeaderRow>
            <Styles.PetsOptionsTitle>Whats new?</Styles.PetsOptionsTitle>
                <Styles.PetP>See More Puppies</Styles.PetP>     
                       </Styles.PetsOptionsHeaderRow>

        </Styles.PetsOptionsHeader>
<Styles.PetsOptionsGrid>
{data.Dogs.slice(0, 4).map((pet) => (
    <Styles.PetCardLink key={pet._id} href={`/pet/${pet._id}`}>
        <PetCard pet={pet} />
    </Styles.PetCardLink>
))}
</Styles.PetsOptionsGrid>

    </Styles.PetsOptionContainer>
    </Styles.PetOptionsSection>);
}