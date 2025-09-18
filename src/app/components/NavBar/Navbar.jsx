"use client";
import React, { useState } from 'react';
import * as Styles from './NavBar.style.js';
import { Navlinks,Currency } from '../../Data/data.js';
import SearchIcon from '../../assets/icons/search.js';
import CurrencySelectIcon from '../../assets/icons/CurrencySelectIcon.js';
import MobileMenuIcon from '@/app/assets/icons/MobileMenu.js';

export default function Navbar() {
  const [selectedCurrency, setSelectedCurrency] = useState(Currency[0]); // Currency1 as default
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    
    <Styles.NavbarContainer>
      <Styles.NavLeft>
        <Styles.MobileMenuButton>
          <MobileMenuIcon />
        </Styles.MobileMenuButton>

        <Styles.LogoContainer>
          <Styles.Logo src="/Images/Logo.png" alt="Logo" />
        </Styles.LogoContainer>
<Styles.DesktopNavLinks>
      <Styles.NavList>
        {Navlinks.map((link) => (
          <Styles.NavItem key={link.name}>
            <Styles.NavLink href={link.path}>{link.name}</Styles.NavLink>
          </Styles.NavItem>
        ))}
      </Styles.NavList>
      </Styles.DesktopNavLinks>
      </Styles.NavLeft>
      <Styles.NavRight>
        <Styles.Search>
            <Styles.SearchIconContainer>
              <SearchIcon />
            </Styles.SearchIconContainer>
          <Styles.SearchInput type="text" placeholder="Search something here!" />
        </Styles.Search>
        <Styles.JoinButton>Join the community</Styles.JoinButton>



        <Styles.CurrencySection>
          <Styles.CurrencyDropdown onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Styles.CurrencySelected>
              <img src={selectedCurrency.logo} alt={selectedCurrency.code} width="20" height="20" />
              <span>{selectedCurrency.code}</span>
            </Styles.CurrencySelected>
            <Styles.CurrencyArrow>
              <CurrencySelectIcon />
            </Styles.CurrencyArrow>
            
            {isDropdownOpen && (
              <Styles.CurrencyOptions>
                {Currency.map((currency) => (
                  <Styles.CurrencyOption 
                    key={currency.code} 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCurrency(currency);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <img src={currency.logo} alt={currency.code} width="21" height="21" />
                    <span className="currency-code">{currency.code}</span>
                  </Styles.CurrencyOption>
                ))}
              </Styles.CurrencyOptions>
            )}
          </Styles.CurrencyDropdown>
        </Styles.CurrencySection>

      </Styles.NavRight>
    </Styles.NavbarContainer>

  );
}
