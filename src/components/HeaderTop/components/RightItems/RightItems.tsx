import React from 'react'
import styles from './RightItems.module.scss'
import { ReactComponent as LocationIcon } from '../../../../images/location.svg';
import { ReactComponent as NotificationIcon } from '../../../../images/notification-bell.svg';
import { ReactComponent as BurgertIcon } from '../../../../images/hamburger.svg';
import { ReactComponent as CloseIcon } from '../../../../images/close.svg';
import { useOpen } from '../../../../hooks/useOpen';
import  MenuMobile  from '../../../MenuMobile';



export const RightItems = () => {
  const {isOpen , open, close} = useOpen();

  return (
	<div className={styles.wrapper}>
    <LocationIcon className={styles.locationIcon}  />
    <div className={styles.location}>Московская область</div>
    {!isOpen && <div className={styles.notificationIcon}>
      <NotificationIcon  />
    </div>}
    {!isOpen && <button className={styles.hamburgerButton} onClick={open}>
      <BurgertIcon />
    </button>}
    {isOpen && <button className={styles.hamburgerButton} onClick={close}>
      <CloseIcon />
    </button>}
    {isOpen && <MenuMobile isOpen={isOpen} onClose={close} />}
  </div>
  )
}
