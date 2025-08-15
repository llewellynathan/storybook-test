import { createMaterialDialog, showDialog } from './MaterialDialog.js';

export default {
  title: 'Material Design/Dialog',
  parameters: {
    docs: {
      description: {
        component: 'Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. They appear in front of app content to provide critical information or ask for a decision.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed in the dialog header',
    },
    content: {
      control: 'text',
      description: 'The content/message displayed in the dialog body',
    },
    primaryAction: {
      control: 'text',
      description: 'Text for the primary action button',
    },
    secondaryAction: {
      control: 'text',
      description: 'Text for the secondary action button',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the dialog can be dismissed by clicking outside',
    },
    scrollable: {
      control: 'boolean',
      description: 'Whether the content area is scrollable',
    },
    fullscreen: {
      control: 'boolean',
      description: 'Whether to show in fullscreen mode',
    },
    open: {
      control: 'boolean',
      description: 'Whether the dialog is open',
    },
  },
};

export const Basic = {
  args: {
    title: 'Delete Campaign',
    content: 'Are you sure you want to delete this campaign? This action cannot be undone.',
    primaryAction: 'Delete',
    secondaryAction: 'Cancel',
    open: true,
  },
  render: (args) => createMaterialDialog(args),
};

export const Confirmation = {
  args: {
    title: 'Publish Campaign',
    content: 'Your campaign is ready to publish. Once published, it will be visible to your target audience immediately.',
    primaryAction: 'Publish',
    secondaryAction: 'Cancel',
    open: true,
  },
  render: (args) => createMaterialDialog(args),
};

export const Information = {
  args: {
    title: 'Campaign Statistics',
    content: 'Your campaign "Summer Sale 2024" has reached 10,000 impressions with a click-through rate of 3.2%. Performance is 15% above your target goals.',
    primaryAction: 'Close',
    open: true,
  },
  render: (args) => createMaterialDialog(args),
};

export const Scrollable = {
  args: {
    title: 'Terms and Conditions',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    primaryAction: 'Accept',
    secondaryAction: 'Decline',
    scrollable: true,
    open: true,
  },
  render: (args) => createMaterialDialog(args),
};

export const NonDismissible = {
  args: {
    title: 'Required Action',
    content: 'Please choose an option to continue. This dialog cannot be dismissed without making a selection.',
    primaryAction: 'Option A',
    secondaryAction: 'Option B',
    dismissible: false,
    open: true,
  },
  render: (args) => createMaterialDialog(args),
};

export const InteractiveDemo = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.textAlign = 'center';
    
    const title = document.createElement('h3');
    title.textContent = 'Interactive Dialog Demo';
    title.style.marginBottom = '24px';
    container.appendChild(title);
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '16px';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.flexWrap = 'wrap';
    
    const dialogs = [
      {
        label: 'Confirmation',
        config: {
          title: 'Delete Campaign',
          content: 'Are you sure you want to delete "Summer Sale 2024"? This action cannot be undone.',
          primaryAction: 'Delete',
          secondaryAction: 'Cancel',
          onPrimaryAction: () => console.log('Campaign deleted'),
          onSecondaryAction: () => console.log('Deletion cancelled'),
        },
      },
      {
        label: 'Success',
        config: {
          title: 'Campaign Created',
          content: 'Your campaign has been created successfully and is ready for review.',
          primaryAction: 'View Campaign',
          secondaryAction: 'Create Another',
          onPrimaryAction: () => console.log('Viewing campaign'),
          onSecondaryAction: () => console.log('Creating another'),
        },
      },
      {
        label: 'Error',
        config: {
          title: 'Upload Failed',
          content: 'Failed to upload campaign assets. Please check your internet connection and try again.',
          primaryAction: 'Retry',
          secondaryAction: 'Cancel',
          onPrimaryAction: () => console.log('Retrying upload'),
          onSecondaryAction: () => console.log('Upload cancelled'),
        },
      },
      {
        label: 'Form Dialog',
        config: {
          title: 'Campaign Settings',
          content: createFormContent(),
          primaryAction: 'Save',
          secondaryAction: 'Cancel',
          scrollable: true,
          onPrimaryAction: () => console.log('Settings saved'),
        },
      },
    ];
    
    dialogs.forEach(dialog => {
      const btn = document.createElement('button');
      btn.className = 'mdc-button mdc-button--raised';
      btn.style.margin = '4px';
      
      const ripple = document.createElement('div');
      ripple.className = 'mdc-button__ripple';
      btn.appendChild(ripple);
      
      const label = document.createElement('span');
      label.className = 'mdc-button__label';
      label.textContent = dialog.label;
      btn.appendChild(label);
      
      btn.addEventListener('click', () => showDialog(dialog.config));
      buttonContainer.appendChild(btn);
    });
    
    container.appendChild(buttonContainer);
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing different dialog types. Click buttons to show dialogs.',
      },
    },
  },
};

function createFormContent() {
  const form = document.createElement('div');
  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.style.gap = '16px';
  
  // Campaign name field
  const nameField = document.createElement('div');
  nameField.innerHTML = `
    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Campaign Name</label>
    <input type="text" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px;" placeholder="Enter campaign name">
  `;
  form.appendChild(nameField);
  
  // Budget field
  const budgetField = document.createElement('div');
  budgetField.innerHTML = `
    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Budget</label>
    <input type="number" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px;" placeholder="Enter budget amount">
  `;
  form.appendChild(budgetField);
  
  // Description field
  const descField = document.createElement('div');
  descField.innerHTML = `
    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Description</label>
    <textarea style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; min-height: 80px;" placeholder="Enter campaign description"></textarea>
  `;
  form.appendChild(descField);
  
  return form;
}

export const CampaignDialogs = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    
    const title = document.createElement('h3');
    title.textContent = 'Campaign Management Dialogs';
    title.style.marginBottom = '24px';
    container.appendChild(title);
    
    const scenarios = [
      {
        title: 'Campaign Actions',
        dialogs: [
          {
            label: 'Delete Campaign',
            config: {
              title: 'Delete Campaign',
              content: 'Are you sure you want to delete "Email Newsletter #47"? This will permanently remove all campaign data and analytics.',
              primaryAction: 'Delete',
              secondaryAction: 'Cancel',
            },
          },
          {
            label: 'Duplicate Campaign',
            config: {
              title: 'Duplicate Campaign',
              content: 'Create a copy of "Social Media Blast" with all settings and content? You can modify it before publishing.',
              primaryAction: 'Duplicate',
              secondaryAction: 'Cancel',
            },
          },
          {
            label: 'Pause Campaign',
            config: {
              title: 'Pause Campaign',
              content: 'Pausing "Summer Sale 2024" will stop all active ads and email sends. You can resume it at any time.',
              primaryAction: 'Pause',
              secondaryAction: 'Cancel',
            },
          },
        ],
      },
      {
        title: 'Status & Alerts',
        dialogs: [
          {
            label: 'Budget Warning',
            config: {
              title: 'Budget Alert',
              content: 'Campaign "Q4 Promotion" has spent 90% of its allocated budget. Would you like to increase the budget or pause the campaign?',
              primaryAction: 'Increase Budget',
              secondaryAction: 'Pause Campaign',
            },
          },
          {
            label: 'Performance Report',
            config: {
              title: 'Campaign Performance',
              content: 'Great news! Your campaign "Product Launch" is performing 25% above target with 15,000 clicks and 450 conversions in the last 7 days.',
              primaryAction: 'View Details',
              secondaryAction: 'Close',
            },
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
      
      scenario.dialogs.forEach(dialogConfig => {
        const btn = document.createElement('button');
        btn.className = 'mdc-button mdc-button--outlined';
        
        const ripple = document.createElement('div');
        ripple.className = 'mdc-button__ripple';
        btn.appendChild(ripple);
        
        const label = document.createElement('span');
        label.className = 'mdc-button__label';
        label.textContent = dialogConfig.label;
        btn.appendChild(label);
        
        btn.addEventListener('click', () => showDialog(dialogConfig.config));
        buttonGroup.appendChild(btn);
      });
      
      container.appendChild(buttonGroup);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world campaign management dialog examples for various user actions and system alerts.',
      },
    },
  },
};