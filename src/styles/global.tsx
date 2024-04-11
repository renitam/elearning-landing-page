import styled from 'styled-components';

export const BodyM = styled.p`
    font-family: 'Plus Jakarta Sans Medium';
    font-size: 18px;
    line-height: 28px;
    text-align: left;
`;

export const BodyS = styled.p`
    font-family: 'Plus JakartaSans Bold';
    font-size: 16px;
    line-height: 28px;
    text-align: left;
`;

export const HeadingXL = styled.h1`
    font-family: 'Plus Jakarta Sans Extra Bold', sans-serif;
    font-size: 56px;
    line-height: 70px;
    text-align: left;
`;

export const HeadingL = styled.p`
    font-family: 'Plus Jakarta Sans Extra Bold', sans-serif;
    font-size: 40px;
    line-height; 51px;
    text-align: left;
`;

export const HeadingM = styled.h2`
    font-family: 'Plus Jakarta Sans Extra Bold', sans-serif;
    font-size: 32px;
    line-height: 40px;
    text-align: left;
`;

export const HeadingS = styled.h3`
    font-family: 'Plus Jakarta Sans Extra Bold', sans-serif;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
`

export const IntroHeading = styled(HeadingXL)`
    margin: 0;
    padding: 39px 165px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
        line-height: 51px;
        padding: 16px;
    }
`

export const CardHeading = styled(HeadingS)`
    margin: 0;
    padding: 32px;

    @media screen and (max-width: 768px) {
        padding: 28px 24px 0px;
        font-size: 20px;
        line-height: 1;
        height: 35px;
    }
`;

export const Body = styled(BodyM)`
    color: #83869a;
    padding: 16px;

    @media screen and (max-width: 768px) {
        font-size: 16px
        height: 35px;
    }
`;

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
    font-family: 'Plus Jakarta Sans Bold', sans-serif;
    font-size: 18px;
    color: #ffffff;
    margin: 0;
    padding: 0;
    border: none;
    background: #13183F;
    width: 167px;
    height: 56px;
    border-radius: 28px;
    z-index: 1;

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
        transition: all 0.3s ease;
    }

    &:hover:before {
        opacity: 0.3;
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