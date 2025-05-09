import { ParallaxLayer } from '@react-spring/parallax';
import { CARD_HEIGHT_FACTOR, CARD_NUM } from './constants';

const ParallaxCard = ({
  offset,
  component
}: {
  offset: number;
  component: JSX.Element;
}): JSX.Element => {
  const accentColour = '#252525';
  const cardStyle = {
    backgroundColor: accentColour,
    borderRadius: 20,
    maxWidth: '100%'
  };

  const boxShadowCss =
    offset === 0
      ? '0 -10px 7px -7px white inset'
      : offset === CARD_NUM - 1
        ? '0 10px 7px -7px white inset'
        : '0 -10px 7px -7px white inset, 0 10px 7px -7px white inset';

  return (
    <>
      <ParallaxLayer
        offset={offset}
        speed={1}
        factor={CARD_HEIGHT_FACTOR}
        style={{ ...cardStyle, boxShadow: boxShadowCss }}
      />
      <ParallaxLayer
        offset={offset}
        speed={0.5}
        factor={CARD_HEIGHT_FACTOR}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        {component}
      </ParallaxLayer>
    </>
  );
};

export default ParallaxCard;
