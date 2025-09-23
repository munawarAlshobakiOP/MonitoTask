import styled from "styled-components";
export const SearchContainer = styled.div`
    position: relative;
    width: 9.5625rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
`;
export const SearchInput = styled.input`
    border: none;
    background: transparent;
    width: 100%;
    height: 100%;
    font-size: .875rem;
    outline: none;
    color: var(--color-neutral-40);
`;
export const Dropdown = styled.div`
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
export const CardOption = styled.div`
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