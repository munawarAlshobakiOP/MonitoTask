export default function filterDogs(dogs, { gender, breed, color, minPrice, maxPrice }) {
  let result = dogs;
  if (gender) {
    result = result.filter(dog => dog.gene === gender);
  }
  if (breed) {
    result = result.filter(dog => dog.size.toLowerCase() === breed.toLowerCase());
  }
  if (color) {
    result = result.filter(dog =>
      Array.isArray(dog.color)
        ? dog.color.map(c => c.toLowerCase()).includes(color.toLowerCase())
        : dog.color.toLowerCase() === color.toLowerCase()
    );
  }
  if (minPrice) {
    result = result.filter(dog => dog.price >= Number(minPrice));
  }
  if (maxPrice) {
    result = result.filter(dog => dog.price <= Number(maxPrice));
  }
  return result;
}