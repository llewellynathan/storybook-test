import { createMaterialSnackbar, showSnackbar } from './MaterialSnackbar.js';

export default {
  title: 'Material Design/Snackbar',
  parameters: {
    docs: {
      description: {
        component: 'Snackbars provide brief messages about app processes at the bottom of the screen. They inform users of a process that an app has performed or will perform.',
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'The message displayed in the snackbar',
    },
    actionText: {
      control: 'text',
      description: 'Text for the action button (optional)',
    },
    leading: {
      control: 'boolean',
      description: 'Whether to align the snackbar to the leading edge',
    },
    stacked: {
      control: 'boolean',
      description: 'Whether to stack the action below the message',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether to show a dismiss button',
    },
    timeout: {
      control: { type: 'number', min: 0, max: 10000, step: 1000 },
      description: 'Auto-dismiss timeout in milliseconds (0 to disable)',
    },
    onAction: { 
      action: 'action-clicked',
      description: 'Function called when action button is clicked',
    },
    onDismiss: { 
      action: 'snackbar-dismissed',
      description: 'Function called when snackbar is dismissed',
    },
  },
};

export const Basic = {
  args: {
    message: 'Campaign saved successfully',
    timeout: 0,
  },
  render: (args) => createMaterialSnackbar(args),
};

export const WithAction = {
  args: {
    message: 'Campaign deleted',
    actionText: 'UNDO',
    timeout: 0,
  },
  render: (args) => createMaterialSnackbar(args),
};

export const WithDismiss = {
  args: {
    message: 'Unable to connect to server',
    actionText: 'RETRY',
    dismissible: true,
    timeout: 0,
  },
  render: (args) => createMaterialSnackbar(args),
};

export const Stacked = {
  args: {
    message: 'This is a longer message that might require stacking the action button below the text for better readability',
    actionText: 'ACTION',
    stacked: true,
    dismissible: true,
    timeout: 0,
  },
  render: (args) => createMaterialSnackbar(args),
};

export const Leading = {
  args: {
    message: 'Leading aligned snackbar',
    actionText: 'ACTION',
    leading: true,
    timeout: 0,
  },
  render: (args) => createMaterialSnackbar(args),
};

export const AutoDismiss = {
  args: {
    message: 'This message will auto-dismiss in 3 seconds',
    timeout: 3000,
  },
  render: (args) => createMaterialSnackbar(args),
};

export const InteractiveDemo = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.textAlign = 'center';
    
    const title = document.createElement('h3');
    title.textContent = 'Interactive Snackbar Demo';
    title.style.marginBottom = '24px';
    container.appendChild(title);
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '16px';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.flexWrap = 'wrap';
    
    const buttons = [
      {
        label: 'Show Success',
        onClick: () => showSnackbar({
          message: '✓ Campaign saved successfully',
          actionText: 'VIEW',
          onAction: () => console.log('View clicked'),
        }),
      },
      {
        label: 'Show Error',
        onClick: () => showSnackbar({
          message: '⚠ Failed to save campaign',
          actionText: 'RETRY',
          dismissible: true,
          onAction: () => console.log('Retry clicked'),
        }),
      },
      {
        label: 'Show Info',
        onClick: () => showSnackbar({
          message: 'ℹ Campaign will be published in 5 minutes',
          timeout: 5000,
        }),
      },
      {
        label: 'Show with Long Text',
        onClick: () => showSnackbar({
          message: 'This is a much longer message that demonstrates how snackbars handle extended content gracefully',
          actionText: 'GOT IT',
          stacked: true,
          dismissible: true,
        }),
      },
    ];
    
    buttons.forEach(button => {
      const btn = document.createElement('button');
      btn.className = 'mdc-button mdc-button--raised';
      btn.style.margin = '4px';
      
      const ripple = document.createElement('div');
      ripple.className = 'mdc-button__ripple';
      btn.appendChild(ripple);
      
      const label = document.createElement('span');
      label.className = 'mdc-button__label';
      label.textContent = button.label;
      btn.appendChild(label);
      
      btn.addEventListener('click', button.onClick);
      buttonContainer.appendChild(btn);
    });
    
    container.appendChild(buttonContainer);
    
    const note = document.createElement('p');
    note.textContent = 'Click the buttons above to show different snackbar variants. Snackbars will appear at the bottom of the screen.';
    note.style.marginTop = '24px';
    note.style.color = '#666';
    note.style.fontSize = '14px';
    container.appendChild(note);
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing different snackbar types. Click buttons to trigger snackbars that appear at the bottom of the screen.',
      },
    },
  },
};

export const CampaignNotifications = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    
    const title = document.createElement('h3');
    title.textContent = 'Campaign Management Notifications';
    title.style.marginBottom = '24px';
    container.appendChild(title);
    
    const scenarios = [
      {
        title: 'Campaign Actions',
        buttons: [
          {
            label: 'Save Campaign',
            snackbar: { message: 'Campaign "Summer Sale 2024" saved', actionText: 'EDIT' },
          },
          {
            label: 'Delete Campaign',
            snackbar: { message: 'Campaign deleted', actionText: 'UNDO', dismissible: true },
          },
          {
            label: 'Publish Campaign',
            snackbar: { message: 'Campaign published successfully', actionText: 'VIEW STATS' },
          },
        ],
      },
      {
        title: 'Status Updates',
        buttons: [
          {
            label: 'Campaign Started',
            snackbar: { message: '🚀 Campaign "Email Blast" is now running', timeout: 4000 },
          },
          {
            label: 'Budget Alert',
            snackbar: { message: '⚠ Campaign budget 80% spent', actionText: 'ADJUST', dismissible: true },
          },
          {
            label: 'Performance Update',
            snackbar: { message: '📈 Campaign performance above target', actionText: 'DETAILS' },
          },
        ],
      },
    ];
    
    scenarios.forEach(scenario => {
      const sectionTitle = document.createElement('h4');
      sectionTitle.textContent = scenario.title;
      sectionTitle.style.margin = '32px 0 16px 0';
      sectionTitle.style.color = '#6200ea';
      container.appendChild(sectionTitle);
      
      const buttonGroup = document.createElement('div');
      buttonGroup.style.display = 'flex';
      buttonGroup.style.gap = '12px';
      buttonGroup.style.flexWrap = 'wrap';
      
      scenario.buttons.forEach(buttonConfig => {
        const btn = document.createElement('button');
        btn.className = 'mdc-button mdc-button--outlined';
        
        const ripple = document.createElement('div');
        ripple.className = 'mdc-button__ripple';
        btn.appendChild(ripple);
        
        const label = document.createElement('span');
        label.className = 'mdc-button__label';
        label.textContent = buttonConfig.label;
        btn.appendChild(label);
        
        btn.addEventListener('click', () => showSnackbar(buttonConfig.snackbar));
        buttonGroup.appendChild(btn);
      });
      
      container.appendChild(buttonGroup);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world campaign management notification examples showing different snackbar use cases.',
      },
    },
  },
};