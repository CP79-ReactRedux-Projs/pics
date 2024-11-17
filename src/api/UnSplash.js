import Axios from 'axios';
export default Axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: { Authorization: 'Client-ID 7w5MzCDf_-cVU2iXLZEu_I_n3uKRf2rrwiMJMGt6cZ4' },
});
