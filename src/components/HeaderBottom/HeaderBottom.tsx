import React from 'react'
import styles from './HeaderBottom.module.scss'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { sxTab, sxTabList } from './constants';




export const HeaderBottom = () => {
	const [value, setValue] = React.useState('1');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
	  setValue(newValue);
	};

  
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
					<TabContext value={value}>
					<Box >
						<TabList onChange={handleChange}  sx={sxTabList} classes={{ root: styles.tabList }}>
							<Tab label="Преимущества Tele2" value="1" sx={sxTab}  classes={{ root: styles.tab }} />
							<Tab label="Тарифы" value="2" sx={sxTab} classes={{ root: styles.tab }} />
							<Tab label="Акции и спецпредложения" sx={sxTab} value="3" classes={{ root: styles.tab }} />
							<Tab label="Промотариф Tele2" value="4" sx={sxTab} classes={{ root: styles.tab }} />
							<Tab label="Технология eSIM" value="5" sx={sxTab} classes={{ root: styles.tab }} />
						</TabList>
					</Box>
				</TabContext>
			</div>
		</div>
	  )
}
