import React from 'react'
import { ReactComponent as LogoIcon } from '../../images/Logo.svg';
import styles from './HeaderTop.module.scss'
import { RightItems } from './components/RightItems';

export const HeaderTop = () => {
  return (
	<div className={styles.container}>
		<div className={styles.wrapper}>
			<LogoIcon />
			<RightItems />
		</div>
	</div>
  )
}
