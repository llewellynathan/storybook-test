import { createSelectableCard, createSelectableCardGroup } from './SelectableCard.js';

export default {
  title: 'Components/SelectableCard',
  argTypes: {
    icon: {
      control: 'text',
      description: 'Material icon name',
      defaultValue: 'check_circle'
    },
    label: {
      control: 'text',
      description: 'Card label text',
      defaultValue: 'Option Label'
    },
    selected: {
      control: 'boolean',
      description: 'Whether the card is selected',
      defaultValue: false
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card is disabled',
      defaultValue: false
    },
    onClick: {
      action: 'clicked',
      description: 'Called when card is clicked'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A selectable card component for choosing options, matching the Figma design with Material Design principles.'
      }
    }
  }
};

// Single card template
const Template = (args) => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.width = '400px';
  
  const card = createSelectableCard({
    ...args,
    onClick: (isSelected, id) => {
      args.onClick(isSelected, id);
      // Update the card's visual state
      const cardElement = container.querySelector('.selectable-card');
      cardElement.setAttribute('aria-checked', isSelected);
      cardElement.style.border = isSelected ? '2px solid #0994F2' : '1px solid #374148';
    }
  });
  
  container.appendChild(card);
  return container;
};

export const Default = Template.bind({});
Default.args = {
  icon: 'rate_review',
  label: 'Track and respond to online reviews',
  selected: false,
  disabled: false
};

export const Selected = Template.bind({});
Selected.args = {
  icon: 'email',
  label: 'Send automated email campaigns',
  selected: true,
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: 'sms',
  label: 'Send automated SMS campaigns',
  selected: false,
  disabled: true
};

// Group template for multiple cards
const GroupTemplate = (args) => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '800px';
  
  const options = [
    { icon: 'rate_review', label: 'Track and respond to online reviews', id: 'reviews' },
    { icon: 'email', label: 'Send automated email campaigns', id: 'email' },
    { icon: 'sms', label: 'Send automated SMS campaigns', id: 'sms' },
    { icon: 'markunread_mailbox', label: 'Send automated direct mail', id: 'mail' },
    { icon: 'rule', label: 'Request feedback via Surveys', id: 'surveys' },
    { icon: 'web', label: 'Build and test landing pages', id: 'landing' },
    { icon: 'local_play', label: 'Create trackable coupons', id: 'coupons' },
    { icon: 'help_outline', label: 'Other', id: 'other' }
  ];
  
  const group = createSelectableCardGroup({
    options,
    multiSelect: args.multiSelect,
    columns: args.columns || 2,
    onChange: (selectedIds, changedId, isSelected) => {
      args.onChange(selectedIds, changedId, isSelected);
      console.log('Selected IDs:', selectedIds);
    }
  });
  
  container.appendChild(group);
  return container;
};

export const CardGroup = GroupTemplate.bind({});
CardGroup.args = {
  multiSelect: true,
  columns: 2,
  onChange: () => {}
};
CardGroup.parameters = {
  docs: {
    description: {
      story: 'A group of selectable cards with multi-selection enabled, similar to the onboarding screen.'
    }
  }
};

export const SingleSelectGroup = GroupTemplate.bind({});
SingleSelectGroup.args = {
  multiSelect: false,
  columns: 2,
  onChange: () => {}
};
SingleSelectGroup.parameters = {
  docs: {
    description: {
      story: 'A group of selectable cards with single selection (radio button behavior).'
    }
  }
};

// Onboarding-style layout
const OnboardingTemplate = () => {
  const container = document.createElement('div');
  container.style.cssText = `
    padding: 32px;
    background: white;
    border-radius: 16px;
    max-width: 928px;
    margin: 0 auto;
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 
                0px 16px 24px 2px rgba(0, 0, 0, 0.14), 
                0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  `;
  
  // Header
  const header = document.createElement('div');
  header.style.cssText = `
    text-align: center;
    margin-bottom: 32px;
  `;
  
  const title = document.createElement('h2');
  title.textContent = 'How can Cinch help you?';
  title.style.cssText = `
    font-size: 28px;
    font-weight: 800;
    margin: 0 0 4px 0;
    color: #010C14;
    font-family: 'Roboto', sans-serif;
  `;
  
  const subtitle = document.createElement('p');
  subtitle.textContent = 'Choose as many options as you'd like';
  subtitle.style.cssText = `
    font-size: 16px;
    color: rgba(1, 12, 20, 0.7);
    margin: 0;
    font-family: 'Roboto', sans-serif;
  `;
  
  header.appendChild(title);
  header.appendChild(subtitle);
  container.appendChild(header);
  
  // Options
  const options = [
    { icon: 'rate_review', label: 'Track and respond to online reviews', id: 'reviews' },
    { icon: 'email', label: 'Send automated email campaigns', id: 'email', selected: true },
    { icon: 'sms', label: 'Send automated SMS campaigns', id: 'sms' },
    { icon: 'markunread_mailbox', label: 'Send automated direct mail', id: 'mail' },
    { icon: 'rule', label: 'Request feedback via Surveys', id: 'surveys', selected: true },
    { icon: 'web', label: 'Build and test landing pages', id: 'landing' },
    { icon: 'local_play', label: 'Create trackable coupons', id: 'coupons' },
    { icon: 'help_outline', label: 'Other', id: 'other' }
  ];
  
  const selectedCount = document.createElement('p');
  selectedCount.style.cssText = `
    text-align: center;
    margin: 16px 0;
    color: #596873;
    font-size: 14px;
  `;
  selectedCount.textContent = '2 options selected';
  
  const group = createSelectableCardGroup({
    options,
    multiSelect: true,
    columns: 2,
    onChange: (selectedIds) => {
      selectedCount.textContent = `${selectedIds.length} option${selectedIds.length !== 1 ? 's' : ''} selected`;
    }
  });
  
  container.appendChild(group);
  container.appendChild(selectedCount);
  
  return container;
};

export const OnboardingStyle = OnboardingTemplate.bind({});
OnboardingStyle.parameters = {
  docs: {
    description: {
      story: 'A complete example styled like the onboarding feature selection screen.'
    }
  }
};