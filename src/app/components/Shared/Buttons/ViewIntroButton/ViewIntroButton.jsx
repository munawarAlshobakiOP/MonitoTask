
"use client";
import * as Styles from './ViewIntroButton.style';
import ArrowIntroButton from '@/app/assets/icons/ArrowIntroButton.jsx';
export default function ViewIntroButton({ className, ...props }) {

return <Styles.ViewIntroButton className={className} {...props}>
    

<Styles.ViewIntroButtonText>View Intro</Styles.ViewIntroButtonText>
<Styles.ArrowIntroButton>
    <ArrowIntroButton />
    </Styles.ArrowIntroButton>

</Styles.ViewIntroButton>;


}