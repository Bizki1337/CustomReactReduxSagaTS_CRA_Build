import cn from 'classnames'

import styles from './button.module.scss'

interface IDropDownWrapperProps {
	beforeImg?: string
	afterImg?: string
	text: string
	textValue?: string | number
	disable?: boolean
	className?: string
	onClick?: () => void
}

const Button = ({
	className,
	beforeImg,
	afterImg,
	text,
	textValue,
	disable,
	onClick
}: IDropDownWrapperProps) => (
	<div 
		className={cn(
			styles.container,
			{[styles.disable]: disable},
			className
		)}
		onClick={disable ? undefined : onClick}
	>
		{beforeImg && <img src={beforeImg} className={styles.beforeImg} />}
		{
			textValue
				? <div className={styles.text}>{text}:<span className={styles.textValue}>{textValue}</span></div>
				: <div className={styles.text}>{text}</div>
		}
		{afterImg && <img src={afterImg} className={styles.afterImg} />}
	</div>
)

export default Button