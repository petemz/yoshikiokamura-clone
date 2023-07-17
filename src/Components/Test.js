import React, { useRef, useEffect } from 'react';
import SineWaves from 'sine-waves';

const Waver = () => {
  const wavesRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const waves = new SineWaves({
        el: wavesRef.current,

        speed: 4,

        width: '100%',

        height: function () {
          return window.innerHeight;
        },

        ease: 'SineInOut',

        wavesWidth: '100%',

        waves: [
          {
            timeModifier: 0.4,
            lineWidth: 1,
            amplitude: -200,
            wavelength: 205,
            phase: Math.PI / 5, // Phase offset for the first wave (in radians)
          },
        ],

        // Called on window resize
        resizeEvent: function () {
          var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
          gradient.addColorStop(0, 'rgba(23, 210, 168, 0.2)');
          gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
          gradient.addColorStop(1, 'rgba(23, 210, 168, 0.2)');

          var index = -1;
          var length = this.waves.length;
          while (++index < length) {
            this.waves[index].strokeStyle = gradient;
          }

          // Clean Up
          index = void 0;
          length = void 0;
          gradient = void 0;
        },
      });
    }, 500)

    // Clean up the SineWaves instance when the component is unmounted
    return () => {
    //  waves.destroy();
    };
  }, []);

  // Set the CSS style for #container to avoid overflowing
  const containerStyle = {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  return (
    <div id="container" style={containerStyle}>
      <canvas ref={wavesRef} id="waves" style={{ width: '100%', position: 'absolute', zIndex: 20 }} />
    </div>
  );
};

export default Waver;



/*import React, { useRef, useEffect } from 'react';
import SineWaves from 'sine-waves';

const WaveAnimation = () => {
  const wavesRef = useRef(null);

  useEffect(() => {
    const waves = new SineWaves({
      el: wavesRef.current,

      speed: 4,

      width: function () {
        return window.innerWidth;
      },

      height: function () {
        return window.innerHeight;
      },

      ease: 'SineInOut',

      wavesWidth: '100%',

      waves: [
        {
          timeModifier: 0.4,
          lineWidth: 1,
          amplitude: -200,
          wavelength: 205,
          phase: 0, // Phase offset for the first wave (in radians)
        },
        {
          timeModifier: 0.4,
          lineWidth: 1,
          amplitude: -200,
          wavelength: 205,
          phase: Math.PI * 2, // Phase offset for the second wave (360 degrees)
        },
        {
          timeModifier: 0.4,
          lineWidth: 1,
          amplitude: -200,
          wavelength: 205,
          phase: Math.PI * 4, // Phase offset for the third wave (720 degrees)
        },
      ],

      // Called on window resize
      resizeEvent: function () {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, 'rgba(23, 210, 168, 0.2)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(23, 210, 168, 0.2)');

        var index = -1;
        var length = this.waves.length;
        while (++index < length) {
          this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
      },
    });

    // Clean up the SineWaves instance when the component is unmounted
    return () => {
    //  waves.destroy();
    };
  }, []);

  // Set the CSS style for #container to avoid overflowing
  const containerStyle = {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  return (
    <div id="container" style={containerStyle}>
      <canvas ref={wavesRef} id="waves" style={{ position: 'absolute', zIndex: 20 }} />
    </div>
  );
};

export default WaveAnimation;*/