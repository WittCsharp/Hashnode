import { useGlobalContext } from "~/hooks/useGlobal"

export function Zh(props: {
  children: any
}) {
  const { local } = useGlobalContext()

  if (local !== 'zh') return <>{props.children}</>
  return <></>
}