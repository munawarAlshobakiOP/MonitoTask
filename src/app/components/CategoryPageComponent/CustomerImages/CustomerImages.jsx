import data from '@/app/Data/data.json';
import * as Styles from './CustomerImages.styles';
export default function CustomerImagesGallery() {
  return (
    <Styles.CustomerImagesSection>
  <Styles.CustomerContainer>
      <Styles.SectionTitle>Our lovely customer</Styles.SectionTitle>
      <Styles.ImagesContainer>
        {data.CustomerImages.map((image, index) => (
          <Styles.Image key={image + index} src={image} alt={`Customer Image ${index + 1}`} />
        ))}
      </Styles.ImagesContainer>
          <Styles.ImageIndicators>
        {data.CustomerImages.map((_, idx) => (
          <Styles.ImageIndicator key={idx} />
        ))}
      </Styles.ImageIndicators>
      </Styles.CustomerContainer>
    </Styles.CustomerImagesSection>
  );
}