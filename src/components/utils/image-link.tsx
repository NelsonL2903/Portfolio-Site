import Link from '@mui/material/Link';
import PropTypes from 'prop-types';

type ImageLinkProps = {
  src: string;
  url: string;
  alt: string;
};

export const ImageLink = (props: ImageLinkProps) => {
  const { src, url, alt } = props;
  const imageDimensions = '70px';

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" style={{ margin: '3px' }}>
      <img
        src={src}
        alt={alt}
        width={imageDimensions}
        height={imageDimensions}
        style={{ borderRadius: '15px', border: 'solid 5px #121212' }}
      />
    </Link>
  );
};

ImageLink.propTypes = {
  src: PropTypes.string,
  url: PropTypes.string
};

export default ImageLink;
