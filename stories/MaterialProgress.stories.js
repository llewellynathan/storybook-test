import { createMaterialLinearProgress, createMaterialCircularProgress } from './MaterialProgress.js';

export default {
  title: 'Material Design/Progress Indicators',
  parameters: {
    docs: {
      description: {
        component: 'Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.',
      },
    },
  },
};

export const LinearProgress = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '24px';
    container.style.maxWidth = '400px';
    
    // Title
    const title = document.createElement('h3');
    title.textContent = 'Linear Progress Indicators';
    title.style.margin = '0 0 16px 0';
    title.style.color = '#1976d2';
    container.appendChild(title);
    
    // Determinate progress
    const label1 = document.createElement('p');
    label1.textContent = 'Campaign Upload Progress (65%)';
    label1.style.margin = '0 0 8px 0';
    label1.style.fontSize = '14px';
    container.appendChild(label1);
    container.appendChild(createMaterialLinearProgress({ progress: 0.65, variant: 'determinate' }));
    
    const label2 = document.createElement('p');
    label2.textContent = 'Image Processing (30%)';
    label2.style.margin = '16px 0 8px 0';
    label2.style.fontSize = '14px';
    container.appendChild(label2);
    container.appendChild(createMaterialLinearProgress({ progress: 0.3, variant: 'determinate' }));
    
    // Indeterminate progress
    const label3 = document.createElement('p');
    label3.textContent = 'Loading...';
    label3.style.margin = '16px 0 8px 0';
    label3.style.fontSize = '14px';
    container.appendChild(label3);
    container.appendChild(createMaterialLinearProgress({ variant: 'indeterminate' }));
    
    // Buffer progress
    const label4 = document.createElement('p');
    label4.textContent = 'Video Buffering (40% played, 70% buffered)';
    label4.style.margin = '16px 0 8px 0';
    label4.style.fontSize = '14px';
    container.appendChild(label4);
    container.appendChild(createMaterialLinearProgress({ progress: 0.4, buffer: 0.7, variant: 'buffer' }));
    
    return container;
  },
};

export const CircularProgress = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '24px';
    container.style.alignItems = 'flex-start';
    
    // Title
    const title = document.createElement('h3');
    title.textContent = 'Circular Progress Indicators';
    title.style.margin = '0 0 16px 0';
    title.style.color = '#1976d2';
    container.appendChild(title);
    
    // Different sizes
    const sizesContainer = document.createElement('div');
    sizesContainer.style.display = 'flex';
    sizesContainer.style.alignItems = 'center';
    sizesContainer.style.gap = '16px';
    
    const sizeLabel = document.createElement('p');
    sizeLabel.textContent = 'Different sizes:';
    sizeLabel.style.margin = '0';
    sizeLabel.style.fontSize = '14px';
    sizeLabel.style.minWidth = '120px';
    sizesContainer.appendChild(sizeLabel);
    
    sizesContainer.appendChild(createMaterialCircularProgress({ size: 'small', progress: 0.75, variant: 'determinate' }));
    sizesContainer.appendChild(createMaterialCircularProgress({ size: 'medium', progress: 0.75, variant: 'determinate' }));
    sizesContainer.appendChild(createMaterialCircularProgress({ size: 'large', progress: 0.75, variant: 'determinate' }));
    container.appendChild(sizesContainer);
    
    // Indeterminate
    const indeterminateContainer = document.createElement('div');
    indeterminateContainer.style.display = 'flex';
    indeterminateContainer.style.alignItems = 'center';
    indeterminateContainer.style.gap = '16px';
    
    const indeterminateLabel = document.createElement('p');
    indeterminateLabel.textContent = 'Loading:';
    indeterminateLabel.style.margin = '0';
    indeterminateLabel.style.fontSize = '14px';
    indeterminateLabel.style.minWidth = '120px';
    indeterminateContainer.appendChild(indeterminateLabel);
    
    indeterminateContainer.appendChild(createMaterialCircularProgress({ variant: 'indeterminate' }));
    container.appendChild(indeterminateContainer);
    
    // Different progress values
    const progressContainer = document.createElement('div');
    progressContainer.style.display = 'flex';
    progressContainer.style.alignItems = 'center';
    progressContainer.style.gap = '16px';
    
    const progressLabel = document.createElement('p');
    progressLabel.textContent = 'Progress values:';
    progressLabel.style.margin = '0';
    progressLabel.style.fontSize = '14px';
    progressLabel.style.minWidth = '120px';
    progressContainer.appendChild(progressLabel);
    
    progressContainer.appendChild(createMaterialCircularProgress({ progress: 0.25, variant: 'determinate' }));
    progressContainer.appendChild(createMaterialCircularProgress({ progress: 0.5, variant: 'determinate' }));
    progressContainer.appendChild(createMaterialCircularProgress({ progress: 0.75, variant: 'determinate' }));
    progressContainer.appendChild(createMaterialCircularProgress({ progress: 1, variant: 'determinate' }));
    container.appendChild(progressContainer);
    
    return container;
  },
};

export const Interactive = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '24px';
    container.style.maxWidth = '400px';
    
    // Title
    const title = document.createElement('h3');
    title.textContent = 'Interactive Progress Demo';
    title.style.margin = '0 0 16px 0';
    title.style.color = '#1976d2';
    container.appendChild(title);
    
    // Controls
    const controlsContainer = document.createElement('div');
    controlsContainer.style.display = 'flex';
    controlsContainer.style.gap = '12px';
    controlsContainer.style.marginBottom = '16px';
    
    const startButton = document.createElement('button');
    startButton.textContent = 'Start Upload';
    startButton.style.padding = '8px 16px';
    startButton.style.border = '1px solid #1976d2';
    startButton.style.backgroundColor = '#1976d2';
    startButton.style.color = 'white';
    startButton.style.borderRadius = '4px';
    startButton.style.cursor = 'pointer';
    
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.style.padding = '8px 16px';
    resetButton.style.border = '1px solid #666';
    resetButton.style.backgroundColor = 'white';
    resetButton.style.color = '#666';
    resetButton.style.borderRadius = '4px';
    resetButton.style.cursor = 'pointer';
    
    controlsContainer.appendChild(startButton);
    controlsContainer.appendChild(resetButton);
    container.appendChild(controlsContainer);
    
    // Progress indicators
    const progressLabel = document.createElement('p');
    progressLabel.textContent = 'Upload Progress: 0%';
    progressLabel.style.margin = '0 0 8px 0';
    progressLabel.style.fontSize = '14px';
    container.appendChild(progressLabel);
    
    const linearProgress = createMaterialLinearProgress({ progress: 0, variant: 'determinate' });
    container.appendChild(linearProgress);
    
    const circularContainer = document.createElement('div');
    circularContainer.style.display = 'flex';
    circularContainer.style.alignItems = 'center';
    circularContainer.style.gap = '16px';
    circularContainer.style.marginTop = '16px';
    
    const circularLabel = document.createElement('p');
    circularLabel.textContent = 'Processing:';
    circularLabel.style.margin = '0';
    circularLabel.style.fontSize = '14px';
    circularContainer.appendChild(circularLabel);
    
    const circularProgress = createMaterialCircularProgress({ progress: 0, variant: 'determinate' });
    circularContainer.appendChild(circularProgress);
    container.appendChild(circularContainer);
    
    // Animation logic
    let animationId;
    let currentProgress = 0;
    
    const animate = () => {
      if (currentProgress < 1) {
        currentProgress += 0.02;
        const percentage = Math.round(currentProgress * 100);
        
        progressLabel.textContent = `Upload Progress: ${percentage}%`;
        linearProgress.setProgress(currentProgress);
        circularProgress.setProgress(currentProgress);
        
        animationId = requestAnimationFrame(animate);
      }
    };
    
    startButton.addEventListener('click', () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      animate();
    });
    
    resetButton.addEventListener('click', () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      currentProgress = 0;
      progressLabel.textContent = 'Upload Progress: 0%';
      linearProgress.setProgress(0);
      circularProgress.setProgress(0);
    });
    
    return container;
  },
};