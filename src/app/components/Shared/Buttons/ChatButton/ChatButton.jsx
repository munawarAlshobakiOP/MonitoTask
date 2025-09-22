import ChatIcon from '@/app/assets/icons/ChatIcon';
import * as Styles from './ChatButton.styles.js';
export default function ChatButton({ children, className, ...props }) {
  return (
    <Styles.ChatButtonContainer className={className} {...props}>
        <ChatIcon />
      <Styles.ChatButtonText>{children || "Chat with Monito"}</Styles.ChatButtonText>
    </Styles.ChatButtonContainer>
  );
}