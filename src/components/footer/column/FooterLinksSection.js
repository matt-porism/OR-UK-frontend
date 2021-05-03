import Title from '../tiles';
import LinkListItem from '../../links/LinkListItem';

const FooterLinksSection = ({title, links}) => {
  return (
    <>
      <Title title={title} />
      <ul>
        {
          links.map(link => {

            return <LinkListItem key={link.id} link={link} />
          })}
      </ul>
    </>
  )
}

export default FooterLinksSection;