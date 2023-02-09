interface NavLinks {
    [index: string] : {
        name: string,
        link: string,
        children?: NavLinks
    }
}

export default NavLinks;
