interface NavLinks {
    readonly [index: string] : {
        readonly name: string,
        readonly link: string,
        readonly children?: NavLinks
    }
}

export default NavLinks;
