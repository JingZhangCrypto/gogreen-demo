interface Item {
  set: (value: string) => void
  get: () => Null<string>
  has: () => boolean
  remove: () => void
}

export const persist = (key: string): Item => {
  const set = (value: string) => {
    window && localStorage?.setItem(key, value)
  }
  const get = () => (window ? localStorage?.getItem(key) || null : null)
  const has = () => {
    const value = get()

    return value !== '' && value !== null
  }
  const remove = () => localStorage.removeItem(key)

  return {
    set,
    get,
    has,
    remove,
  }
}
