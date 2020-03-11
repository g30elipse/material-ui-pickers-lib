import { Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import * as React from 'react';
export interface YearProps extends WithStyles<typeof styles> {
    children: React.ReactNode;
    disabled?: boolean;
    onSelect: (value: any) => void;
    selected?: boolean;
    value: any;
}
export declare class Year extends React.PureComponent<YearProps> {
    static propTypes: any;
    static defaultProps: {
        selected: boolean;
        disabled: boolean;
    };
    handleClick: () => void;
    render(): JSX.Element;
}
export declare const styles: (theme: Theme) => Record<"root" | "disabled" | "selected", import("@material-ui/core/styles/withStyles").CSSProperties>;
declare const _default: React.ComponentType<Pick<Pick<YearProps, "children" | "classes" | "onSelect" | "disabled" | "selected"> & Pick<PropTypes.InferProps<any>, string | number | symbol> & Pick<YearProps, never>, string | number | symbol> & import("@material-ui/core").StyledComponentProps<"root" | "disabled" | "selected">>;
export default _default;
