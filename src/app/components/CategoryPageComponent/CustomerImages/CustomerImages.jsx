import { CustomerImages } from '@/app/Data/data.js';
import * as Styles from './CustomerImages.styles';
export default function CustomerImagesGallery() {
  return (
    <Styles.CustomerImagesSection>
  <Styles.CustomerContainer>
      <Styles.SectionTitle>Our lovely customer</Styles.SectionTitle>
      <Styles.ImagesContainer>
        {CustomerImages.map((image, index) => (
          <Styles.Image key={image + index} src={image} alt={`Customer Image ${index + 1}`} />
        ))}
      </Styles.ImagesContainer>
          <Styles.ImageIndicators>
        {CustomerImages.map((_, idx) => (
          <Styles.ImageIndicator key={idx} />
        ))}
      </Styles.ImageIndicators>
      </Styles.CustomerContainer>
    </Styles.CustomerImagesSection>
  );
}