import styled from 'styled-components';

export const HeadingXL = styled.h1`
    font-family: 'Plus Jakarta Sans Extra Bold', sans-serif;
    font-size: 56px;
    line-height: 70px;
    margin: 0;
    padding: 0;
`;

export const HeadingL = styled.p`
    font-family: 'Plus Jakarta Sans Extra Bold', sans-serif;
    font-size: 40px;
    line-height; 51px;
    margin: 0;
    padding: 0;
`;

export const HeadingM = styled.h2`
    font-family: 'Plus Jakarta Sans Extra Bold', sans-serif;
    font-size: 32px;
    line-height: 40px;
    margin: 0;
    padding: 0;
`;

export const HeadingS = styled.h3`
    font-family: 'Plus Jakarta Sans Extra Bold', sans-serif;
    font-size: 24px;
    line-height: 28px;
    margin: 0;
    padding: 0;
`

export const Navbar = styled.nav`
    margin: 0;
    padding: 29px 165px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 16px;
    }
`;

export const Logo = styled.img`
    width: 114px;
    height: 45px;
    margin: 0;
    padding: 0;
    object-fit: contain;

    @media screen and (max-width: 768px) {
        width: 89px;
        height: 35px;
    }
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
    z-index: 0;

    // behind the button lies a #fff background that appears on hover
    &:before {
        position: absolute;
        background: #ffffff;
        opacity: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 28px;
        z-index: 1;
    }

    &:hover {
        opacity: 0.3;
        transition: opacity 0.3s linear;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        width: 140px;
        height: 48px;
    }
`;

export const Button2 = styled(Button)`
    background: linear-gradient(#f02aa6, #ff6f48);
`;