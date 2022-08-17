import React from 'react';
import { DimmerInner, Loader } from 'semantic-ui-react';

interface Props {
    inverted?: boolean;
    content?: string;
}

export const LoadingComponent = ({inverted = true, content = 'Loading...'}: Props ) => {
    return(
        <DimmerInner active={true} inverted={inverted}>
            <Loader content={content} />
        </DimmerInner>
    )
}
