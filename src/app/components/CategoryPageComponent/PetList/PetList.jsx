import * as Styles from './PetList.styles';
import PetCard from '@/app/components/Shared/Cards/PetCard/PetCard';
import SortButton from '@/app/components/Shared/Buttons/SortButton/SortButton';
import { Dogs } from '@/app/Data/data';
import { useState } from 'react';
import RenderPageNumbers from '@/app/components/Shared/Pagination/RenderPageNumbers';
import getSortedDogs from '@/app/assets/Functions/SortFunction';
import filterDogs from '@/app/assets/Functions/filterDogs';

export default function PetList({ selectedGender, selectedBreed, selectedColor, minPrice, maxPrice }) {
    const [selectedOption, setSelectedOption] = useState("Popular");
    const [currentPage, setCurrentPage] = useState(1);
    const petsPerPage = 15;

    const filteredDogs = filterDogs(Dogs, {
  gender: selectedGender,
  breed: selectedBreed,
  color: selectedColor,
  minPrice,
  maxPrice
});

    const sortedDogs = getSortedDogs(filteredDogs, selectedOption);
    const totalPages = Math.ceil(sortedDogs.length / petsPerPage);
    const startIndex = (currentPage - 1) * petsPerPage;
    const endIndex = startIndex + petsPerPage;
    const displayedPets = sortedDogs.slice(startIndex, endIndex);

    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    return (
        <Styles.PetListContainer>
            {isMobile && (
                <SortButton 
                    selectedOption={selectedOption} 
                    setSelectedOption={setSelectedOption} 
                />
            )}
            <Styles.PetListHeader>
                <Styles.PetListTitle>
                    Small Dog <Styles.NumberOfPets> &nbsp; {Dogs.length} puppies</Styles.NumberOfPets>
                </Styles.PetListTitle>
                {!isMobile && (
                    <SortButton 
                        selectedOption={selectedOption} 
                        setSelectedOption={setSelectedOption} 
                    />
                )}
            </Styles.PetListHeader>
            <Styles.PetListGrid>
                {displayedPets.map((pet) => (
                    <Styles.PetCardLink key={pet._id} href={`/category/${pet._id}`}>
                        <PetCard pet={pet} />
                    </Styles.PetCardLink>
                ))}
            </Styles.PetListGrid>
            <Styles.PetListPagination>
                <RenderPageNumbers
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                />
            </Styles.PetListPagination>
        </Styles.PetListContainer>
    );
}