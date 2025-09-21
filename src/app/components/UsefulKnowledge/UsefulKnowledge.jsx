"use client";
import * as Styles from './UsefulKnowledge.styles';
import ViewMoreButton from "@/app/components/Shared/Buttons/ViewMoreButton/ViewMoreButon.jsx";
import { knowledge } from '@/app/Data/data';
import UsefulKnowledgeCard from '@/app/components/Shared/Cards/UsefulKnowledgeCard/UsefulKnowledgeCard';
export default function UsefulKnowledge() {
    return (
        <Styles.KnowledgeSection>
            <Styles.KnowledgeContainer>
                <Styles.KnowledgeHeader>
                    <Styles.KnowledgeTitle>You already know ?</Styles.KnowledgeTitle>
                    <Styles.KnowledgeHeaderRow>
                        <Styles.KnowledgeP>Useful pet knowledge</Styles.KnowledgeP>
                        <Styles.ViewMoreButtonDesktop>
                            <ViewMoreButton />
                        </Styles.ViewMoreButtonDesktop>
                    </Styles.KnowledgeHeaderRow>

                </Styles.KnowledgeHeader>
                <Styles.KnowledgeList>
                    {knowledge.map((item, index) => (
                        <UsefulKnowledgeCard key={index} knowledge={item} />
                    ))}
                </Styles.KnowledgeList>
                <Styles.ViewMoreButtonMobile>
                    <ViewMoreButton />
                </Styles.ViewMoreButtonMobile>
            </Styles.KnowledgeContainer>
        </Styles.KnowledgeSection>
    );
}
