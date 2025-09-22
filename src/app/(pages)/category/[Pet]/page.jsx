"use client";
import PetDetail from "@/app/components/CategoryPageComponent/PetDetail/PetDetail";
import * as Styles from '../CategoryPage.styles.js';
import CustomerImages from "@/app/components/CategoryPageComponent/CustomerImages/CustomerImages.jsx";
import PetsOptions from "@/app/components/CategoryPageComponent/PetsOptions/PetsOptions.jsx";
export default function PetCategoryPage({ params }) {
  return (
    <Styles.PageContainerDetail>
      <PetDetail params={params} />
      <CustomerImages />
      <PetsOptions />
    </Styles.PageContainerDetail>
  );
}