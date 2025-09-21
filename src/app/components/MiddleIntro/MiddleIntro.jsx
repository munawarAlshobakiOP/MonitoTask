"use client";
import * as Styles from "./MiddleIntro.styles";
import ViewIntroButton from "@/app/components/Shared/Buttons/ViewIntroButton/ViewIntroButton.jsx";
import ExploreNowButton from "@/app/components/Shared/Buttons/ExploreNowButton/ExploreNow.jsx";
export default function MiddleIntro() {
    return (
        <Styles.MiddleIntroSection>
<Styles.MiddleIntroContent>

                <Styles.TextContainer>
                    <Styles.MiddleIntroH1>One more friend</Styles.MiddleIntroH1>
                    <Styles.MiddleIntroH2>Thousands more fun!</Styles.MiddleIntroH2>
                    <Styles.MiddleIntroP>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</Styles.MiddleIntroP>
                    <Styles.ButtonsContainer>
                        <ViewIntroButton />
                        <ExploreNowButton />
                    </Styles.ButtonsContainer>
                </Styles.TextContainer>
                <Styles.MiddleImageContainer>
                    <Styles.Traingular1 />
                    <Styles.MiddleImage src="/Images/HomePageImages/WomenDog2.png" alt="Women dog Image" />
<Styles.Traingular2 />
                </Styles.MiddleImageContainer>
            </Styles.MiddleIntroContent>
        </Styles.MiddleIntroSection>
    );
}
