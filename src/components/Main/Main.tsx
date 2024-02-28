import { FC, useRef } from 'react'
import { KeyProps } from '../../types/data'

export const Main: FC<KeyProps> = ({ children }) => {
  const refff = useRef<HTMLDivElement>(null)
  function f() {
    if (refff.current) refff.current.scrollIntoView()
  }
  return (
    <main className="pt-16">
      <div>{children}</div>
      <button onClick={f}>rrr</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div ref={refff}>fff</div>
    </main>
  )
}
