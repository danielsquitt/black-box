import { createGlobalStyle } from 'styled-components';

const theme = {
  color: {
    main: {
      background: '#3E454C',
      color: 'white',
    },
    navbar: {
      color: 'white',
      background: '#343A40',
      hover: '#c5c5c5',
    },
    sidebar: {
      color: 'white',
      background: '#343A40',
      hover: '#c5c5c5',
    },
    pallet: {
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
      },
      secondary: {
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2',
      },
      success: {
        main: '#2e7d32',
        light: '#4caf50',
        dark: '#1b5e20',
      },
      danger: {
        main: '#d32f2f',
        light: '#ef5350',
        dark: '#c62828',
      },
      warning: {
        main: '#ed6c02',
        light: '#ff9800',
        dark: '#e65100',
      },
      info: {
        main: '#0288d1',
        light: '#03a9f4',
        dark: '#01579b',
      },
      grey: {
        main: '#f2f2f2',
        light: '#e5e5e5',
        dark: '#d8d8d8',
      },
    },
  },
  size: {
    navbar: '66px',
    sidebar: '250px',
    sidebar_collapse: '80px',
  },
  border: '1px solid #4f5962',
  breakpoint: {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
};

export default theme;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    font-family: 'Segoe UI';
    font-size: 18px;
  }
  main {
    margin-top: ${theme.size.navbar};
    margin-left: ${theme.size.sidebar_collapse};
    padding: 0.5rem;
  }
  body {
    background-color: ${theme.color.main.background};
    color: ${theme.color.main.color}
  }
  .primary {
    color: ${theme.color.pallet.primary.main};
  }
  .primary-light {
    color: ${theme.color.pallet.primary.light};
  }
  .primary-dark {
    color: ${theme.color.pallet.primary.dark};
  }

  .secondary {
    color: ${theme.color.pallet.secondary.main};
  }
  .secondary-light {
    color: ${theme.color.pallet.secondary.light};
  }
  .secondary-dark {
    color: ${theme.color.pallet.secondary.dark};
  }

  .success {
    color: ${theme.color.pallet.success.main};
  }
  .success-light {
    color: ${theme.color.pallet.success.light};
  }
  .success-dark {
    color: ${theme.color.pallet.success.dark};
  }

  .danger {
    color: ${theme.color.pallet.danger.main};
  }
  .danger-light {
    color: ${theme.color.pallet.danger.light};
  }
  .danger-dark {
    color: ${theme.color.pallet.danger.dark};
  }

  .warning {
    color: ${theme.color.pallet.warning.main};
  }
  .warning-light {
    color: ${theme.color.pallet.warning.light};
  }
  .warning-dark {
    color: ${theme.color.pallet.warning.dark};
  }

  .info {
    color: ${theme.color.pallet.info.main};
  }
  .info-light {
    color: ${theme.color.pallet.info.light};
  }
  .info-dark {
    color: ${theme.color.pallet.info.dark};
  }

  .grey {
    color: ${theme.color.pallet.grey.main};
  }
  .grey-light {
    color: ${theme.color.pallet.grey.light};
  }
  .grey-dark {
    color: ${theme.color.pallet.grey.dark};
  }
`;
