import * as Styles from './PetCard.styles';
import { useCurrency } from '@/app/assets/Functions/CurrencyContext';
export default function PetCard({ pet }) {
    
    const { currency, convert } = useCurrency();
    const convertedPrice = convert(pet.price);
    return (
        <Styles.PetCardContainer>
            <Styles.PetCardImageContainer>
                <Styles.PetCardImage src={pet.images[0]} alt="Pet Image" />
            </Styles.PetCardImageContainer>
            <Styles.PetCardContent>
                <Styles.PetCardC>
                <Styles.PetCardTitle>{pet.title}</Styles.PetCardTitle>
                <Styles.PetCardDescription>
                    <Styles.PetInfo>Gene: {pet.gene}</Styles.PetInfo>
                    <Styles.PetInfo> . Age: {pet.age}</Styles.PetInfo>
                </Styles.PetCardDescription>
                <Styles.PetPrice>{convertedPrice.toLocaleString()} {currency}</Styles.PetPrice>
                </Styles.PetCardC>
            </Styles.PetCardContent>
        </Styles.PetCardContainer>
    )
}