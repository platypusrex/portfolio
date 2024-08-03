/* eslint-disable */
import * as React from 'react';

declare module 'react' {
  type FCC<P = {}> = FunctionComponentWithChildren<P>;

  interface FunctionComponentWithChildren<P = {}> {
    (props: React.PropsWithChildren<P>, context?: any): React.ReactElement<any, any> | null;
    propTypes?: React.WeakValidationMap<P> | undefined;
    contextTypes?: React.ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
  }
}
/* eslint-enable */
