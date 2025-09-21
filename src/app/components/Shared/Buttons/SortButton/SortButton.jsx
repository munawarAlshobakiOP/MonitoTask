import React, { useState } from 'react';
import * as Styles from './SortButton.styles';
import {sortOptions} from '@/app/Data/data';
import CurrencySelectIcon from '@/app/assets/icons/CurrencySelectIcon.jsx';

export default function SortButton() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(sortOptions[0]);

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
                    {sortOptions.map(option => (
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