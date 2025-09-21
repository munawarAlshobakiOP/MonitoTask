"use client";
import ViewIntroButton from "@/app/components/Shared/Buttons/ViewIntroButton/ViewIntroButton.jsx";
import ExploreNowButton from "@/app/components/Shared/Buttons/ExploreNowButton/ExploreNow.jsx";
import * as Styles from './HeroBanner.style';
export default function HeroBanner() {
  return (
    <Styles.HeroBannerSection>
    <Styles.HeroBannerContainer>
      <Styles.HeroBannerContent>
<Styles.HeroBannerTextH1>One more friend</Styles.HeroBannerTextH1>
<Styles.HeroBannerTextH2>Thousands more fun!</Styles.HeroBannerTextH2>
<Styles.HeroBannerP>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</Styles.HeroBannerP>
<Styles.Buttons>
   <ViewIntroButton />
   <ExploreNowButton />
</Styles.Buttons>
      </Styles.HeroBannerContent>

      <Styles.HeroBannerImageContainer>
        <Styles.HeroBannerImage src="/Images/HomePageImages/WomenDog.png" alt="Hero Banner Image" />
      </Styles.HeroBannerImageContainer>
      <Styles.Traingular1/>
        <Styles.Traingular2/>
        <Styles.Traingular3/>
        <Styles.Traingular4/>
        <Styles.Traingular5/>
        <Styles.Traingular6/>
        <Styles.Traingular7/>
        <Styles.Traingular8/>
    </Styles.HeroBannerContainer>
    
    
    
    </Styles.HeroBannerSection>
  );
}
