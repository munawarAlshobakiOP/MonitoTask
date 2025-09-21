
import React from 'react';
import * as Styles from './ViewMoreButton.styles';
import ViewMoreIcon from '@/app/assets/icons/ViewMoreIcon.jsx';
export default function ViewMoreButton({ children }) {
    return (
        <Styles.ViewMoreButtonContainer>
            <Styles.ViewMoreButtonText>{children || "View More"}</Styles.ViewMoreButtonText>
           <Styles.Icon><ViewMoreIcon /></Styles.Icon>
        </Styles.ViewMoreButtonContainer>
    )
}