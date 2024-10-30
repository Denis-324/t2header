import React, { FC, useRef, } from 'react'
import { useMountedForAnimation } from '../../hooks/useMountedForAnimation';
import Portal from '../Portal/Portal';
import styles from './MenuMobile.module.scss'

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const MenuMobile: FC<Props> = ({isOpen, onClose}) => {
  const ref = useRef(null);

  const { isMounted } = useMountedForAnimation({
      isOpen,
  });

if (!isMounted) {
    return null;
}

return (
    <Portal>
        <div className={styles.container}  style={{zIndex: 1000}} onClick={onClose} ref={ref}>
              <ul>
                <li className={styles.tab}>Преимущества</li>
                <li className={styles.tab}>Тарифы</li>
                <li className={styles.tab}>Акции и спецпредложения</li>
                <li className={styles.tab}>Промотариф Tele2</li>
                <li className={styles.tab}>Технология eSIM</li>
              </ul>
        </div>
    </Portal>
);
};

export default MenuMobile