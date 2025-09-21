import * as Styles from './UsefulKnowledgeCard.styles';

export default function UsefulKnowledgeCard({ knowledge }) {
    return (
<Styles.KnowledgeCardContainer>
    <Styles.KnowledgeCardImageContainer>
        <Styles.KnowledgeCardImage src={knowledge.image} alt="Knowledge Image" />
    </Styles.KnowledgeCardImageContainer>
   
    <Styles.KnowledgeCardContent>
         <Styles.PetKnowledgeB>
        <Styles.PetKnowledgeText>Pet Knowledge</Styles.PetKnowledgeText>
    </Styles.PetKnowledgeB>
    <Styles.CardInfo>
        <Styles.KnowledgeCardTitle>{knowledge.title}</Styles.KnowledgeCardTitle>
        <Styles.KnowledgeCardDescription>{knowledge.text}</Styles.KnowledgeCardDescription>
    </Styles.CardInfo>
    </Styles.KnowledgeCardContent>
</Styles.KnowledgeCardContainer>

    );}