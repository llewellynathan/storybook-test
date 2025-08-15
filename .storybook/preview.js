/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f5f5f5',
        },
        {
          name: 'dark',
          value: '#121212',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
  },
  decorators: [
    (Story) => {
      // Load Material Design CSS and fonts
      const link1 = document.createElement('link');
      link1.href = 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css';
      link1.rel = 'stylesheet';
      document.head.appendChild(link1);
      
      // Load both Material Icons and Material Symbols for comprehensive icon support
      const link2 = document.createElement('link');
      link2.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
      link2.rel = 'stylesheet';
      document.head.appendChild(link2);
      
      const link2b = document.createElement('link');
      link2b.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
      link2b.rel = 'stylesheet';
      document.head.appendChild(link2b);
      
      const link2c = document.createElement('link');
      link2c.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
      link2c.rel = 'stylesheet';
      document.head.appendChild(link2c);
      
      const link3 = document.createElement('link');
      link3.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap';
      link3.rel = 'stylesheet';
      document.head.appendChild(link3);

      // Load Material Design JavaScript
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js';
      script.onload = () => {
        // Initialize MDC components after the story is rendered
        setTimeout(() => {
          // Auto-initialize common MDC components
          const buttons = document.querySelectorAll('.mdc-button:not([data-mdc-ripple-is-unbounded])');
          buttons.forEach(button => new mdc.ripple.MDCRipple(button));
          
          const iconButtons = document.querySelectorAll('.mdc-icon-button:not([data-mdc-ripple-is-unbounded])');
          iconButtons.forEach(iconButton => {
            const ripple = new mdc.ripple.MDCRipple(iconButton);
            ripple.unbounded = true;
          });
          
          const cards = document.querySelectorAll('.mdc-card__primary-action:not([data-mdc-ripple-is-unbounded])');
          cards.forEach(card => new mdc.ripple.MDCRipple(card));
          
          const fabs = document.querySelectorAll('.mdc-fab:not([data-mdc-ripple-is-unbounded])');
          fabs.forEach(fab => new mdc.ripple.MDCRipple(fab));
        }, 100);
      };
      document.head.appendChild(script);

      return Story();
    }
  ],
};

export default preview;