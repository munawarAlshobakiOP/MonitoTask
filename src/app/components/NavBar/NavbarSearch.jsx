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
	width: 17.5rem;
	background: (--color-neutral-00);
	box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	z-index: 9999;
	border-radius: 4px;
	overflow: hidden;
`;
const CardOption = styled.div`
	cursor: pointer;
	padding: 8px;
	border-bottom: 1px solid #eee;
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
		router.push(`/category?search=${encodeURIComponent(query)}&id=${pet._id}`); // Navigate to /category?search=<query>&id=<pet._id>
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
							<CardOption style={{ textAlign: 'center', color: '#222', fontWeight: 600, cursor: 'pointer', borderBottom: 'none' }}
								onClick={() => router.push('/category?search=all')}>
								SEE ALL...
							</CardOption>
						</>
					) : (
						<CardOption style={{ cursor: 'default', color: '#888' }}>
							No options found
						</CardOption>
					)}
				</Dropdown>
			)}
		</SearchContainer>
	);
}
