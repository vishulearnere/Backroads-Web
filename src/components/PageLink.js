import { pageLinks } from '../data'

const PageLink = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        const { id, href, text } = link
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLink
