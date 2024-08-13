import Image, { type StaticImageData } from 'next/image';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';

type ImageLinkProps = {
  src: string | StaticImageData;
  url: string;
};

export const ImageLink = (props: ImageLinkProps) => {
  const { src, url } = props;

  return (
    <Link href={url} target='_blank' rel='noopener noreferrer' style={{ margin: '3px' }}>
      <Image src={src} alt='github' width='47' height='47' style={{ borderRadius: '9px' }} />
    </Link>
  );
};

ImageLink.propTypes = {
  src: PropTypes.string,
  url: PropTypes.string
};

export default ImageLink;
