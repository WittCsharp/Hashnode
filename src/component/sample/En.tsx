import { useGlobalContext } from "~/hooks/useGlobal"

export function En(props: {
  children: any
}) {
  const { local } = useGlobalContext()

  if (local !== 'en') return <>{props.children}</>
  return <></>
}