import { createRecommendationTile, createRecommendationTileGrid } from './RecommendationTile.js';
import { createIconControl } from '../.storybook/iconControl.js';

export default {
  title: 'Custom Components/Recommendation Tile',
  parameters: {
    docs: {
      description: {
        component: 'A custom recommendation tile component for displaying campaign suggestions and goals. Based on the Figma design with icon, title, and description.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the recommendation',
    },
    description: {
      control: 'text',
      description: 'Description text explaining the recommendation',
    },
    icon: {
      control: 'select',
      options: [
        'waving_hand', 'campaign', 'email', 'send', 'analytics', 'trending_up', 'person_add', 
        'favorite', 'star', 'home', 'search', 'settings', 'notifications', 'cake', 'shopping_cart',
        'refresh', 'schedule', 'thumb_up', 'share', 'edit', 'delete', 'add', 'check_circle',
        'info', 'warning', 'error', 'help', 'account_circle', 'business', 'work', 'group'
      ],
      description: 'Material icon name - select from common options or type any Material icon name'
    },
    iconType: {
      control: 'select',
      options: ['material-icons', 'material-symbols-outlined', 'material-symbols-rounded'],
      description: 'Type of Material icon to use',
    },
    iconColor: {
      control: 'color',
      description: 'Background color of the icon container',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the tile',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the tile is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tile is disabled',
    },
  },
};

export const Default = {
  args: {
    title: 'New customers',
    description: 'Sends an email to customers after their first transaction welcoming them to the business.',
    icon: 'waving_hand',
  },
  render: (args) => createRecommendationTile(args),
};


export const DifferentIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    container.style.padding = '20px';
    container.style.maxWidth = '500px';
    
    const tiles = [
      {
        title: 'Welcome series',
        description: 'Automated email sequence to onboard new customers with your brand story.',
        icon: 'waving_hand',
        iconType: 'material-icons',
        iconColor: '#085282',
      },
      {
        title: 'Birthday rewards',
        description: 'Send personalized birthday offers to increase customer loyalty and engagement.',
        icon: 'cake',
        iconType: 'material-symbols-outlined',
        iconColor: '#7B1FA2',
      },
      {
        title: 'Cart abandonment',
        description: 'Recover lost sales by reminding customers about items left in their cart.',
        icon: 'shopping_cart',
        iconType: 'material-symbols-rounded',
        iconColor: '#F57C00',
      },
      {
        title: 'Win-back campaign',
        description: 'Re-engage inactive customers with special offers and product updates.',
        icon: 'refresh',
        iconType: 'material-symbols-outlined',
        iconColor: '#388E3C',
      },
    ];
    
    tiles.forEach(tileConfig => {
      const tile = createRecommendationTile({
        ...tileConfig,
        onClick: () => console.log(`Clicked: ${tileConfig.title}`),
      });
      container.appendChild(tile);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Various recommendation tiles demonstrating different Material icon types: classic Material Icons, outlined symbols, and rounded symbols.',
      },
    },
  },
};


export const TileGrid = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Recommended Campaign Templates';
    title.style.marginBottom = '24px';
    title.style.color = '#085282';
    title.style.textAlign = 'center';
    container.appendChild(title);
    
    const tiles = [
      {
        title: 'Welcome series',
        description: 'Automated email sequence to onboard new customers effectively.',
        icon: 'waving_hand',
        iconColor: '#085282',
      },
      {
        title: 'Product showcase',
        description: 'Highlight your best products with beautiful visual campaigns.',
        icon: 'star',
        iconColor: '#F57C00',
      },
      {
        title: 'Seasonal promotions',
        description: 'Create timely offers that align with holidays and seasons.',
        icon: 'calendar_today',
        iconColor: '#7B1FA2',
      },
      {
        title: 'Customer feedback',
        description: 'Collect reviews and testimonials to build social proof.',
        icon: 'rate_review',
        iconColor: '#388E3C',
      },
      {
        title: 'Re-engagement',
        description: 'Win back inactive customers with compelling offers.',
        icon: 'refresh',
        iconColor: '#E91E63',
      },
      {
        title: 'Referral program',
        description: 'Leverage word-of-mouth marketing through customer referrals.',
        icon: 'people',
        iconColor: '#2196F3',
      },
    ];
    
    const grid = createRecommendationTileGrid({
      tiles: tiles,
      columns: 2,
      gap: '16px',
      onTileClick: (tile, index) => {
        console.log(`Selected tile: ${tile.title} (index: ${index})`);
      },
    });
    
    container.appendChild(grid);
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'A responsive grid layout of recommendation tiles for campaign templates.',
      },
    },
  },
};

