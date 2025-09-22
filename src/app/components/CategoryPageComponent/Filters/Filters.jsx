"use client";
import UpDownArrow from '@/app/assets/icons/UpDownArrow.jsx';
import * as Styles from './Filters.styles';
import { FilterGender, FilterColor, FilterBreed, colorMap } from '@/app/Data/data';

export default function Filters({
  selectedGender, setSelectedGender,
  selectedBreed, setSelectedBreed,
  selectedColor, setSelectedColor,
  minPrice, setMinPrice,
  maxPrice, setMaxPrice
}) {    

    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const handleBreedChange = (e) => {
        setSelectedBreed(e.target.value);
    };

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    return (
        <Styles.FiltersContainer>
            <Styles.FilterTitle>Filters</Styles.FilterTitle>
            <Styles.FilterContent>
                <Styles.FilterSection>
                    <Styles.FilterLabel>Gender</Styles.FilterLabel>
                    <Styles.GenderCheckboxContainer>
                        {FilterGender.map(gender => (
                            <Styles.OptionRow key={gender}>
                                <Styles.FilterOption
                                    type="radio"
                                    name="gender"
                                    value={gender}
                                    checked={selectedGender === gender}
                                    onChange={handleGenderChange}
                                />
                                <Styles.GenderLabel>{gender}</Styles.GenderLabel>
                            </Styles.OptionRow>
                        ))}
                    </Styles.GenderCheckboxContainer>
                </Styles.FilterSection>

                <Styles.FilterSection>
                    <Styles.FilterLabel>Color</Styles.FilterLabel>
                    <Styles.ColorCheckboxContainer>
                        {FilterColor.map(color => (
                            <Styles.OptionRow key={color}>
                                <Styles.FilterOption
                                    type="radio"
                                    name="color"
                                    value={color}
                                    checked={selectedColor === color}
                                    onChange={handleColorChange}
                                />
                                {color === 'Black & White' ? (
                                    <Styles.BlackWhiteCircle  />
                                ) : (
                                   <Styles.CircleColor color={color}  />
                                )}
                                <Styles.ColorLabel>{color}</Styles.ColorLabel>
                            </Styles.OptionRow>
                        ))}
                    </Styles.ColorCheckboxContainer>
                </Styles.FilterSection>

                <Styles.FilterSection>
                    <Styles.FilterLabel>Price</Styles.FilterLabel>
                    <Styles.PriceRange>
                        <Styles.PriceInputContainer>
                            <Styles.PriceInput
                                type="number"
                                placeholder="Min"
                                value={ minPrice ?? ''}
                                onChange={handleMinPriceChange}
                            />
                            <UpDownArrow size={14} />
                        </Styles.PriceInputContainer>
                        <Styles.PriceInputContainer>
                            <Styles.PriceInput
                                type="number"
                                placeholder="Max"
                                value={maxPrice ?? ''}
                                onChange={handleMaxPriceChange}
                            />
                            <UpDownArrow size={14} />
                        </Styles.PriceInputContainer>
                    </Styles.PriceRange>
                </Styles.FilterSection>

                <Styles.FilterSection>
                    <Styles.FilterLabel>Breed</Styles.FilterLabel>
                    <Styles.BreedCheckboxContainer>
                        {FilterBreed.map(breed => (
                            <Styles.OptionRow key={breed}>
                                <Styles.FilterOption
                                    type="radio"
                                    name="breed"
                                    value={breed}
                                    checked={selectedBreed === breed}
                                    onChange={handleBreedChange}
                                />
                                <Styles.BreedLabel>{breed}</Styles.BreedLabel>
                            </Styles.OptionRow>
                        ))}
                    </Styles.BreedCheckboxContainer>
                </Styles.FilterSection>
            </Styles.FilterContent>
        </Styles.FiltersContainer>
    );
}