import * as React from 'react';

import { useWidth } from 'hooks';

export const useIsMobile = (): boolean => {
    const screenWidth = useWidth();
    const isMobile = React.useMemo(
        () => screenWidth === 'xs' || screenWidth === 'sm',
        [screenWidth]
    );
    return isMobile;
};
