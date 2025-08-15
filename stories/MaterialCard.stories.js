import { createMaterialCard } from './MaterialCard.js';

export default {
  title: 'Material Design/Card',
  parameters: {
    docs: {
      description: {
        component: 'Material Design cards for displaying content and actions. Cards can include media, text content, and action buttons.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the card',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle text',
    },
    content: {
      control: 'text',
      description: 'The main content text of the card',
    },
    hasMedia: {
      control: 'boolean',
      description: 'Whether to show a media section',
    },
    mediaUrl: {
      control: 'text',
      description: 'URL for the media background image',
    },
    outlined: {
      control: 'boolean',
      description: 'Whether to use outlined variant',
    },
    onClick: { 
      action: 'card-clicked',
      description: 'Function called when card is clicked',
    },
  },
};

export const Basic = {
  args: {
    title: 'Welcome to Cinch',
    content: 'Streamline your campaigns and boost your marketing efficiency with our powerful platform.',
  },
  render: (args) => createMaterialCard(args),
};

export const WithSubtitle = {
  args: {
    title: 'Campaign Management',
    subtitle: 'Feature Overview',
    content: 'Create, manage, and optimize your marketing campaigns with ease.',
  },
  render: (args) => createMaterialCard(args),
};

export const WithMedia = {
  args: {
    title: 'Summer Sale 2024',
    subtitle: 'Active Campaign',
    content: 'Our biggest sale of the year is now live. Track performance and optimize for better results.',
    hasMedia: true,
  },
  render: (args) => createMaterialCard(args),
};

export const WithActions = {
  args: {
    title: 'Product Launch',
    content: 'Ready to launch your new product campaign?',
    actions: [
      { label: 'Get Started', onClick: () => console.log('Get Started clicked') },
      { label: 'Learn More', onClick: () => console.log('Learn More clicked') },
    ],
  },
  render: (args) => createMaterialCard(args),
};

export const Outlined = {
  args: {
    title: 'Outlined Card',
    content: 'This card uses the outlined variant with a border instead of elevation.',
    outlined: true,
  },
  render: (args) => createMaterialCard(args),
};

export const Clickable = {
  args: {
    title: 'Analytics Dashboard',
    subtitle: 'Click to view details',
    content: 'Track performance and gain insights with comprehensive analytics.',
    onClick: () => console.log('Card clicked!'),
  },
  render: (args) => createMaterialCard(args),
};

export const FeatureCards = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    container.style.gap = '24px';
    container.style.padding = '20px';
    container.style.maxWidth = '1200px';
    
    const features = [
      {
        title: 'Campaign Management',
        content: 'Create, manage, and optimize your marketing campaigns with ease.',
        hasMedia: true,
        actions: [{ label: 'Learn More' }],
      },
      {
        title: 'Analytics',
        content: 'Track performance and gain insights with comprehensive analytics.',
        hasMedia: true,
        actions: [{ label: 'View Dashboard' }],
      },
      {
        title: 'Team Collaboration',
        content: 'Work together seamlessly with your team on all projects.',
        hasMedia: true,
        actions: [{ label: 'Get Started' }],
      },
    ];
    
    features.forEach(feature => {
      container.appendChild(createMaterialCard(feature));
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'A grid of feature cards similar to those used in the main application.',
      },
    },
  },
};