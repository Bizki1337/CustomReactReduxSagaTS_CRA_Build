import {useEffect, useState} from 'react'

const useOutsideClick = (
	container: RefObject<HTMLElement>,
	cb: () => void
) => {

	const [isReady, setReady] = useState(false)

	const handleClickOutside = ({target}: Event) => {
		const {current} = container
		const isOutside = current && !current.contains(target as Node)
		if (isOutside) cb()
	}

	useEffect(() => {
		if (!isReady) return setReady(true)
		document.addEventListener('click', handleClickOutside)
		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('contextmenu', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('contextmenu', handleClickOutside)
		}
	}, [isReady])
}

export default useOutsideClick