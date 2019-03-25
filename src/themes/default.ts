import { lighten, darken } from '../utils/colorUtils';

export { ThemeProvider } from 'styled-components';

const toggleColors = {
  toggleBg: '#D1D4D5',
  disabledToggleBg: '#ECEDED',
  activeDisabledToggle: '#B9DCFF',
  inactiveDisabledToggle: lighten('#8D9599', 10),
  inactiveDisabledBorderToggle: lighten('#8D9599', 10),
};

export const defaultColors = {
  blue: '#167BE0',
  green: '#59C067',
  red: '#D93945',
  yellow: '#FD984E',
  white: 'white',
  gray: '#727A80',
  lightGray: '#BCC0C3',
  mediumGray: '#C9CDCE',
  darkGray: '#515C61',
  primary: '#303E47',
  black: '#0A1521',
  placeholderGray: '#727A80',
  secondaryDisabled: '#ECEDED',
  disabledBackground: '#ECEFF2',
  disabledBorder: '#A3AAAD',
  disabledText: '#A3AAAD',
  lightBackground: '#F5F7F8',
  lightBorder: '#DDDDDD',
  modalBackground: '#F9F9F9',
};

export const defaultTheme = {
  colors: defaultColors,
  borders: {
    radius: '1px',
    radiusSm: '.2rem',
    radiusLg: '.3rem',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: defaultColors.blue,
      flood: defaultColors.blue,
      disabledFlood: lighten(defaultColors.blue, 25),
      lightFlood: lighten(defaultColors.blue, 50),
      hoverlightFlood: lighten(defaultColors.blue, 100),
      text: defaultColors.blue,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.blue, 10),
      selectedFlood: darken(defaultColors.blue, 25),
      badgeBackground: defaultColors.blue,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.blue,
      light: {
        alertBackground: lighten(defaultColors.blue, 45),
        alertColor: defaultColors.black,
      },
    },
    secondary: {
      borderColor: defaultColors.gray,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.gray,
      light: {
        alertBackground: lighten(defaultColors.gray, 40),
        alertColor: defaultColors.black,
      },
    },
    danger: {
      borderColor: defaultColors.red,
      flood: defaultColors.red,
      disabledFlood: lighten(defaultColors.red, 25),
      lightFlood: lighten(defaultColors.red, 50),
      hoverlightFlood: lighten(defaultColors.red, 80),
      text: defaultColors.red,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.red, 10),
      selectedFlood: darken(defaultColors.red, 25),
      badgeBackground: defaultColors.red,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.red,
      light: {
        alertBackground: lighten(defaultColors.red, 40),
        alertColor: defaultColors.black,
      },
    },
    warning: {
      borderColor: defaultColors.yellow,
      flood: defaultColors.yellow,
      disabledFlood: lighten(defaultColors.yellow, 25),
      lightFlood: lighten(defaultColors.yellow, 50),
      hoverlightFlood: lighten(defaultColors.yellow, 80),
      text: defaultColors.yellow,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.yellow, 10),
      selectedFlood: darken(defaultColors.yellow, 25),
      badgeBackground: defaultColors.yellow,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.yellow,
      light: {
        alertBackground: lighten(defaultColors.yellow, 30),
        alertColor: defaultColors.black,
      },
    },
    success: {
      borderColor: defaultColors.green,
      flood: defaultColors.green,
      disabledFlood: lighten(defaultColors.green, 25),
      lightFlood: lighten(defaultColors.green, 50),
      hoverlightFlood: lighten(defaultColors.green, 80),
      text: defaultColors.green,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.green, 10),
      selectedFlood: darken(defaultColors.green, 25),
      badgeBackground: defaultColors.green,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.green,
      light: {
        alertBackground: lighten(defaultColors.green, 40),
        alertColor: defaultColors.black,
      },
    },
    default: {
      borderColor: defaultColors.gray,
      flood: defaultColors.gray,
      disabledFlood: lighten(defaultColors.gray, 25),
      lightFlood: lighten(defaultColors.gray, 50),
      hoverlightFlood: lighten(defaultColors.gray, 80),
      text: defaultColors.primary,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.gray, 5),
      selectedFlood: darken(defaultColors.gray, 25),
      badgeBackground: defaultColors.gray,
      badgeColor: defaultColors.black,
      alertColor: defaultColors.black,
      alertBackground: defaultColors.gray,
    },
  },
  pagination: {
    text: defaultColors.black,
    fontWeight: 'normal',
    background: defaultColors.white,
    borderColor: defaultColors.white,
    activeText: defaultColors.blue,
    activeFontWeight: 'bold',
    activeBackground: defaultColors.white,
    activeBorderColor: defaultColors.blue,
    disabledText: defaultColors.gray,
    disabledBackground: defaultColors.white,
    disabledBorderColor: defaultColors.white,
    hoverBackground: defaultColors.white,
    hoverBorderColor: defaultColors.white,
    borderRadius: '1px',
    button: {
      disabledText: defaultColors.disabledText,
      fontWeight: 'normal',
      fontWeightSelected: 'bold',
      padding: {
        sm: '3px 6px',
        md: '4px 8px',
        lg: '5px 10px',
      },
      nextPrevious: {
        fontWeight: 'bold',
      },
    },
  },
  typography: {
    fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
    secondaryFontFamily: '',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '160%',
    color: defaultColors.primary,
    headline: {
      fontWeight: '300',
      fontSize: '27px',
      lineHeight: '125%',
    },
    sectionHeader: {
      fontWeight: '500',
      fontSize: '16px',
      borderWidth: '1px',
      borderColor: '#8D9599',
      borderStyle: 'solid',
    },
    display: {
      fontWeight: '400',
      fontSize: '37px',
      lineHeight: '120%',
    },
    title: {
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '130%',
    },
    subTitle: {
      fontWeight: '300',
      fontSize: '18px',
      lineHeight: '135%',
    },
    caption: {
      fontWeight: '300',
      fontSize: '12px',
    },
    subHeading: {
      fontWeight: '500',
      fontSize: '16px',
    },
    link: {
      fontWeight: '500',
      fontSize: '14px',
      color: defaultColors.blue,
      textDecoration: 'none',
      visited: {
        color: lighten(defaultColors.blue, 40),
        textDecoration: 'underline',
      },
      hover: {
        color: defaultColors.blue,
        textDecoration: 'underline',
      },
    },
    digits: {
      fontWeight: '700',
      fontSize: '18px',
    },
    tooltip: {
      background: defaultColors.primary,
      borderRadius: '1px',
    },
    popover: {
      background: defaultColors.white,
      color: defaultColors.black,
      borderRadius: '1px',
      borderColor: defaultColors.lightGray,
    },
    pre: {
      background: defaultColors.lightBackground,
      fontFamily: '"Roboto Mono", Courier, monospace',
      fontSize: '100%',
      lineHeight: '100%',
    },
    code: {
      background: defaultColors.lightBackground,
      fontFamily:
        '"Roboto Mono", Consolas, "Andale Mono", "DejaVu Sans Mono", monospace',
      fontSize: '95%',
      lineHeight: '140%',
    },
  },
  input: {
    background: defaultColors.white,
    borderColor: defaultColors.gray,
    color: defaultColors.darkGray,
    padding: '.375rem .75rem',
    placeholderColor: defaultColors.placeholderGray,
    disabled: {
      background: defaultColors.disabledBackground,
      borderColor: defaultColors.disabledBorder,
    },
  },
  inputGroup: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  radioButton: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: defaultColors.gray,
    disabledText: defaultColors.disabledText,
    unselectedColor: defaultColors.white,
    sm: {
      size: '6px',
    },
    md: {
      size: '10px',
    },
    lg: {
      size: '14px',
    },
  },
  checkbox: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: defaultColors.gray,
    disabledText: defaultColors.disabledText,
    unselectedColor: defaultColors.white,
    sm: {
      size: '6px',
    },
    md: {
      size: '10px',
    },
    lg: {
      size: '14px',
    },
  },
  toggle: {
    background: {
      inactiveColor: toggleColors.toggleBg,
      inactiveBorderColor: toggleColors.toggleBg,
      activeColor: toggleColors.toggleBg,
      activeBorderColor: toggleColors.toggleBg,
      disabled: toggleColors.disabledToggleBg,
      disabledBorderColor: toggleColors.disabledToggleBg,
    },
    inactiveColor: defaultColors.gray,
    inactiveBorderColor: defaultColors.gray,
    activeColor: defaultColors.blue,
    activeBorderColor: defaultColors.blue,
    activeDisabledColor: toggleColors.activeDisabledToggle,
    activeDisabledBorderColor: toggleColors.activeDisabledToggle,
    inactiveDisabledColor: toggleColors.inactiveDisabledToggle,
    inactiveDisabledBorderColor: toggleColors.inactiveDisabledToggle,
    sm: {
      toggleSize: '20px',
      toggleOffsetTop: '-3px',
      toggleOffsetLeft: '0px',
      activeOffset: '0px',
      backgroundHeight: '15px',
      backgroundWidth: '35px',
    },
    md: {
      toggleSize: '25px',
      toggleOffsetTop: '-5px',
      toggleOffsetLeft: '0px',
      activeOffset: '0px',
      backgroundHeight: '15px',
      backgroundWidth: '45px',
    },
    lg: {
      toggleSize: '30px',
      toggleOffsetTop: '-5px',
      toggleOffsetLeft: '0px',
      activeOffset: '0px',
      backgroundHeight: '20px',
      backgroundWidth: '55px',
    },
  },
  label: {
    padding: '9px 8px',
  },
  modal: {
    header: {
      minHeight: '0',
      backgroundColor: defaultColors.modalBackground,
      borderColor: defaultColors.lightGray,
      padding: '16px 16px',
      fontSize: '16px',
    },
    body: {
      minHeight: '0',
      backgroundColor: defaultColors.modalBackground,
      borderBottom: defaultColors.lightGray,
      padding: '8px 16px',
    },
    footer: {
      minHeight: '0',
      backgroundColor: defaultColors.modalBackground,
      borderColor: defaultColors.lightGray,
      padding: '8px 16px',
    },
    sm: {
      maxWidth: '300px',
    },
    md: {
      maxWidth: '500px',
    },
    lg: {
      maxWidth: '800px',
    },
  },
  textarea: {
    background: defaultColors.white,
    backgroundDisabled: defaultColors.lightGray,
    borderColor: defaultColors.gray,
    color: defaultColors.darkGray,
    padding: '.375rem .75rem',
    placeholderColor: defaultColors.placeholderGray,
    disabled: {
      background: defaultColors.disabledBackground,
      borderColor: defaultColors.disabledBorder,
    },
  },
  panel: {
    header: {
      padding: '14px 16px 14px 30px',
    },
    body: {
      padding: '30px 30px',
    },
    borderWidth: '1px',
  },
  badge: {
    borderRadius: '10px',
    fontSize: '10px',
    padding: '4px 10px',
    sm: {
      borderRadius: '10px',
      fontSize: '10px',
      padding: '4px 10px',
    },
    md: {
      borderRadius: '12px',
      fontSize: '12px',
      padding: '4px 10px',
    },
    lg: {
      borderRadius: '14px',
      fontSize: '14px',
      padding: '4px 10px',
    },
  },
  alert: {
    borderRadius: '0px',
    fontSize: '14px',
    display: 'block',
    padding: '8px 16px',
    fontWeight: 'bold',
    lineHeight: '18px',
  },
  popover: {
    withArrowDistance: 10,
    withoutArrowDistance: 3,
  },
  common: {
    sm: {
      borderRadius: '1px',
      fontSize: '11px',
      padding: '4px 8px',
      tableCellPadding: '5px 0',
      inputIconSize: '14px',
    },
    md: {
      borderRadius: '1px',
      fontSize: '14px',
      padding: '8px 14px',
      tableCellPadding: '9px 0',
      inputIconSize: '20px',
    },
    lg: {
      borderRadius: '1px',
      fontSize: '16px',
      padding: '10px 16px',
      tableCellPadding: '11px 0',
      inputIconSize: '24px',
    },
  },
  validation: {
    borderColor: 'red',
    errorTextColor: defaultColors.placeholderGray,
    fontSize: '11px',
    padding: '4px',
  },
  table: {
    fontSize: '14px',
    header: {
      borderBottomColor: defaultColors.darkGray,
      color: defaultColors.blue,
      fontWeight: 'normal',
    },
    row: {
      borderBottomColor: defaultColors.mediumGray,
      hoverColor: defaultColors.mediumGray,
    },
    pagination: {
      padding: '4px 0',
      button: {
        disabledText: defaultColors.disabledText,
        fontWeight: 'normal',
        fontWeightSelected: 'bold',
        padding: {
          sm: '3px 6px',
          md: '4px 8px',
          lg: '5px 10px',
        },
        nextPrevious: {
          fontWeight: 'bold',
        },
      },
    },
  },
  datepicker: {
    position: 'absolute',
    zIndex: 99,
    sm: {
      margins: {
        dayPickerWraper: '1rem 0',
        dayPickerMonth: '1rem 1rem auto',
        dayPickerCaption: '.3rem auto 2rem',
      },
      btnPrev: {
        left: '2rem',
      },
      btnNext: {
        right: '2.2rem',
      },
    },
    md: {
      margins: {
        dayPickerWraper: '1.5rem 0',
        dayPickerMonth: '1rem 1.5rem auto',
        dayPickerCaption: '.3rem auto 3rem',
      },
      btnPrev: {
        left: '3rem',
      },
      btnNext: {
        right: '3.2rem',
      },
    },
    lg: {
      margins: {
        dayPickerWraper: '1.5rem 0',
        dayPickerMonth: '1rem 1.5rem auto',
        dayPickerCaption: '.3rem auto 3rem',
      },
      btnPrev: {
        left: '3rem',
      },
      btnNext: {
        right: '3.2rem',
      },
    },
  },
  tabs: {
    borderRadius: '0px',
    fontSize: '14px',
  },
  copyToClipboard: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: defaultColors.primary,
    copiedColor: defaultColors.placeholderGray,
    padding: '16px',
    button: {
      textTransform: 'uppercase',
      height: '20px',
      fontWeight: '600',
      primaryColor: defaultColors.blue,
      successColor: defaultColors.green,
      margin: '0 4px',
    },
  },
  navbar: {
    height: '60px',
    background: defaultColors.white,
    padding: '0 32px ',
    borderTop: '',
    borderBottom: '',
    color: defaultColors.primary,
  },
  sidenav: {
    fontSize: '14px',
    color: defaultColors.primary,
    height: '',
    width: '50px',
    openWidth: '220px',
    background: defaultColors.lightBackground,
    padding: '',
    margin: '',
    zIndex: 5,
    borderLeft: '',
    borderRight: `1px solid ${defaultColors.lightBorder}`,
    transition: 'min-width 0.15s',
    secondaryNavbar: {
      width: '0px',
      openWidth: '170px',
      background: defaultColors.white,
      padding: '80px 0 16px',
      margin: '',
      zIndex: 4,
      borderLeft: '',
      borderRight: `1px solid ${defaultColors.lightBorder}`,
      transition: 'left 0.15s',
    },
    nav: {
      padding: '',
      margin: '',
    },
    toggle: {
      height: '80px',
      cursor: 'pointer',
      padding: '0 12px',
      borderBottom: `1px solid ${defaultColors.lightBorder}`,
      display: 'grid',
    },
    navItem: {
      color: 'inherit',
      fontWeight: 'inherit',
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      leftBorderWidth: '0',
      leftBorderColor: 'transparent',
      topNavBorderBottom: `1px solid ${defaultColors.lightBorder}`,
      bottonNavBorderBottom: '',
      transition: 'opacity 0.15s',
    },
    activenavItem: {
      color: defaultColors.blue,
      fontWeight: 700,
      cursor: 'pointer',
      background: defaultColors.white,
      opacity: '1',
      leftBorderWidth: '4px',
      leftBorderColor: defaultColors.blue,
      topNavBorderBottom: `1px solid ${defaultColors.lightBorder}`,
      bottonNavBorderBottom: '',
    },
    activeSecnavItem: {
      color: defaultColors.blue,
      fontWeight: 700,
      background: defaultColors.lightBackground,
    },
    itemToggle: {
      position: 'absolute',
      right: '0',
      background: defaultColors.lightBackground,
      height: '100%',
      width: '30px',
      display: 'flex',
    },
    navIcon: {
      padding: '8px 0 8px 12px',
    },
    navText: {
      padding: '8px 0 8px 12px',
    },
  },
};
