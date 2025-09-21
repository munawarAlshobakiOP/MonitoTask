import * as Styles from './PetCard.styles';
export default function PetCard({ pet }) {
    
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
                <Styles.PetPrice>{pet.price} {pet.currency}</Styles.PetPrice>
                </Styles.PetCardC>
            </Styles.PetCardContent>
         
        </Styles.PetCardContainer>
    )
}