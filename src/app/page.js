
'use client';
import HeroBanner from "./components/HomePageHeroBanner/HeroBanner";
import PetsList from "./components/PetsList/PetsList";
import MiddleIntro from "./components/MiddleIntro/MiddleIntro";
import ProductList from "./components/ProductList/ProductList";
import PetSeller from "./components/PetSeller/PetSeller";
import UsefulKnowledge from "./components/UsefulKnowledge/UsefulKnowledge";
import AdoptionIntro from "./components/AdoptionIntro/AdoptionIntro";
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
