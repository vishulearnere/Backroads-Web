import { socialLinks } from '../data'
const SocialLink = ({ parentClass, subClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((socialLink) => {
        const { icon, href, id } = socialLink
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={subClass}
            >
              <i className={icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default SocialLink
