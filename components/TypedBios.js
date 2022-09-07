import React from 'react'
import Typed from 'typed.js'
import Twemoji from './Twemoji'

const TypedBios = () => {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
      // shuffle: true,
    }
    typed.current = new Typed(el.current, options)
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm a <b className="font-medium">Tax Advisor.</b>
        </li>
        <li>
          I'm a <b className="font-medium">Tax Writer.</b>
        </li>
        <li>
          I'm a <b className="font-medium">Tax Lawyer.</b>
        </li>
        <li>
          I was from the beautiful city of  <b className="font-medium">Nairobi</b> Kenya.
        </li>
        <li>
          I'm a sport-guy. I love
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />,
            <Twemoji emoji="basket-ball" />,
          </span>
          .
        </li>
        <li>I love watching football.</li>
        <li>I love music.</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios
