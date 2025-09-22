import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dogs } from "@/app/Data/data.js";
import SearchCard from "@/app/components/Shared/Cards/SearchCard/SearchCard.jsx";
import styled from "styled-components";
import * as Styles from '@/app/components/Shared/NavBar/NavBar.style.js';

const SearchContainer = styled.div`
	position: relative;
	width: 9.5625rem;
	height: 1.25rem;
	display: flex;
	align-items: center;
`;
const SearchInput = styled.input`
	border: none;
	background: transparent;
	width: 100%;
	height: 100%;
	font-size: .875rem;
	outline: none;
	color: var(--color-neutral-40);
`;
const Dropdown = styled.div`
	position: absolute;
	top: 2.5rem;
	left: 0;
	min-width: 17.5rem;
	width: 17.5rem;
	max-width: 100vw;
	background: var(--color-neutral-00);
	box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	z-index: 9999;
	border-radius: 4px;
	overflow: hidden;
`;
const CardOption = styled.div`
	cursor: pointer;
	padding: 8px;
	border-bottom: 1px solid var(--color-neutral-10);
	text-align: left;
	color: var(--color-neutral-80);
	font-weight: 400;
	&.see-all {
		text-align: center;
		color: var(--color-neutral-80);
		font-weight: 600;
		border-bottom: none;
	}
	&.no-options {
		cursor: default;
		color: var(--color-neutral-60);
	}
	&:last-child {
		border-bottom: none;
	}
`;

export default function NavbarSearch() {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const router = useRouter();

	const handleChange = (e) => {
		const value = e.target.value;
		setQuery(value);
		if (value.length > 0) {
			setResults(
				Dogs.filter((pet) =>
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
		router.push(`/category?search=${encodeURIComponent(query)}&Pet=${pet._id}`); 
	};

	return (
		<SearchContainer>
			<SearchInput
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
				<Dropdown>
					{results.length > 0 ? (
						<>
							{results.map((pet) => (
								<CardOption key={pet._id} onClick={() => handleSelect(pet)}>
									<SearchCard pet={pet} />
								</CardOption>
							))}
							<CardOption className="see-all" onClick={() => router.push('/category?search=all')}>
								SEE ALL...
							</CardOption>
						</>
					) : (
						query.length > 0 && (
							<CardOption className="no-options">
								No options found
							</CardOption>
						)
					)}
				</Dropdown>
			)}
		</SearchContainer>
	);
}
