import * as Styles from './PetList.styles';
import PetCard from '@/app/components/Shared/Cards/PetCard/PetCard';
import SortButton from '@/app/components/Shared/Buttons/SortButton/SortButton';
import { Dogs } from '@/app/Data/data';
import { useState } from 'react';
export default function PetList() {
    const [selectedOption, setSelectedOption] = useState("Popular");
    const [currentPage, setCurrentPage] = useState(1);
const petsPerPage = 15;
const startIndex = (currentPage - 1) * petsPerPage;
const endIndex = startIndex + petsPerPage;
const displayedPets = Dogs.slice(startIndex, endIndex);
    return (
        <Styles.PetListContainer>
            <Styles.PetListHeader>
                <Styles.PetListTitle>Small Dog <Styles.NumberOfPets> &nbsp; {Dogs.length} puppies</Styles.NumberOfPets></Styles.PetListTitle>
 <SortButton 
                    selectedOption={selectedOption} 
                    setSelectedOption={setSelectedOption} 
                />            </Styles.PetListHeader>
            <Styles.PetListGrid>
                {displayedPets.map((pet) => (
                    <Styles.PetCardLink key={pet._id} href={`/category/${pet._id}`}>
                        <PetCard pet={pet} />
                    </Styles.PetCardLink>
                ))}
            </Styles.PetListGrid>
        </Styles.PetListContainer>
    );
}
