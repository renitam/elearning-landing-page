import styled from 'styled-components';

export const Nav = styled.nav`
    margin: 0;
    padding: 29px 165px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: 114px;
    height: 30px;
    margin: 0;
    padding: 0;
`;

export const Button = styled.button`
    color: #ffffff;
    font-family: 'Plus Jakarta Sans Bold', sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
    border: none;
    background: #13183F;
    width: 167px;
    height: 56px;
    border-radius: 28px;

    &:after {
        position: absolute;
        background: #ffffff;
        opacity: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 28px;
    }
    
    &:hover {
        opacity: 0.3;
        transition: 0.3s linear;
        cursor: pointer;
    }
`;