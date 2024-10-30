import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { PortalType } from './types';
import { createDiv } from './utils';



const Portal: FC<PortalType> = ({ children }) => {
    const [container] = useState(createDiv);

    useEffect(() => {
        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        };
    }, []);

    return createPortal(children, container);
};

export default Portal;
