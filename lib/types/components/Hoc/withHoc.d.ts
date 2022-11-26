export function withHoc(WrappedComponent: any): {
    ({ date, ...props }: {
        [x: string]: any;
        date: any;
    }): JSX.Element;
    displayName: string;
};
