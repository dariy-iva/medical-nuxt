interface INavLinks {
  readonly [index: string]: {
    readonly name: string;
    readonly link: string;
    readonly children?: INavLinks;
  };
}

export default INavLinks;
