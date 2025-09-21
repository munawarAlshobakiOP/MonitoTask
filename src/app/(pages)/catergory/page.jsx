"use client";
import CategoryBanner from '../../components/CategoryPageComponent/CategoryBanner/CategoryBanner'; 
import * as Styles from './CategoryPage.style';
import PetsCategory from '../../components/CategoryPageComponent/PetsCategory';

const CategoryPage = () => {
  return (
    <Styles.PageContainer>
      <Styles.SectionWrapper>
              <CategoryBanner />

      </Styles.SectionWrapper>
      <Styles.SectionWrapper>
       
        <PetsCategory />
      </Styles.SectionWrapper>
    </Styles.PageContainer>
  );
};

export default CategoryPage;