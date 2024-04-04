import styled from 'styled-components';

export const Button = styled.button`
    position: relative;
    margin: 0;
    padding: 0;
    border: none;
    background: #13183F;
    border-radius: 28px; 
    color: #ffffff;
    width: 167px;
    height: 56px;
    opacity: 1;

    &:hover {
        opacity: 0.3;
        transition: 0.3s;
        cursor: pointer;
    }
`;