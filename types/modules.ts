export interface IAccordion {
    children: React.ReactNode
    title: string | JSX.Element
    titleClass: string
    rotateIconClass?: string
}

export interface IMenuLinkItem {
    item: {
        id: number
        text: string
        href: string
    }
    handleRedirectToCatalog: (arg0: string) => void
}