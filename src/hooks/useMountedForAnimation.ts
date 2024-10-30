import { useEffect, useState } from 'react';

type UseMountedForAnimationType = {
    isOpen: boolean;
    getMounted?: (isMounted: boolean) => void;
};

export const useMountedForAnimation = ({
    isOpen,
    getMounted,
}: UseMountedForAnimationType) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen && !isMounted) {
            setIsMounted(true);
        }

        if (!isOpen && isMounted) {
            setTimeout(() => {
                setIsMounted(false);
                getMounted?.(false);
            }, 300);
        }
    }, [isOpen]);

    return {
        isMounted,
    };
};