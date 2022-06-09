import Player from 'components/player/player';
import WaveForm from './_components/waveform';

const Build = () => (
  <>
    Hello world
    <Player
      playerOptions={{
        controls: true,
        responsive: true,
        sources: [{
          src: '/OuterScienceSubs.mp4',
          type: 'video/mp4',
        }],
      }}
      subtitleOptions={{
        subUrl: '/OuterScienceSubs.ass',
        fonts: [
          'http://fonts.cdnfonts.com/css/gisha',
          'http://fonts.cdnfonts.com/css/aharoni',
        ],
      }}
    />
    <WaveForm />
  </>
);

export default Build;
