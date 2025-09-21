"use client";
import ExploreNowButton from '../../Shared/Buttons/ExploreNowButton/ExploreNow';
import ViewIntroButton from '../../Shared/Buttons/ViewIntroButton/ViewIntroButton';
import * as Styles from './CategoryBanner.styles';

export default function CategoryBanner() {
  return (
    <Styles.CategoryBannerSection>
      <Styles.CategoryBannerContainer>
        <Styles.CategoryImageContainer>
          <Styles.CategoryBannerImage src="/Images/CategoryBanner/CategoryBanner.png" alt="Banner image" />
        </Styles.CategoryImageContainer>
        <Styles.Rectangle1/>
        <Styles.CategoryBannerContent>
          <Styles.CategoryBannerTextH1>One more friend</Styles.CategoryBannerTextH1>
          <Styles.CategoryBannerTextH2>Thousands more fun!</Styles.CategoryBannerTextH2>
          <Styles.CategoryBannerP>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</Styles.CategoryBannerP>
          <Styles.Buttons>
            <ViewIntroButton className="category-view-intro-btn" />
            <ExploreNowButton className="category-explore-btn">Explore Now</ExploreNowButton>
        </Styles.Buttons>
        </Styles.CategoryBannerContent>
      </Styles.CategoryBannerContainer>
    </Styles.CategoryBannerSection>
  );
}