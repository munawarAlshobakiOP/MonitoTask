"use client"
import * as Styles from './Footer.style';
import data from "@/app/Data/data.json";
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

export default function Footer() {
  return (
    <Styles.FooterContainer data-testid="footer123">
      <Styles.FooterContent>
        <Styles.FooterLinkRegisterationcontainer>
          <Styles.RegisterContainer>
            <Styles.RegisterText>Register now so you don't miss our programs</Styles.RegisterText>
            <Styles.RegisterBox>
              <Styles.EmailInput type="email" placeholder="Enter Your Email" />
              <Styles.RegisterButton>Subscribe now</Styles.RegisterButton>
            </Styles.RegisterBox>
          </Styles.RegisterContainer>
          <Styles.FooterLinks>
            <Styles.LinkColumn>
              {data.Navlinks.map((link) => (
                <Styles.LinkItem key={link.name}>
                  <Styles.Link href={link.path}>{link.name}</Styles.Link>
                </Styles.LinkItem>
              ))}
            </Styles.LinkColumn>
            <Styles.SocialMediaContainer>
              <Styles.SocialMediaList>
                {data.SocialMediaIcons.map((social) => {
                  const IconComponent = iconMap[social.key];
                  return (
                    <Styles.SocialMediaItem key={social.name}>
                      <Styles.SocialMediaLink href={social.url} target="_blank" rel="noopener noreferrer">
                        {IconComponent && <IconComponent  />}
                      </Styles.SocialMediaLink>
                    </Styles.SocialMediaItem>
                  );
                })}
              </Styles.SocialMediaList>
            </Styles.SocialMediaContainer>
          </Styles.FooterLinks>
        </Styles.FooterLinkRegisterationcontainer>
        <Styles.Copyright>
          <Styles.CopyrightText>© 2022 Monito. All rights reserved.</Styles.CopyrightText>
          <Styles.CopyrightLogo src="/Images/Logo.png" alt="Monito Logo" />
          <Styles.CopyrightPrivacy>
            Privacy Policy &nbsp;  &nbsp; Terms of Service
          </Styles.CopyrightPrivacy>
        </Styles.Copyright>
      </Styles.FooterContent>
    </Styles.FooterContainer>
  );
}