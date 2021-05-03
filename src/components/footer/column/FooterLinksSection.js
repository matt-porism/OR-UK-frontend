import Title from '../tiles';
import LinksList from '../../links/LinksList';

const FooterLinksSection = ({title, links}) => {
  return (
    <>
      <Title title={title} />
      <ul>
        {
          links.map(link => {
            // TODO: review this - try and more somewhere more sensible + make more robust
            if (link.url.startsWith("http")) link.external = true;

            return <LinksList key={link.id} list={link} />
          })}
      </ul>
    </>
  )
}

export default FooterLinksSection;