/** 多语言文案输出 */

import { useGlobalContext } from "~/hooks/useGlobal"
import { showText } from "~/utils/il8next"
import { type LanguageType } from "~/utils/il8next/local/command"
import { Zh } from "./Zh"
import { En } from "./En"

export * from './En'
export * from './Zh'

export function Sample(props: {
  value: string
  template?: LanguageType
}) {
  const { local, setLocal } = useGlobalContext()


  return <><span onClick={() => {
    if (local === 'en') setLocal('zh')
    else setLocal('en')
  }}>
    {
      showText(props.value, {
        local,
        template: props.template
      })
    }
    </span>
  </>
}

export function Il8n (props: {
  en?: string
  zh?: string
}) {
  return <>
    <En>{props.en}</En>
    <Zh>{props.zh}</Zh>
  </>
}