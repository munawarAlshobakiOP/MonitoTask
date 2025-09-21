import * as Styles from "./PetsCategory.styles";
import PetList from "./PetList/PetList";
import Filters from "./Filters/Filters";

export default function PetsCategory() {
  return (
    <Styles.PetsCategoryContainer>
      <Filters />
      <PetList />
    </Styles.PetsCategoryContainer>
  );
}