import { lighten } from '../utils/colorUtils';

export { ThemeProvider } from 'styled-components';

export const cobaltColors = {
  white: '#ffffff',
  black: '#000000',
  highlight400: '#E8EEFD',
  highlight200: '#F2F6FF',
  drk800: '#303E47',
  drk600: '#687279',
  drk400: '#A7ADB1',
  drk200: '#C6CACC',
  lt800: '#DADCDE',
  lt600: '#E6E8EA',
  lt400: '#F0F2F4',
  lt200: '#F5F7F8',
  primary: '#0072CE',
  primaryHover: '#004ABF',
  primaryFaded: '#7EB7E6',
  primaryBackground: '#D3EBFF',
  success: '#00BF6F',
  successHover: '#00A254',
  successFaded: '#7EDEB6',
  successBackground: '#DAF8E6',
  danger: '#FC2802',
  dangerHover: '#DD2301',
  dangerFaded: '#FD9380',
  dangerBackground: '#FFDFD9',
  warning: '#FD8236',
  warningHover: '#E65900',
  warningFaded: '#FFB07F',
  warningBackground: '#FFDFCB',
  secondary: '#C6CACC',
  secondaryHover: '#A7ADB1',
  secondaryFaded: '#DADCDE',
  secondaryBackground: '#F0F2F4',
};

export const cobaltTheme = {
  name: 'Cobalt',
  colors: cobaltColors,
  borders: {
    radius: '1px',
    radiusSm: '3.2px',
    radiusLg: '4.8px',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: cobaltColors.primary,
      flood: cobaltColors.primary,
      disabledFlood: cobaltColors.primaryFaded,
      lightFlood: cobaltColors.primaryFaded,
      hoverlightFlood: cobaltColors.primaryFaded,
      text: cobaltColors.primary,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.primaryHover,
      selectedFlood: cobaltColors.primaryHover,
      badgeBackground: cobaltColors.primaryFaded,
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.primary,
      light: {
        alertBackground: cobaltColors.primaryBackground,
        alertColor: cobaltColors.drk800,
        badgeBackground: cobaltColors.primaryBackground,
        badgeColor: cobaltColors.primary,
      },
      cardTopBorderColor: cobaltColors.primary,
    },
    secondary: {
      borderColor: cobaltColors.secondary,
      flood: cobaltColors.secondary,
      disabledFlood: cobaltColors.secondaryFaded,
      lightFlood: cobaltColors.secondaryFaded,
      hoverlightFlood: cobaltColors.secondaryFaded,
      text: cobaltColors.primary,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.secondaryHover,
      selectedFlood: cobaltColors.secondaryHover,
      badgeBackground: cobaltColors.secondaryFaded,
      badgeColor: cobaltColors.drk800,
      alertColor: cobaltColors.drk800,
      alertBackground: cobaltColors.secondary,
      light: {
        alertBackground: cobaltColors.secondaryBackground,
        alertColor: cobaltColors.drk800,
        badgeBackground: cobaltColors.secondaryBackground,
        badgeColor: cobaltColors.secondary,
      },
      cardTopBorderColor: cobaltColors.secondary,
    },
    danger: {
      borderColor: cobaltColors.danger,
      flood: cobaltColors.danger,
      disabledFlood: cobaltColors.dangerFaded,
      lightFlood: cobaltColors.dangerFaded,
      hoverlightFlood: cobaltColors.dangerFaded,
      text: cobaltColors.danger,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.dangerHover,
      selectedFlood: cobaltColors.dangerHover,
      badgeBackground: cobaltColors.dangerFaded,
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.danger,
      light: {
        alertBackground: cobaltColors.dangerBackground,
        alertColor: cobaltColors.drk800,
        badgeBackground: cobaltColors.dangerBackground,
        badgeColor: cobaltColors.danger,
      },
      cardTopBorderColor: cobaltColors.danger,
    },
    warning: {
      borderColor: cobaltColors.warning,
      flood: cobaltColors.warning,
      disabledFlood: cobaltColors.warningFaded,
      lightFlood: cobaltColors.warningFaded,
      hoverlightFlood: cobaltColors.warningFaded,
      text: cobaltColors.warning,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.warningHover,
      selectedFlood: cobaltColors.warningHover,
      badgeBackground: cobaltColors.warningFaded,
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.warning,
      light: {
        alertBackground: cobaltColors.warningBackground,
        alertColor: cobaltColors.drk800,
        badgeBackground: cobaltColors.warningBackground,
        badgeColor: cobaltColors.warning,
      },
      cardTopBorderColor: cobaltColors.warning,
    },
    success: {
      borderColor: cobaltColors.success,
      flood: cobaltColors.success,
      disabledFlood: cobaltColors.successFaded,
      lightFlood: cobaltColors.successFaded,
      hoverlightFlood: cobaltColors.successFaded,
      text: cobaltColors.success,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.successHover,
      selectedFlood: cobaltColors.successHover,
      badgeBackground: cobaltColors.successFaded,
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.success,
      light: {
        alertBackground: cobaltColors.successBackground,
        alertColor: cobaltColors.drk800,
        badgeBackground: cobaltColors.successBackground,
        badgeColor: cobaltColors.success,
      },
      cardTopBorderColor: cobaltColors.success,
    },
  },
  pagination: {
    text: cobaltColors.drk800,
    fontWeight: 'normal',
    background: cobaltColors.white,
    borderColor: cobaltColors.white,
    activeText: cobaltColors.primary,
    activeFontWeight: 'bold',
    activeBackground: cobaltColors.white,
    activeBorderColor: cobaltColors.primary,
    disabledText: cobaltColors.secondaryHover,
    disabledBackground: cobaltColors.white,
    disabledBorderColor: cobaltColors.white,
    hoverBackground: cobaltColors.white,
    hoverBorderColor: cobaltColors.white,
    borderRadius: '1px',
    button: {
      disabledText: cobaltColors.lt600,
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
  body: {
    fontFamily: '"Gilroy-Regular", "Open Sans", arial, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '18px',
    color: cobaltColors.drk800,
    backgroundColor: cobaltColors.white,
  },
  button: {
    outlineBackgroundColor: 'white',
  },
  typography: {
    fontFamily: '"Gilroy-Regular", "Open Sans", arial, sans-serif',
    secondaryFontFamily: '',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '160%',
    color: cobaltColors.drk800,
    caption: {
      10: {
        fontFamily: '"Gilroy-Regular", "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '10px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: '"Gilroy-Regular", "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
    },
    bodyText: {
      10: {
        fontFamily: '"Gilroy-Regular", "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: '"Gilroy-Regular", "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '160%',
      },
    },
    code: {
      background: cobaltColors.lt200,
      fontFamily:
        '"Roboto Mono", Consolas, "Andale Mono", "DejaVu Sans Mono", monospace',
      fontSize: '95%',
      lineHeight: '140%',
    },
    digits: {
      fontWeight: '700',
      fontSize: '18px',
    },
    display: {
      10: {
        fontFamily: '"Gilroy-Regular", "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '22px',
        lineHeight: '125%',
      },
      20: {
        fontFamily: '"Gilroy-Light", "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '27px',
        lineHeight: '120%',
      },
    },
    header: {
      10: {
        fontFamily: '"Gilroy-Bold", "Open Sans", arial, sans-serif',
        fontWeight: '700',
        fontSize: '13px',
        lineHeight: '160%',
      },
      20: {
        fontFamily: '"Gilroy-Bold", "Open Sans", arial, sans-serif',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '175%',
      },
    },
    link: {
      fontWeight: '500',
      fontSize: '14px',
      color: cobaltColors.primary,
      textDecoration: 'none',
      visited: {
        color: cobaltColors.primary,
        textDecoration: 'underline',
      },
      hover: {
        color: cobaltColors.primary,
        textDecoration: 'underline',
      },
    },
    pre: {
      background: cobaltColors.lt200,
      fontFamily: '"Roboto Mono", Courier, monospace',
      fontSize: '100%',
      lineHeight: '100%',
    },
    sectionHeader: {
      fontWeight: '500',
      fontSize: '16px',
      borderWidth: '1px',
      borderColor: '#8D9599',
      borderStyle: 'solid',
    },
    subHeading: {
      fontWeight: '500',
      fontSize: '16px',
    },
    subTitle: {
      fontWeight: '300',
      fontSize: '18px',
      lineHeight: '135%',
    },
    title: {
      10: {
        fontFamily: '"Gilroy-Bold", "Open Sans", arial, sans-serif',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '130%',
      },
      20: {
        fontFamily: '"Gilroy-Bold", "Open Sans", arial, sans-serif',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '135%',
      },
    },
  },
  input: {
    background: cobaltColors.white,
    border: `1px solid ${cobaltColors.secondary}`,
    color: cobaltColors.drk600,
    fontSize: '14px',
    placeholderColor: cobaltColors.drk400,
    disabled: {
      background: cobaltColors.lt600,
      border: `1px solid transparent`,
    },
    sm: {
      height: '24px',
      padding: '4px 7px',
    },
    md: {
      height: '32px',
      padding: '8px 10px',
    },
    lg: {
      height: '40px',
      padding: '11px 16px 13px',
    },
  },
  inputGroup: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      color: cobaltColors.primary,
    },
    label: {
      padding: '8px 16px 8px 0',
      fontWeight: 500,
    },
  },
  radioButton: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: cobaltColors.secondary,
    disabledText: cobaltColors.lt600,
    unselectedColor: cobaltColors.white,
    stackedSpacing: '10px',
    inlineSpacing: '20px',
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
    borderColor: cobaltColors.primary,
    disabledText: cobaltColors.lt600,
    unselectedColor: cobaltColors.white,
    selectedColor: cobaltColors.primary,
    stackedSpacing: '10px',
    inlineSpacing: '20px',
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
      inactiveColor: cobaltColors.lt800,
      inactiveBorderColor: cobaltColors.lt800,
      activeColor: cobaltColors.lt800,
      activeBorderColor: cobaltColors.lt800,
      disabled: cobaltColors.lt400,
      disabledBorderColor: cobaltColors.lt400,
    },
    inactiveColor: cobaltColors.secondary,
    inactiveBorderColor: cobaltColors.secondary,
    activeColor: cobaltColors.primary,
    activeBorderColor: cobaltColors.primary,
    activeDisabledColor: cobaltColors.primaryFaded,
    activeDisabledBorderColor: cobaltColors.primaryFaded,
    inactiveDisabledColor: cobaltColors.drk200,
    inactiveDisabledBorderColor: cobaltColors.drk200,
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
  listGroup: {
    theme: {
      light: {
        color: cobaltColors.drk800,
        backgroundColor: cobaltColors.white,
      },
      dark: {
        color: cobaltColors.drk800,
        backgroundColor: cobaltColors.highlight200,
      },
    },
  },
  modal: {
    header: {
      minHeight: '0',
      backgroundColor: cobaltColors.lt200,
      borderColor: cobaltColors.lt800,
      padding: '15px',
      fontSize: '16px',
      color: cobaltColors.drk800,
    },
    body: {
      minHeight: '0',
      backgroundColor: cobaltColors.white,
      borderBottom: cobaltColors.lt800,
      padding: '15px',
      color: cobaltColors.drk800,
    },
    footer: {
      minHeight: '0',
      backgroundColor: cobaltColors.lt200,
      borderColor: cobaltColors.lt800,
      padding: '15px',
    },
    sm: {
      width: '300px',
    },
    md: {
      width: '745px',
    },
    lg: {
      width: '1220px',
    },
  },
  textarea: {
    background: cobaltColors.white,
    backgroundDisabled: cobaltColors.secondaryBackground,
    borderColor: cobaltColors.secondary,
    color: cobaltColors.drk800,
    padding: '6px 12px',
    placeholderColor: cobaltColors.drk400,
    disabled: {
      background: cobaltColors.lt600,
      borderColor: cobaltColors.secondaryFaded,
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
    headerBorderColor: cobaltColors.drk400,
    bodyBackgroundColor: cobaltColors.lt200,
    bodyBorderColor: cobaltColors.drk400,
    headerColor: cobaltColors.primary,
    headerBackgroundColor: cobaltColors.white,
  },
  badge: {
    borderRadius: '4px',
    fontSize: '15px',
    padding: '4px 3px 3px',
    sm: {
      borderRadius: '4px',
      fontSize: '12px',
      padding: '4px 3px 3px',
    },
    md: {
      borderRadius: '4px',
      fontSize: '15px',
      padding: '4px 3px 3px',
    },
    lg: {
      borderRadius: '4px',
      fontSize: '18px',
      padding: '4px 3px 3px',
    },
  },
  alert: {
    borderRadius: '1px',
    fontSize: '14px',
    padding: '8px 16px',
    fontWeight: 'bold',
    lineHeight: '18px',
  },
  card: {
    borderRadius: '2px',
    borderColor: cobaltColors.secondaryHover,
    fontSize: '14px',
    padding: '8px 16px',
    background: cobaltColors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,.075) !important;',
    highlightAllBorderWidth: '1px',
    highlightedBorderWidth: '5px',
  },
  popover: {
    withArrowDistance: 10,
    withoutArrowDistance: 9,
    background: cobaltColors.white,
    color: cobaltColors.drk800,
    borderRadius: '1px',
    borderColor: cobaltColors.lt800,
    boxShadow: `0 0 5px ${cobaltColors.lt800}`,
  },
  tooltip: {
    background: cobaltColors.drk800,
    borderRadius: '1px',
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
    borderColor: cobaltColors.danger,
    color: cobaltColors.drk400,
    fontSize: '11px',
    fontStyle: 'italic',
    padding: '4px',
  },
  table: {
    fontSize: '14px',
    header: {
      borderBottomColor: cobaltColors.drk800,
      color: cobaltColors.drk800,
      fontWeight: 'bold',
    },
    row: {
      borderBottomColor: cobaltColors.drk400,
      highlightColor: cobaltColors.highlight200,
      hoverColor: cobaltColors.lt200,
      readonlyColor: cobaltColors.lt200,
    },
    column: {
      highlightColor: cobaltColors.highlight200,
      readonlyColor: cobaltColors.lt200,
    },
    pagination: {
      padding: '4px 0',
      button: {
        disabledText: cobaltColors.lt600,
        fontWeight: 'normal',
        fontWeightSelected: 'bold',
        padding: {
          sm: '3px 6px',
          md: '4px 8px',
          lg: '5px 10px',
        },
        nextPrevious: {
          fontWeight: 'regular',
        },
      },
    },
  },
  datepicker: {
    position: 'absolute',
    zIndex: 99,
    sm: {
      margins: {
        dayPickerWraper: '16px 0',
        dayPickerMonth: '16px 16px auto',
        dayPickerCaption: '4.8px auto 32px',
      },
      btnPrev: {
        left: '32px',
      },
      btnNext: {
        right: '35.2px',
      },
    },
    md: {
      margins: {
        dayPickerWraper: '24px 0',
        dayPickerMonth: '16px 24px auto',
        dayPickerCaption: '4.8px auto 48px',
      },
      btnPrev: {
        left: '48px',
      },
      btnNext: {
        right: '51.2px',
      },
    },
    lg: {
      margins: {
        dayPickerWraper: '24px 0',
        dayPickerMonth: '16px 24px auto',
        dayPickerCaption: '4.8px auto 48px',
      },
      btnPrev: {
        left: '48px',
      },
      btnNext: {
        right: '51.2px',
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
    color: cobaltColors.drk800,
    background: cobaltColors.lt200,
    copiedColor: cobaltColors.drk400,
    padding: '16px',
    button: {
      textTransform: 'uppercase',
      height: '20px',
      fontWeight: 600,
      primaryColor: cobaltColors.primary,
      successColor: cobaltColors.success,
      margin: '0 4px',
    },
  },
  navbar: {
    height: '64px',
    background: cobaltColors.white,
    padding: '0 45px ',
    borderTop: '',
    borderBottom: '',
    color: cobaltColors.drk800,
  },
  tabnav: {
    background: cobaltColors.highlight200,
    padding: '0 32px',
    borderTop: 'none',
    borderBottom: `1px solid ${cobaltColors.lt800}`,
    color: cobaltColors.drk800,
    tab: {
      padding: '4px 0 8px',
      margin: '0 56px 0 0',
      color: 'inherit',
      fontWeight: 'inherit',
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '0',
      bottomBorderColor: 'transparent',
      transition: 'opacity 0.15s',
      iconColor: cobaltColors.primary,
    },
    activetab: {
      color: cobaltColors.drk800,
      fontWeight: 700,
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '4px',
      bottomBorderColor: cobaltColors.primary,
      iconColor: cobaltColors.primary,
    },
    tabDropdown: {
      color: cobaltColors.drk800,
      background: cobaltColors.white,
      padding: '8px 16px',
      hoverColor: cobaltColors.primary,
      hoverBackground: cobaltColors.lt200,
    },
  },
  sidenav: {
    fontSize: '14px',
    color: cobaltColors.primary,
    height: '',
    width: '50px',
    openWidth: '220px',
    background: cobaltColors.lt200,
    padding: '',
    margin: '',
    zIndex: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'auto',
    borderLeft: '',
    borderRight: `1px solid ${cobaltColors.lt800}`,
    transition: 'min-width 0.15s',
    secondaryNavbar: {
      width: '0px',
      openWidth: '170px',
      background: cobaltColors.white,
      padding: '80px 0 16px',
      margin: '',
      zIndex: 4,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 'auto',
      borderLeft: '',
      borderRight: `1px solid ${cobaltColors.lt800}`,
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
      borderBottom: `1px solid ${cobaltColors.lt800}`,
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
      topNavBorderBottom: `1px solid ${cobaltColors.lt800}`,
      bottonNavBorderBottom: '',
      transition: 'opacity 0.15s',
    },
    activenavItem: {
      color: cobaltColors.primary,
      fontWeight: 700,
      cursor: 'pointer',
      background: cobaltColors.white,
      opacity: '1',
      leftBorderWidth: '4px',
      leftBorderColor: cobaltColors.primary,
      topNavBorderBottom: `1px solid ${cobaltColors.lt800}`,
      bottonNavBorderBottom: '',
    },
    activeSecnavItem: {
      color: cobaltColors.primary,
      fontWeight: 700,
      background: cobaltColors.lt200,
    },
    itemToggle: {
      position: 'absolute',
      right: '0',
      background: cobaltColors.lt200,
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
  spinner: {
    backgroundColor: cobaltColors.lt800,
    borderColor: cobaltColors.primary,
  },
  itemContainer: {
    borderColor: cobaltColors.lt800,
  },
  select: {
    dropdownColor: cobaltColors.primary,
    optionBackgroundColor: cobaltColors.lt800,
    hoverOptionBackgroundColor: lighten(cobaltColors.primary, 75),
    borderColor: cobaltColors.secondary,
  },
  fileUpload: {
    fontSize: '14px',
    dropZone: {
      color: cobaltColors.secondaryHover,
      border: `1px dashed ${cobaltColors.lt800}`,
      draggingBorder: `1px dashed ${cobaltColors.drk400}`,
      borderRadius: '1px',
      textAlign: 'center',
      padding: '16px',
      margin: '0 0 16px',
      ctaColor: cobaltColors.primary,
      background: cobaltColors.white,
      draggingBackground: cobaltColors.lt200,
    },
    file: {
      defaultColor: cobaltColors.drk800,
      primaryColor: cobaltColors.primary,
      dangerColor: cobaltColors.danger,
      background: cobaltColors.lt200,
      borderRadius: '1px',
      textAlign: 'left',
      padding: '16px',
      margin: '3px 0',
    },
  },
  progressBar: {
    height: '8px',
    borderRadius: '6px',
    background: cobaltColors.lt800,
    progressBackground: cobaltColors.primary,
    transition: 'width .2s ease-in',
  },
};
