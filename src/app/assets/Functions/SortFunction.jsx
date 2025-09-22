export default function getSortedDogs(dogs, selectedOption) {
    switch (selectedOption) {
        case "Price: Low to High":
            return [...dogs].sort((a, b) => a.price - b.price);
        case "Price: High to Low":
            return [...dogs].sort((a, b) => b.price - a.price);
        default:
            return dogs;
    }
}