import * as Styles from './ExploreNow.style';
export default function ExploreNowButton({ children, className, ...props }) {
  return (
    <Styles.ExploreNowContainer className={className} {...props}>
      <Styles.ExploreNowText>{children || "Explore Now"}</Styles.ExploreNowText>
    </Styles.ExploreNowContainer>
  );
}