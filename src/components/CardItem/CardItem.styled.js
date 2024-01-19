import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 12px 99px;
    background-color: var(--primaryBlue);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43; 
    border: none; 
    border-radius: 12px;
    color: var(--primaryWhite);
    cursor: pointer;
    transition: box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

    &:hover,
    &:focus {
        background-color: var(--secondaryBlue);
    }
`;

export const ItemWrapper = styled.li`
    flex-basis: calc((100% - 3 * 29px) / 4);

    & img {
        width: 100%;
        height: 268px; 
        border-radius: 14px;
        background: var(--secondaryGrey);
    }
`;

export const InfoWrapper = styled.div`
    padding: 14px 0 28px 0;
`;
