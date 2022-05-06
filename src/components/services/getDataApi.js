import axios from 'axios'

const getDataApi = async (url) => {
  const response = await axios.get(url)
  return response.data
}

export default getDataApi
