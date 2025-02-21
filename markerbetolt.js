class BusLoader {
    constructor(options = {}) {
      this.options = {
        minDisplayTime: 2000,
        fadeOutDuration: 500,
        timeout: 180000, // 3 perc
        loadingText: 'Megállók betöltése folyamatban...',
        batchSize: 1000, // Egyszerre betöltendő markerek száma
        ...options
      };
      this.isLoading = false;
      this.startTime = null;
      this.loaderElement = null;
      this.timeoutId = null;
      this.totalMarkers = 35394;
      this.loadedMarkers = 0;
    }
  
    createLoaderElement() {
      const container = document.createElement('div');
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 9999;
        backdrop-filter: blur(5px);
        opacity: 1;
        transition: opacity ${this.options.fadeOutDuration}ms ease-out;
      `;
  
      const busIcon = document.createElement('i');
      busIcon.className = 'fa-solid fa-bus';
      busIcon.style.cssText = `
        font-size: 50px;
        color: #000000;
        animation: moveBus 2s ease-in-out infinite;
      `;
  
      const loadingText = document.createElement('p');
      loadingText.style.cssText = `
        margin-top: 20px;
        font-size: 1.25rem;
        font-weight: 600;
        color: #4b5563;
      `;
  
      const progressContainer = document.createElement('div');
      progressContainer.style.cssText = `
        width: 200px;
        height: 4px;
        background-color: #e5e7eb;
        border-radius: 2px;
        margin-top: 15px;
        overflow: hidden;
      `;
  
      const progressBar = document.createElement('div');
      progressBar.style.cssText = `
        width: 0%;
        height: 100%;
        background-color: #000000;
        border-radius: 2px;
        transition: width 0.3s ease-in-out;
      `;
  
      const styleSheet = document.createElement('style');
      styleSheet.textContent = `
        @keyframes moveBus {
          0% { transform: translateX(-50px); }
          50% { transform: translateX(50px); }
          100% { transform: translateX(-50px); }
        }
      `;
  
      progressContainer.appendChild(progressBar);
      container.appendChild(busIcon);
      container.appendChild(loadingText);
      container.appendChild(progressContainer);
      document.head.appendChild(styleSheet);
  
      this.loaderElement = {
        container,
        loadingText,
        progressBar
      };
  
      return container;
    }
  
    show() {
      if (this.isLoading) return;
      this.isLoading = true;
      this.startTime = Date.now();
      const loader = this.createLoaderElement();
      this.loaderElement.loadingText.textContent = this.options.loadingText;
      document.body.appendChild(loader);
      this.timeoutId = setTimeout(() => {
        this.hide(true);
      }, this.options.timeout);
      this.updateProgress(0);
    }
  
    updateProgress(loaded) {
      this.loadedMarkers = loaded;
      if (this.loaderElement && this.loaderElement.progressBar) {
        const progress = (loaded / this.totalMarkers) * 100;
        this.loaderElement.progressBar.style.width = `${progress}%`;
        this.loaderElement.loadingText.textContent = `${this.options.loadingText} (${loaded}/${this.totalMarkers})`;
      }
      if (loaded >= this.totalMarkers) {
        this.checkComplete();
      }
    }
  
    checkComplete() {
      if (!this.isLoading) return;
      const now = Date.now();
      const elapsedTime = now - this.startTime;
      if (elapsedTime >= this.options.minDisplayTime && this.loadedMarkers >= this.totalMarkers) {
        this.hide();
      } else {
        requestAnimationFrame(() => this.checkComplete());
      }
    }
  
    hide(force = false) {
      if (!this.isLoading || !this.loaderElement) return;
  
      clearTimeout(this.timeoutId);
  
      if (force) {
        console.warn('Betöltő kényszerített bezárása timeout miatt');
      }
  
      this.loaderElement.container.style.opacity = '0';
  
      setTimeout(() => {
        if (this.loaderElement.container.parentNode) {
          document.body.removeChild(this.loaderElement.container);
        }
        this.isLoading = false;
        this.loaderElement = null;
      }, this.options.fadeOutDuration);
    }
  }
  
  // Használati példa
  document.addEventListener('DOMContentLoaded', () => {
    const loader = new BusLoader();
    loader.show();
  
    // Példa a markerek betöltésének szimulálására
    let loadedMarkers = 0;
    const totalMarkers = 35394;
    const batchSize = 300;
  
    function simulateMarkerLoading() {
      loadedMarkers += batchSize;
      if (loadedMarkers > totalMarkers) loadedMarkers = totalMarkers;
      
      loader.updateProgress(loadedMarkers);
  
      if (loadedMarkers < totalMarkers) {
        setTimeout(simulateMarkerLoading, 50);
      }
    }
  
    simulateMarkerLoading();
  });