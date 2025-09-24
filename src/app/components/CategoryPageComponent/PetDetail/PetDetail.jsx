import data from '@/app/Data/data.json'; 
import React, { useState, useContext } from 'react';
import NextLeftArrow from "@/app/assets/icons/NextLeftArrow";
import HealthIcon from "@/app/assets/icons/HealthIcon";
import Gaurentte from "@/app/assets/icons/Gaurentte";
import NextRightArrow from "@/app/assets/icons/NextRightArrow";
import ShareIcon from "@/app/assets/icons/ShareIcon";
import * as Styles from "@/app/components/CategoryPageComponent/PetDetail/PetDetail.styles";
import ExploreNowButton from '../../Shared/Buttons/ExploreNowButton/ExploreNow';
import ChatButton from '../../../components/Shared/Buttons/ChatButton/ChatButton.jsx';
import { useCurrency } from "@/app/assets/Functions/CurrencyContext";
import  FacebookIcon  from "@/app/assets/icons/FacebookIcon";
import  TwitterIcon  from "@/app/assets/icons/TwitterIcon";
import  YoutubeIcon  from "@/app/assets/icons/YoutubeIcon";
import  InstagramIcon  from "@/app/assets/icons/InstagramIcon";
const iconMap = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
};

export default function PetDetail({ params }) {
    let petId;
    const unwrappedParams = typeof params?.then === 'function' ? React.use(params) : params;
    if (unwrappedParams && unwrappedParams.Pet) {
        petId = unwrappedParams.Pet;
    } else {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            petId = urlParams.get('Pet') || urlParams.get('id');
        }
    }
    const pet = data.Dogs.find((p) => p._id === parseInt(petId));
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const { currency, convert } = useCurrency();
    if (!pet) {
        return <div>Pet not found</div>;
    }
    return (
        <Styles.PetDetailSection>
            <Styles.PetImagesContainer>
                <Styles.PetSelectionImage>
                    <Styles.ArrowContainerLeft onClick={() => setSelectedImageIndex(selectedImageIndex === 0 ? pet.images.length - 1 : selectedImageIndex - 1)}>
                        <NextLeftArrow />
                    </Styles.ArrowContainerLeft>
                    <Styles.PetImage src={pet.images[selectedImageIndex]} alt={pet.title} />
                    <Styles.ArrowContainerRight onClick={() => setSelectedImageIndex((selectedImageIndex + 1) % pet.images.length)}>
                        <NextRightArrow />
                    </Styles.ArrowContainerRight>
                    <Styles.ImageList>
                        {pet.images.map((img, index) => (
                            <Styles.dogImageItem
                                key={index}
                                src={img}
                                alt={`petImage`}
                                onClick={() => setSelectedImageIndex(index)}
                                selected={selectedImageIndex === index}
                            />
                        ))}
                    </Styles.ImageList>
                </Styles.PetSelectionImage>

                <Styles.ShareSocialMedia>
                    <Styles.ShareTitle> <ShareIcon />Share:</Styles.ShareTitle>
                    <Styles.SocialIcons>
                   {data.SocialMediaIcons.map((iconObj, index) => {
  const Icon = iconMap[iconObj.key];
  return (
    <Styles.IconWrapper key={index}>
      <Icon />
    </Styles.IconWrapper>
  );
})}
                    </Styles.SocialIcons>
                </Styles.ShareSocialMedia>
                <Styles.MobileDetails>
                    <Styles.PetInfoContainer>
                        <Styles.Path></Styles.Path>
                        <Styles.PetTitleHeader>
                            <Styles.SkuText>SKU: #{pet.SKU}</Styles.SkuText>
                            <Styles.PetTitle>{pet.title}</Styles.PetTitle>
                            <Styles.PetPrice>
                                {convert(pet.price).toLocaleString()} {currency}
                            </Styles.PetPrice>
                        </Styles.PetTitleHeader>
                        <Styles.DetailButtonsContainer>
                            <ExploreNowButton>Contact Us</ExploreNowButton>
                            <ChatButton />
                        </Styles.DetailButtonsContainer>
                        <Styles.PetDescription>
                            {Object.entries({
                                SKU: `#${pet.SKU}`,
                                Gender: pet.gene,
                                Age: pet.age,
                                Size: pet.size,
                                Color: Array.isArray(pet.color) ? pet.color.join(' & ') : pet.color,
                                Vaccinated: pet.vaccinated,
                                Dewormed: pet.dewormed,
                                Cert: pet.cert,
                                Microchip: pet.microchip,
                                Location: pet.location,
                                Published: pet.published,
                                AdditionalInfo: pet.additionalInfo && pet.additionalInfo.trim() !== ''
                                    ? pet.additionalInfo
                                    : 'No Additional Information'
                            }).map(([key, value]) => (
                                <Styles.DescriptionSections key={key}>
                                    <Styles.MainText>{key}</Styles.MainText>
                                    <Styles.SubText>: {value}</Styles.SubText>
                                </Styles.DescriptionSections>
                            ))}
                        </Styles.PetDescription>
                        <Styles.PetHealthGuarantee>
                            <Styles.HealthTitle> <HealthIcon /> 100% health guarantee for pets</Styles.HealthTitle>
                            <Styles.GuaranteeTitle> <Gaurentte /> 100% guarantee of pet identification</Styles.GuaranteeTitle>
                        </Styles.PetHealthGuarantee>
                    </Styles.PetInfoContainer>
                </Styles.MobileDetails>
            </Styles.PetImagesContainer>
            <Styles.DesktopDetails>
                <Styles.PetInfoContainer>
                    <Styles.Path></Styles.Path>
                    <Styles.PetTitleHeader>
                        <Styles.SkuText>SKU: #{pet.SKU}</Styles.SkuText>
                        <Styles.PetTitle>{pet.title}</Styles.PetTitle>
                        <Styles.PetPrice>
                            {convert(pet.price).toLocaleString()} {currency}
                        </Styles.PetPrice>
                    </Styles.PetTitleHeader>
                    <Styles.DetailButtonsContainer>
                        <ExploreNowButton>Contact Us</ExploreNowButton>
                        <ChatButton />
                    </Styles.DetailButtonsContainer>
                    <Styles.PetDescription>
                        {Object.entries({
                            SKU: `#${pet.SKU}`,
                            Gender: pet.gene,
                            Age: pet.age,
                            Size: pet.size,
                            Color: Array.isArray(pet.color) ? pet.color.join(' & ') : pet.color,
                            Vaccinated: pet.vaccinated,
                            Dewormed: pet.dewormed,
                            Cert: pet.cert,
                            Microchip: pet.microchip,
                            Location: pet.location,
                            Published: pet.published,
                            AdditionalInfo: pet.additionalInfo && pet.additionalInfo.trim() !== ''
                                ? pet.additionalInfo
                                : 'No Additional Information'
                        }).map(([key, value]) => (
                            <Styles.DescriptionSections key={key}>
                                <Styles.MainText>{key}</Styles.MainText>
                                <Styles.SubText>: {value}</Styles.SubText>
                            </Styles.DescriptionSections>
                        ))}
                    </Styles.PetDescription>
                </Styles.PetInfoContainer>
            </Styles.DesktopDetails>
        </Styles.PetDetailSection>
    );
}