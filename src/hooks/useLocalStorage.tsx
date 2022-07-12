const useLocalStorage = () => {
  const setLocalStorage = (key: string, value: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value)
    }
  }
  const getLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(key)
    }
  }

  const removeLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(key)
    }
  }
  return {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
  }
}

export default useLocalStorage
