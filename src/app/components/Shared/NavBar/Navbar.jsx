"use client";
import React, { useState } from 'react';
import { useCurrency } from '../../../assets/Functions/CurrencyContext';

import * as Styles from './NavBar.style.js';
import { Navlinks,Currency } from "@/app/Data/data.js";
import SearchIcon from '@/app/assets/icons/SearchIcon.jsx';
import CurrencySelectIcon from "@/app/assets/icons/CurrencySelectIcon.jsx";
import MobileMenuIcon from '@/app/assets/icons/MobileMenuIcon.jsx';
import NavbarSearch from '@/app/components/NavBar/NavbarSearch.jsx';

export default function Navbar() {
  const { currency, setCurrency, currencyRates } = useCurrency();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Styles.NavbarContainer>
      <Styles.NavLeft>
        <Styles.MobileMenuButton onClick={() => setIsMobileMenuOpen((open) => !open)}>
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
          <NavbarSearch />
        </Styles.Search>
        <Styles.JoinButton>Join the community</Styles.JoinButton>
        <Styles.CurrencySection>
          <Styles.CurrencyDropdown onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Styles.CurrencySelected>
              {/* Find currency object by code for logo */}
              {Currency.filter(c => c.code === currency)[0] && (
                <img src={Currency.filter(c => c.code === currency)[0].logo} alt={currency} width="20" height="20" />
              )}
              <span>{currency}</span>
            </Styles.CurrencySelected>
            <Styles.CurrencyArrow>
              <CurrencySelectIcon />
            </Styles.CurrencyArrow>
            {isDropdownOpen && (
              <Styles.CurrencyOptions>
                {Currency.map((c) => (
                  <Styles.CurrencyOption 
                    key={c.code} 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrency(c.code);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <img src={c.logo} alt={c.code} width="21" height="21" />
                    <span className="currency-code">{c.code}</span>
                  </Styles.CurrencyOption>
                ))}
              </Styles.CurrencyOptions>
            )}
          </Styles.CurrencyDropdown>
        </Styles.CurrencySection>
        <Styles.MobileSearchIconContainer className="mobile-search-icon">
          <SearchIcon />
        </Styles.MobileSearchIconContainer>
      </Styles.NavRight>

      <Styles.MobileMenuOverlay open={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)} aria-hidden={!isMobileMenuOpen}>
        <Styles.MobileMenuContent onClick={e => e.stopPropagation()}>
          {Navlinks.map((link) => (
            <Styles.MobileMenuLinkContainer key={link.name}>
              <Styles.MobileMenuLink href={link.path}>{link.name}</Styles.MobileMenuLink>
            </Styles.MobileMenuLinkContainer>
          ))}
        </Styles.MobileMenuContent>
      </Styles.MobileMenuOverlay>
    </Styles.NavbarContainer>
  );
}
