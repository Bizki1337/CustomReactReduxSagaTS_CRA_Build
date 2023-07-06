import {fetch} from 'library/utilities/fetch'

export const loadTestDataRequest = () => 
	fetch.get(`/some_endPoint`)