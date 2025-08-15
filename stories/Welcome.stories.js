export default {
  title: 'Welcome',
  parameters: {
    docs: {
      description: {
        component: 'Welcome to the Cinch Material Design component library!',
      },
    },
  },
};

export const Welcome = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.fontFamily = 'Roboto, sans-serif';
    container.style.maxWidth = '800px';
    container.style.margin = '0 auto';
    
    container.innerHTML = `
      <h1 style="color: #6200ea; margin-bottom: 24px; font-weight: 400;">
        Cinch Material Design Components
      </h1>
      
      <p style="font-size: 18px; line-height: 1.6; margin-bottom: 32px; color: rgba(0,0,0,0.87);">
        Welcome to the Cinch component library built with Material Design principles!
      </p>
      
      <p style="line-height: 1.6; margin-bottom: 24px; color: rgba(0,0,0,0.6);">
        This Storybook contains all the Material Design components used in the Cinch application. 
        Each component follows Google's Material Design specifications and includes interactive 
        documentation, code examples, and testing capabilities.
      </p>
      
      <h2 style="color: #6200ea; margin: 32px 0 16px 0; font-weight: 500;">What's included</h2>
      
      <h3 style="color: #6200ea; margin: 24px 0 12px 0; font-weight: 500;">Components</h3>
      <ul style="line-height: 1.8; color: rgba(0,0,0,0.6); margin-bottom: 24px;">
        <li><strong>Buttons</strong> - Material Design buttons with different variants (raised, outlined, text)</li>
        <li><strong>Cards</strong> - Content containers with optional media, actions, and different layouts</li>
        <li><strong>FAB (Floating Action Button)</strong> - Primary action buttons that float above content</li>
      </ul>
      
      <h3 style="color: #6200ea; margin: 24px 0 12px 0; font-weight: 500;">Features</h3>
      <ul style="line-height: 1.8; color: rgba(0,0,0,0.6); margin-bottom: 24px;">
        <li><strong>Interactive Controls</strong> - Modify component props in real-time</li>
        <li><strong>Documentation</strong> - Comprehensive docs for each component</li>
        <li><strong>Responsive Design</strong> - All components work across different screen sizes</li>
        <li><strong>Material Theming</strong> - Consistent color scheme and typography</li>
        <li><strong>Accessibility</strong> - ARIA labels and keyboard navigation support</li>
      </ul>
      
      <h2 style="color: #6200ea; margin: 32px 0 16px 0; font-weight: 500;">Getting Started</h2>
      
      <ol style="line-height: 1.8; color: rgba(0,0,0,0.6); margin-bottom: 24px;">
        <li><strong>Browse Components</strong> - Navigate through the sidebar to explore different components</li>
        <li><strong>Interact</strong> - Use the Controls panel to modify component properties</li>
        <li><strong>View Code</strong> - Check the Docs tab to see implementation details</li>
        <li><strong>Test</strong> - Use the different stories to test various component states</li>
      </ol>
      
      <h2 style="color: #6200ea; margin: 32px 0 16px 0; font-weight: 500;">Material Design Resources</h2>
      
      <ul style="line-height: 1.8; color: rgba(0,0,0,0.6); margin-bottom: 24px;">
        <li><a href="https://material.io/design" target="_blank" style="color: #6200ea;">Material Design Guidelines</a></li>
        <li><a href="https://material.io/develop/web" target="_blank" style="color: #6200ea;">Material Components Web</a></li>
        <li><a href="https://fonts.google.com/icons" target="_blank" style="color: #6200ea;">Material Icons</a></li>
      </ul>
      
      <h2 style="color: #6200ea; margin: 32px 0 16px 0; font-weight: 500;">Development</h2>
      
      <p style="line-height: 1.6; margin-bottom: 12px; color: rgba(0,0,0,0.6);">
        To run Storybook in development:
      </p>
      <pre style="background: #f5f5f5; padding: 16px; border-radius: 4px; margin-bottom: 16px; overflow-x: auto;">
        <code>npm run storybook</code>
      </pre>
      
      <p style="line-height: 1.6; margin-bottom: 12px; color: rgba(0,0,0,0.6);">
        To build Storybook for production:
      </p>
      <pre style="background: #f5f5f5; padding: 16px; border-radius: 4px; margin-bottom: 32px; overflow-x: auto;">
        <code>npm run build-storybook</code>
      </pre>
      
      <p style="font-size: 18px; color: #6200ea; text-align: center; margin-top: 40px;">
        Happy building! 🎨
      </p>
    `;
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Welcome page with documentation and getting started guide for the Cinch Material Design component library.',
      },
    },
  },
};