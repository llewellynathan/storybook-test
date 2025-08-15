import { createMaterialSwitch, createMaterialCheckbox } from './MaterialSwitch.js';

export default {
  title: 'Material Design/Switch & Checkbox',
  parameters: {
    docs: {
      description: {
        component: 'Switches and checkboxes allow users to select options. Switches are used for binary choices, while checkboxes allow multiple selections.',
      },
    },
  },
};

export const Switch = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    
    const switches = [
      { label: 'Enable notifications', checked: true },
      { label: 'Auto-save drafts', checked: false },
      { label: 'Email alerts', checked: true },
      { label: 'Disabled option', checked: false, disabled: true },
    ];
    
    switches.forEach(config => {
      container.appendChild(createMaterialSwitch({
        ...config,
        onChange: (checked) => console.log(`${config.label}: ${checked}`),
      }));
    });
    
    return container;
  },
};

export const Checkbox = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    
    const checkboxes = [
      { label: 'Email campaigns', checked: true },
      { label: 'Social media posts', checked: false },
      { label: 'Display advertisements', checked: true },
      { label: 'Video content', checked: false },
      { label: 'Unavailable option', checked: false, disabled: true },
    ];
    
    checkboxes.forEach(config => {
      container.appendChild(createMaterialCheckbox({
        ...config,
        onChange: (checked) => console.log(`${config.label}: ${checked}`),
      }));
    });
    
    return container;
  },
};

export const CampaignSettings = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    const sections = [
      {
        title: 'Campaign Options',
        type: 'switch',
        items: [
          { label: 'Auto-publish campaign', checked: false },
          { label: 'Send email notifications', checked: true },
          { label: 'Enable A/B testing', checked: false },
          { label: 'Track conversions', checked: true },
        ],
      },
      {
        title: 'Channel Selection',
        type: 'checkbox',
        items: [
          { label: 'Email marketing', checked: true },
          { label: 'Social media', checked: true },
          { label: 'Google Ads', checked: false },
          { label: 'Display network', checked: false },
          { label: 'Video advertising', checked: false },
        ],
      },
    ];
    
    sections.forEach(section => {
      const sectionTitle = document.createElement('h4');
      sectionTitle.textContent = section.title;
      sectionTitle.style.margin = '24px 0 16px 0';
      sectionTitle.style.color = '#6200ea';
      container.appendChild(sectionTitle);
      
      const itemsContainer = document.createElement('div');
      itemsContainer.style.display = 'flex';
      itemsContainer.style.flexDirection = 'column';
      itemsContainer.style.gap = '12px';
      
      section.items.forEach(config => {
        const createFunction = section.type === 'switch' ? createMaterialSwitch : createMaterialCheckbox;
        itemsContainer.appendChild(createFunction({
          ...config,
          onChange: (checked) => console.log(`${section.title} - ${config.label}: ${checked}`),
        }));
      });
      
      container.appendChild(itemsContainer);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example showing switches and checkboxes in campaign settings.',
      },
    },
  },
};