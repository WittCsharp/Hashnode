import { createContext, useState, useContext } from 'react'

type LocalType = 'en' | 'zh'
export const GlobalContext = createContext<{
  local: LocalType
  setLocal: React.Dispatch<React.SetStateAction<LocalType>>
}>({
  local: 'en',
  setLocal: () => void (0)
})

export function GlobalContextProvider(props: {
  children: JSX.Element | JSX.Element[]
}) {
  const [local, setLocal] = useState<LocalType>('zh')
  
  return <GlobalContext.Provider value={{
    local,
    setLocal
  }}>
    {props.children}
  </GlobalContext.Provider>
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}