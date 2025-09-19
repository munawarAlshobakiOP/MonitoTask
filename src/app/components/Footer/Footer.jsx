"use client"
import * as Styles from './Footer.style';
import { Navlinks, SocialMediaIcons } from '../../Data/data.js';

export default function Footer() {
  return (
<Styles.FooterContainer>
<Styles.FooterContent>
  <Styles.RegisterContainer>
    <Styles.RegisterText>Register now so you don't miss our programs</Styles.RegisterText>
    <Styles.RegisterBox>
      <Styles.EmailInput type="email" placeholder="Enter Your Email" />
      <Styles.RegisterButton>Subscribe now</Styles.RegisterButton>
    </Styles.RegisterBox>
    </Styles.RegisterContainer>
    
    <Styles.FooterLinks>
      <Styles.LinkColumn>
        {Navlinks.map((link) => (
          <Styles.LinkItem key={link.name}>
            <Styles.Link href={link.path}>{link.name}</Styles.Link>
          </Styles.LinkItem>
        ))}
      </Styles.LinkColumn>
      
      <Styles.SocialMediaContainer>
        <Styles.SocialMediaList>
          {SocialMediaIcons.map((social) => {
            const IconComponent = social.component;
            return (
              <Styles.SocialMediaItem key={social.name}>
                <Styles.SocialMediaLink 
                  href={social.url} 
                >
                  <IconComponent 
                    size={24}
                    className="social-icon"
                  />
                </Styles.SocialMediaLink>
              </Styles.SocialMediaItem>
            );
          })}
        </Styles.SocialMediaList>
      </Styles.SocialMediaContainer>
    </Styles.FooterLinks>
</Styles.FooterContent>
</Styles.FooterContainer>

  );
}
