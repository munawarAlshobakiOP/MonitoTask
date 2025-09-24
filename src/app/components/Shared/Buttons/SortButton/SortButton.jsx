import React, { useState } from 'react';
import * as Styles from './SortButton.styles';
import data  from '@/app/Data/data.json';
import CurrencySelectIcon from '@/app/assets/icons/CurrencySelectIcon.jsx';
export default function SortButton({ selectedOption, setSelectedOption }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); 
    setIsDropdownOpen(false);
  };

  return (
    <Styles.SortButtonContainer>
      <Styles.SortButton onClick={handleButtonClick}>
        <Styles.SortButtonText>
          Sort by : {selectedOption}
        </Styles.SortButtonText>
        <Styles.SortButtonIcon $isOpen={isDropdownOpen}>
          <CurrencySelectIcon />
        </Styles.SortButtonIcon>
      </Styles.SortButton>
      {isDropdownOpen && (
        <Styles.SortDropdown>
          {data.sortOptions.map(option => (
            <Styles.SortDropdownItem
              key={option}
              onClick={() => handleOptionClick(option)}
              $selected={selectedOption === option}
            >
              {option}
            </Styles.SortDropdownItem>
          ))}
        </Styles.SortDropdown>
      )}
    </Styles.SortButtonContainer>
  );
}