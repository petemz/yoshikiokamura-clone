import SineWaves from 'sine-waves';
import React, { useRef, useEffect } from 'react';

const WaveAnimation = () => {
  const wavesRef = useRef(null);

  useEffect(() => {
    const waves = new SineWaves({
      el: wavesRef.current,

      speed: 4,
      width: '100%',
      height: '100%',

      ease: 'SineInOut',

      wavesWidth: '100%',

      waves: [
        {
          timeModifier: 0.2,
          lineWidth: 1,
          amplitude: -200,
          wavelength: 250,
        },
        {
          timeModifier: 0.2,
          lineWidth: 1,
          amplitude: -200,
          wavelength: 240,
          phase: Math.PI * 2,
        },
        {
          timeModifier: 0.2,
          lineWidth: 1,
          amplitude: -200,
          wavelength: 230,
          phase: Math.PI * 4,
        },
      ],

      // Called on window resize
      resizeEvent: function () {
        var index = -1;
        var length = this.waves.length;
        while (++index < length) {
          this.waves[index].strokeStyle = 'darkslategrey';
        }

        // Clean Up
        index = void 0;
        length = void 0;
      },
    });

    // Clean up the SineWaves instance when the component is unmounted
    //return () => {
    //  waves.destroy();
    //};
  }, []);

  const containerStyle = {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'grey',
  };

  return (
    <div id="container" style={containerStyle}>
      <canvas ref={wavesRef} id="waves" style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 0 }} />
    </div>
  );
};

export default WaveAnimation;