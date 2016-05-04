import Component from 'react-pure-render/component';
import Radium from 'radium';
import React, { PropTypes as RPT } from 'react';

class Loader extends Component {

  static propTypes = {
    variant: RPT.oneOf(['fluid', 'sections', 'css', 'sectionsCss'])
  }

  static defaultProps = {
    variant: 'fluid'
  }


  rednderSectionsCssSpinner() {
    const barNumber = 9;
    const bars = [];
    for (let i = 0; i < barNumber; i++)
      bars.push(<div key={i} style={[styles.bars.base, styles.bars[`bar${i + 1}`]]} />);

    return (
      <div style={styles.sectionsCss.base}>
        {bars}
        <div style={[styles.sectionsCss.bg, styles.sectionsCss.backgroundCirle]} />
        <div style={[styles.sectionsCss.spin, styles.sectionsCss.mainSpin]}>
          <div style={[styles.sectionsCss.bg, styles.sectionsCss.mainSpinBg]} />
          <div style={[styles.sectionsCss.spin, styles.sectionsCss.secondarySpinA]}>
            <div style={[styles.sectionsCss.bg, styles.sectionsCss.secondarySpinBgA]} />
          </div>
          <div style={[styles.sectionsCss.spin, styles.sectionsCss.secondarySpinB]}>
            <div style={[styles.sectionsCss.bg, styles.sectionsCss.secondarySpinBgB]} />
          </div>
        </div>
      </div>
    );
  }

  renderCssLoader() {
    const linesNumber = 7;
    const lines = [];
    for (let i = 0; i < linesNumber; i++)
      lines.push(
        <div key={i} style={[styles.cssLoader.line, styles.cssLoader.lines[`line${i + 1}`].base]}>
          <div style={[styles.cssLoader.lineInner, styles.cssLoader.lines[`line${i + 1}`].inner]} />
        </div>
      );

    return (
      <div style={styles.cssLoader.base}>
        {lines}
      </div>
    );
  }

  renderFluidSpinner() {
    const spinnerSteps = 5;
    const spinner = [];
    for (let i = 0; i < spinnerSteps; i++)
      spinner.push(<span key={i} style={[styles.fluid.bar.base, styles.fluid.bar[`bar${i + 1}`]]} />);

    return (
      <div style={styles.fluid.base}>
        <div style={styles.fluid.wrapper}>{spinner}</div>
      </div>
    );
  }

  renderSectionsSpinner() {
    return (
      <svg style={styles.section.base}>
        <path style={styles.section.bg} d="M90,0C40.294,0,0,40.294,0,90s40.294,90,90,90s90-40.294,90-90S139.706,0,90,0z M90,157.5,c-37.279,0-67.5-30.221-67.5-67.5S52.721,22.5,90,22.5s67.5,30.221,67.5,67.5S127.279,157.5,90,157.5z" />
        <path style={styles.section.progress} d="M90,157.5c-37.279,0-67.5-30.221-67.5-67.5S52.721,22.5,90,22.5V0C40.294,0,0,40.294,0,90s40.294,90,90,90,s90-40.294,90-90h-22.5C157.5,127.279,127.279,157.5,90,157.5z" />
        <path style={styles.section.progressB} d="M90,157.5c-37.279,0-67.5-30.221-67.5-67.5S52.721,22.5,90,22.5V0C40.294,0,0,40.294,0,90s40.294,90,90,90,s90-40.294,90-90h-22.5C157.5,127.279,127.279,157.5,90,157.5z" />
        <path style={styles.section.bar} d="M89,22.526c0-0.005,0.658-0.026,1-0.026s1,0.021,1,0.026V0.013C91,0.009,90.341,0,90,0s-1,0.009-1,0.013,V22.526z" />
        <path style={styles.section.bar} d="M45.862,38.955c-0.003-0.004,0.488-0.443,0.749-0.663s0.779-0.627,0.783-0.623L32.923,20.423,c-0.002-0.003-0.513,0.414-0.774,0.633c-0.261,0.219-0.76,0.65-0.758,0.653L45.862,38.955z" />
        <path style={styles.section.bar} d="M23.377,79.268c-0.005-0.001,0.089-0.653,0.148-0.989s0.194-0.981,0.199-0.98L1.554,73.389,c-0.004-0.001-0.127,0.647-0.186,0.983c-0.059,0.335-0.165,0.986-0.161,0.987L23.377,79.268z" />
        <path style={styles.section.bar} d="M32.066,124.603c-0.004,0.003-0.351-0.557-0.522-0.853s-0.482-0.876-0.478-0.879l-19.497,11.256,c-0.003,0.002,0.319,0.577,0.489,0.872s0.508,0.861,0.511,0.86L32.066,124.603z" />
        <path style={styles.section.bar} d="M67.862,153.747c-0.002,0.005-0.627-0.201-0.949-0.318c-0.321-0.117-0.933-0.361-0.931-0.366l-7.7,21.155,c-0.001,0.004,0.615,0.238,0.935,0.354c0.32,0.117,0.943,0.333,0.944,0.33L67.862,153.747z" />
        <path style={styles.section.bar} d="M114.017,153.063c0.002,0.005-0.61,0.249-0.931,0.366c-0.321,0.117-0.947,0.323-0.949,0.318l7.7,21.155,c0.001,0.004,0.624-0.213,0.944-0.33c0.32-0.117,0.937-0.351,0.935-0.354L114.017,153.063z" />
        <path style={styles.section.bar} d="M148.934,122.871c0.004,0.003-0.307,0.583-0.478,0.879s-0.518,0.856-0.522,0.853l19.497,11.256,c0.003,0.002,0.341-0.565,0.511-0.86s0.492-0.871,0.489-0.872L148.934,122.871z" />
        <path style={styles.section.bar} d="M156.276,77.298c0.005-0.001,0.14,0.644,0.199,0.98c0.059,0.336,0.153,0.988,0.148,0.989l22.171-3.909,c0.004-0.001-0.102-0.652-0.161-0.987c-0.059-0.335-0.183-0.983-0.186-0.983L156.276,77.298z" />
        <path style={styles.section.bar} d="M132.606,37.669c0.003-0.004,0.521,0.403,0.783,0.623c0.262,0.22,0.753,0.659,0.749,0.663l14.471-17.246,c0.002-0.003-0.497-0.434-0.758-0.653c-0.261-0.219-0.772-0.636-0.774-0.633L132.606,37.669z" />
      </svg>
    );
  }


  render() {
    const { variant } = this.props;

    switch (variant) {
      case 'fluid':
        return this.renderFluidSpinner();

      case 'sections':
        return this.renderSectionsSpinner();

      case 'css':
        return this.renderCssLoader();

      case 'sectionsCss':
        return this.rednderSectionsCssSpinner();
    }

    throw new Error(`Unknown loading component variant: ${variant}`);
  }

}

const settings = {
  spinnerSize: '190px',
  spinnerSteps: '16',
  spinnerTime: '2s',
  spinnerMargin: '32px',
  spinnerPaddingTop: '95px'
};

export const colors = {
  primary: '#00b2d5',
  secondary: 'hsl(50, 100%, 50%)',
  error: 'hsl(351, 100%, 42%)',
  success: 'hsl(120, 100%, 42%)',
  black: '#333333',
  grayDarker: 'hsl(0, 0%, 20%)',
  grayDark: 'hsl(0, 0%, 30%)',
  gray: 'hsl(0, 0%, 50%)',
  grayLight: 'hsl(0, 0%, 70%)',
  grayLighter: 'hsl(0, 0%, 85%)',
  grayLightest: 'hsl(0, 0%, 90%)',
  white: 'hsl(0, 0%, 100%)',
  border: 'hsl(0, 0%, 60%)',
  text: {
    primary: 'hsl(0, 0%, 25%)',
    secondary: 'hsl(0, 0%, 50%)'
  }
};

const fluidWaves = Radium.keyframes({
  '0%': {
    backgroundColor: colors.secondary,
    height:          '6px',
    top:             '13px'
  },
  '25%': {
    backgroundColor: colors.primary,
    height:          '32px',
    top:             0
  },
  '50%': {
    backgroundColor: colors.secondary,
    height:          '6px',
    top:             '13px'
  },
  '100%': {
    backgroundColor: colors.secondary,
    height:          '6px',
    top:             '13px'
  }
});

const sectionsCssSpinningA = Radium.keyframes({
  '0%': { transform: 'rotate(-110deg)' },
  '35%': { transform: 'rotate(-20deg)' },
  '50%': { transform: 'rotate(70deg)' },
  '65%': { transform: 'rotate(150deg)' },
  '100%': { transform: 'rotate(250deg)' }
});

const sectionsCssSpinningB = Radium.keyframes({
  '0%': { transform: 'rotate(70deg)' },
  '35%': { transform: 'rotate(160deg)' },
  '50%': { transform: 'rotate(250deg)' },
  '65%': { transform: 'rotate(340deg)' },
  '100%': { transform: 'rotate(430deg)' }
});

const sectionSpinning = Radium.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '35%': { transform: 'rotate(90deg)' },
  '50%': { transform: 'rotate(180deg)' },
  '65%': { transform: 'rotate(270deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

const sectionSpinningB = Radium.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '15%': { transform: 'rotate(90deg)' },
  '50%': { transform: 'rotate(180deg)' },
  '85%': { transform: 'rotate(270deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

const cssspin = Radium.keyframes({
  '0%, 15%': { transform: 'rotate(0)' },
  '100%': { transform: 'rotate(360deg)' }
});

const styles = {
  fluid: {
    base: {
      clear:     'both',
      minHeight: '32px',
      padding:   '32px 0',
      textAlign: 'center',
      width:     '100%'
    },
    wrapper: {
      height:   '32px',
      margin:   '0 auto',
      position: 'relative',
      width:    '53px'
    },
    bar: {
      base: {
        animation:       'fluidWaves 1.5s infinite ease-in-out',
        animationName:   fluidWaves,
        backgroundColor: 'pink',
        display:         'block',
        height:          '6px',
        position:        'absolute',
        top:             '13px',
        width:           '9px'
      },
      bar1: {
        animationDelay: 0,
        left:           0
      },
      bar2: {
        animationDelay: '.2s',
        left:           '11px'
      },
      bar3: {
        animationDelay: '.4s',
        left:           '22px'
      },
      bar4: {
        animationDelay: '.6s',
        left:           '33px'
      },
      bar5: {
        animationDelay: '.8s',
        left:           '44px'
      },
    }
  },

  section: {
    base: {
      height:   settings.spinnerSize,
      margin:   `${settings.spinnerMargin} auto`,
      position: 'relative',
      width:    settings.spinnerSize
    },
    bg: {
      fill: colors.secondary
    },
    progress: {
      animation:       'sectionSpinning 5s ease infinite',
      animationName:   sectionSpinning,
      fill:            colors.secondaryDarker,
      transformOrigin: '90px 90px'
    },
    progressB: {
      animation:       'sectionSpinningB 5s ease infinite',
      animationName:   sectionSpinningB,
      fill:            colors.grayLighter,
      transformOrigin: '90px 90px'
    },
    bar: {
      fill: colors.white
    }
  },
  cssLoader: {
    base: {
      height: '120px',
      margin: '0 auto',
      position: 'relative',
      width: '110px'
    },

    line: {
      animation: 'cssspin 2200ms cubic-bezier(.175, .885, .32, 1.275) infinite',
      animationName: cssspin,
      boxSizing: 'border-box',
      height: '50px',
      left: '0',
      overflow: 'hidden',
      position: 'absolute',
      top: '0',
      transformOrigin: '50% 100%',
      width: '118px'
    },

    lineInner: {
      border: '5px solid transparent',
      borderRadius: '100%',
      boxSizing: 'border-box',
      height: '97px',
      left: '0',
      margin: '0 auto',
      position: 'absolute',
      right: '0',
      top: '0',
      width: '97px'
    },

    lines: {
      line1: {
        base: {
          animationDelay: '-57.5ms'
        },

        inner: {
          borderColor: colors.secondary,
          height: '100px',
          width: '100px',
          top: '0px'
        }
      },

      line2: {
        base: {
          animationDelay: '-115ms'
        },

        inner: {
          borderColor: colors.primary,
          height: '88px',
          width: '88px',
          top: '7px'
        }
      },

      line3: {
        base: {
          animationDelay: '-172.5ms'
        },

        inner: {
          borderColor: colors.error,
          height: '74px',
          width: '74px',
          top: '14px'
        }
      },

      line4: {
        base: {
          animationDelay: '-230ms'
        },

        inner: {
          borderColor: 'rgb(73, 41, 42)',
          height: '60px',
          width: '60px',
          top: '21px'
        }
      },

      line5: {
        base: {
          animationDelay: '-287.5ms'
        },

        inner: {
          borderColor: colors.error,
          height: '47px',
          width: '47px',
          top: '28px'
        }
      },

      line6: {
        base: {
          animationDelay: '-345ms'
        },

        inner: {
          borderColor: colors.primary,
          height: '33px',
          width: '33px',
          top: '35px'
        }
      },

      line7: {
        base: {
          animationDelay: '-402.5ms'
        },

        inner: {
          borderColor: colors.secondary,
          height: '21px',
          width: '21px',
          top: '42px'
        }
      },
    },
  },

  sectionsCss: {
    base: {
      width: '180px',
      height: '180px',
      boxSizing: 'border-box',
      margin: '32px auto',
      position: 'relative',
      borderRadius: '50%'
    },

    bg: {
      width: '180px',
      height: '180px',
      boxSizing: 'border-box',
      position: 'absolute',
      borderRadius: '50%',
      zIndex: '1',
      borderWidth: '25px',
      borderStyle: 'solid',
      top: '0px',
      left: '-90px'
    },

    backgroundCirle: {
      left: '0px',
      borderColor: colors.grayLighter
    },

    mainSpinBg: {
      borderColor: colors.secondary
    },

    secondarySpinBgA: {
      borderColor: colors.secondaryDarker
    },

    secondarySpinBgB: {
      borderColor: colors.secondaryDarker
    },

    spin: {
      width: '90px',
      height: '90px',
      left: '0',
      top: '0',
      transformOrigin: '0px 90px',
      overflow: 'hidden',
      position: 'absolute',
      zIndex: '3'
    },

    mainSpin: {
      animation: 'sectionSpinningB 5s ease infinite',
      animationName: sectionSpinningB,
      left: '90px'
    },

    secondarySpinA: {
      animation: 'sectionsCssSpinningA 5s ease infinite',
      animationName: sectionsCssSpinningA,
      transform: 'rotate(90deg)'
    },

    secondarySpinB: {
      animation: 'sectionsCssSpinningB 5s ease infinite',
      animationName: sectionsCssSpinningB,
      transform: 'rotate(-90deg)'
    },
  },

  bars: {
    base: {
      position: 'absolute',
      backgroundColor: colors.white,
      height: '25px',
      transformOrigin: '0px 0px',
      width: '2px',
      zIndex: '5'
    },
    bar1: {
      left: '90px',
      top: '0'
    },
    bar2: {
      left: '32px',
      top: '21px',
      transform: 'rotate(-40deg)'
    },
    bar3: {
      left: '1px',
      top: '74px',
      transform: 'rotate(-80deg)'
    },
    bar4: {
      left: '12px',
      top: '135px',
      transform: 'rotate(-120deg)'
    },
    bar5: {
      left: '59px',
      top: '175px',
      transform: 'rotate(-160deg)'
    },
    bar6: {
      left: '121px',
      top: '175px',
      transform: 'rotate(160deg)'
    },
    bar7: {
      left: '168px',
      top: '135px',
      transform: 'rotate(120deg)'
    },
    bar8: {
      left: '179px',
      top: '74px',
      transform: 'rotate(80deg)'
    },
    bar9: {
      left: '148px',
      top: '21px',
      transform: 'rotate(40deg)'
    }
  }
};

export default Radium(Loader);
