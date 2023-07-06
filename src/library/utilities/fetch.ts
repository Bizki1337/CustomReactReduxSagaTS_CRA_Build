import axios from 'axios'

export const fetch = axios.create({
	baseURL: 'some_string_from_process.env',
})