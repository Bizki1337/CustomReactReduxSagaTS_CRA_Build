import Button from 'library/components/Button'

import { ContainerProps } from './HomeContainer'

import styles from './home.module.scss'

const Home = ({
	title,
	isLoading,
	pushTestAction,
}: ContainerProps) => {
	return (
		<div className={styles.wrapper}>
			<h1>title:</h1>
			<h2>{title}</h2>
			<Button
				text='Click on me!'
				onClick={() => pushTestAction(1)}
			/>
		</div>
	)
}

export default Home