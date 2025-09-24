import { useState } from "react";
import { useRouter } from "next/navigation";
import data  from "@/app/Data/data.json";
import SearchCard from "@/app/components/Shared/Cards/SearchCard/SearchCard.jsx";
import * as Styles from "./NavBarSearch.styles.js";
export default function NavbarSearch() {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const router = useRouter();

	const handleChange = (e) => {
		const value = e.target.value;
		setQuery(value);
		if (value.length > 0) {
			setResults(
				data.Dogs.filter((pet) =>
					pet.title.toLowerCase().includes(value.toLowerCase())
				)
			);
		} else {
			setResults([]);
		}
	};

	const handleSelect = (pet) => {
		setQuery("");
		setResults([]);
		router.push(`/category/${pet._id}`);
	};

	return (
		<Styles.SearchContainer>
			<Styles.SearchInput
				type="text"
				value={query}
				onChange={handleChange}
				onKeyDown={(e) => {
					if (e.key === 'Enter' && query) {
						router.push(`/category?search=${encodeURIComponent(query)}`);
					}
				}}
				placeholder="Search something here!"
			/>
			{query && (
				<Styles.Dropdown>
					{results.length > 0 ? (
						<>
							{results.map((pet) => (
								<Styles.CardOption key={pet._id} onClick={() => handleSelect(pet)}>
									<SearchCard pet={pet} />
								</Styles.CardOption>
							))}
							<Styles.CardOption className="see-all" onClick={() => router.push('/category?search=all')}>
								SEE ALL...
							</Styles.CardOption>
						</>
					) : (
						query.length > 0 && (
							<Styles.CardOption className="no-options">
								No options found
							</Styles.CardOption>
						)
					)}
				</Styles.Dropdown>
			)}
		</Styles.SearchContainer>
	);
}
