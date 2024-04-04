import styled from 'styled-components';

export const Overlay = styled.div`
    background: #ffffff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;

    &:hover {
        opacity: 0.3;
        transition: all 0.3s linear;
        cursor: pointer;
    }
`;

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
`;