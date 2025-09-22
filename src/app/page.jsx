
'use client';
import HeroBanner from "./components/HomePageComponents/HomePageHeroBanner/HeroBanner";
import PetsList from "./components/HomePageComponents/PetsList/PetsList";
import MiddleIntro from "./components/HomePageComponents/MiddleIntro/MiddleIntro";
import ProductList from "./components/HomePageComponents/ProductList/ProductList";
import PetSeller from "./components/HomePageComponents/PetSeller/PetSeller";
import UsefulKnowledge from "./components/HomePageComponents/UsefulKnowledge/UsefulKnowledge";
import AdoptionIntro from "./components/HomePageComponents/AdoptionIntro/AdoptionIntro";
import * as Styles from "./page.styles";

export default function Home() {
  return (
    <Styles.PageContainer>
      <Styles.SectionWrapper>
        <HeroBanner />
      </Styles.SectionWrapper>
      <Styles.SectionWrapper>
        <PetsList />
      </Styles.SectionWrapper>
      <Styles.SectionWrapper>
        <MiddleIntro />
      </Styles.SectionWrapper>
      <Styles.SectionWrapper>
        <ProductList />
      </Styles.SectionWrapper>
      <Styles.SectionWrapper>
        <PetSeller />
      </Styles.SectionWrapper>
      <Styles.SectionWrapper>
        <AdoptionIntro />
      </Styles.SectionWrapper>
      <Styles.SectionWrapper>
        <UsefulKnowledge />
      </Styles.SectionWrapper>
    </Styles.PageContainer>
  );
}
