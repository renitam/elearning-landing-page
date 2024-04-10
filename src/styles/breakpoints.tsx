interface Size {
    mobile: string
    tablet: string
    desktop: string
}

const size: Size {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
}

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    device: `(max-width: ${size.desktop})`,
}