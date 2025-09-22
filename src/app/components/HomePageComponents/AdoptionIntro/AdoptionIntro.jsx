"use client";
import ExploreButton from "@/app/components/Shared/Buttons/ExploreNowButton/ExploreNow.jsx";
import PetFootIcon from "@/app/assets/icons/PetFootIcon.jsx";
import * as Styles from './AdoptionIntro.styles';
import ViewIntroButton from "@/app/components/Shared/Buttons/ViewIntroButton/ViewIntroButton";
export default function AdoptionIntro() {
    return (<Styles.AdoptionIntroSection>
<Styles.AdoptionIntroContainer>
<Styles.AdoptionIntroTextContainer>
    <Styles.AdoptionIntroTitle>Adoption<Styles.PetIcon><PetFootIcon /></Styles.PetIcon></Styles.AdoptionIntroTitle>
    <Styles.AdoptionIntroSubtitle>We need help. so do they.</Styles.AdoptionIntroSubtitle>
    <Styles.AdoptionIntroDescription>Adopt a pet and give it a home, <br /> it will be love you back unconditionally.
</Styles.AdoptionIntroDescription>
<Styles.AdoptionIntroButton><ExploreButton /><ViewIntroButton /></Styles.AdoptionIntroButton>
</Styles.AdoptionIntroTextContainer>
<Styles.AdoptionIntroImageContainer>
    <Styles.AdoptionIntroImage src="/Images/HomepageImages/AdoptionSectionImage.png" alt="Adoption Intro Image" />
    <Styles.Triangular1/>
        <Styles.Triangular2/>
</Styles.AdoptionIntroImageContainer>

</Styles.AdoptionIntroContainer>

    </Styles.AdoptionIntroSection>
                    );
                }