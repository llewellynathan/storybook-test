import { createMaterialChip, createMaterialChipSet } from './MaterialChips.js';

export default {
  title: 'Material Design/Chips',
  parameters: {
    docs: {
      description: {
        component: 'Chips are compact elements that represent an input, attribute, or action. They allow users to enter information, make selections, filter content, or trigger actions.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The text displayed on the chip',
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
      description: 'The visual variant of the chip',
    },
    leadingIcon: {
      control: 'text',
      description: 'Material icon name for leading icon',
    },
    trailingIcon: {
      control: 'text',
      description: 'Material icon name for trailing icon',
    },
    removable: {
      control: 'boolean',
      description: 'Whether the chip can be removed',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the chip is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the chip is disabled',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the chip is clickable',
    },
  },
};

export const Basic = {
  args: {
    label: 'Marketing',
    variant: 'filled',
  },
  render: (args) => createMaterialChip(args),
};

export const WithLeadingIcon = {
  args: {
    label: 'Email Campaign',
    leadingIcon: 'email',
    variant: 'filled',
  },
  render: (args) => createMaterialChip(args),
};

export const WithTrailingIcon = {
  args: {
    label: 'Analytics',
    trailingIcon: 'arrow_forward',
    variant: 'filled',
  },
  render: (args) => createMaterialChip(args),
};

export const Removable = {
  args: {
    label: 'Removable Tag',
    removable: true,
    variant: 'filled',
  },
  render: (args) => createMaterialChip(args),
};

export const Selected = {
  args: {
    label: 'Selected',
    selected: true,
    variant: 'filled',
  },
  render: (args) => createMaterialChip(args),
};

export const Outlined = {
  args: {
    label: 'Outlined Chip',
    variant: 'outlined',
  },
  render: (args) => createMaterialChip(args),
};

export const Disabled = {
  args: {
    label: 'Disabled',
    disabled: true,
    variant: 'filled',
  },
  render: (args) => createMaterialChip(args),
};

export const ChoiceChipSet = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Campaign Type (Choice Chips)';
    title.style.marginBottom = '16px';
    container.appendChild(title);
    
    const chipSet = createMaterialChipSet({
      variant: 'choice',
      chips: [
        { label: 'Email', leadingIcon: 'email' },
        { label: 'Social Media', leadingIcon: 'share', selected: true },
        { label: 'Display Ads', leadingIcon: 'image' },
        { label: 'Video', leadingIcon: 'play_circle' },
      ],
      onSelectionChange: (selected) => console.log('Selected chips:', selected),
    });
    
    container.appendChild(chipSet);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Choice chips allow selection of a single option from a set of options.',
      },
    },
  },
};

export const FilterChipSet = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Campaign Filters (Filter Chips)';
    title.style.marginBottom = '16px';
    container.appendChild(title);
    
    const chipSet = createMaterialChipSet({
      variant: 'filter',
      multiSelect: true,
      chips: [
        { label: 'Active', selected: true },
        { label: 'Paused' },
        { label: 'Completed' },
        { label: 'High Priority', leadingIcon: 'priority_high' },
        { label: 'Low Budget', leadingIcon: 'money_off' },
      ],
      onSelectionChange: (selected) => console.log('Active filters:', selected),
    });
    
    container.appendChild(chipSet);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Filter chips allow multiple selections to filter content.',
      },
    },
  },
};

export const InputChipSet = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Tags (Input Chips)';
    title.style.marginBottom = '16px';
    container.appendChild(title);
    
    const chipSet = createMaterialChipSet({
      variant: 'input',
      chips: [
        { label: 'Marketing', removable: true },
        { label: 'Summer Sale', removable: true },
        { label: 'Email Campaign', removable: true, leadingIcon: 'email' },
        { label: 'High Priority', removable: true, leadingIcon: 'star' },
      ],
    });
    
    container.appendChild(chipSet);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Input chips represent information entered by the user and can be removed.',
      },
    },
  },
};

export const CampaignTags = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '600px';
    
    const sections = [
      {
        title: 'Campaign Categories',
        chips: [
          { label: 'Email Marketing', leadingIcon: 'email', selected: true },
          { label: 'Social Media', leadingIcon: 'share' },
          { label: 'Content Marketing', leadingIcon: 'article' },
          { label: 'Paid Advertising', leadingIcon: 'campaign' },
        ]
      },
      {
        title: 'Target Audience',
        chips: [
          { label: 'Young Adults', removable: true },
          { label: 'Professionals', removable: true },
          { label: 'Tech Enthusiasts', removable: true },
          { label: 'Small Business', removable: true },
        ]
      },
      {
        title: 'Campaign Status',
        chips: [
          { label: 'Active', leadingIcon: 'play_circle', selected: true },
          { label: 'Paused', leadingIcon: 'pause_circle' },
          { label: 'Completed', leadingIcon: 'check_circle' },
          { label: 'Draft', leadingIcon: 'edit' },
        ]
      }
    ];
    
    sections.forEach(section => {
      const sectionTitle = document.createElement('h4');
      sectionTitle.textContent = section.title;
      sectionTitle.style.margin = '24px 0 12px 0';
      sectionTitle.style.color = '#6200ea';
      container.appendChild(sectionTitle);
      
      const chipSet = createMaterialChipSet({
        variant: 'filter',
        multiSelect: true,
        chips: section.chips,
      });
      chipSet.style.marginBottom = '16px';
      
      container.appendChild(chipSet);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example showing different chip sets for campaign management.',
      },
    },
  },
};