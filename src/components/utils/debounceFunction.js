import debounce from 'lodash/debounce'

const debounceFunction = (func, delayTime) => {
  return debounce(func, delayTime)
}

export default debounceFunction
