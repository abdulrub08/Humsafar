import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderServiceService {
  private renderer: Renderer2;
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  loadScripts(scripts: string[]): Promise<void[]> {
    const promises = scripts.map(script => this.loadScript(script));
    return Promise.all(promises);
  }
  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = this.renderer.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.async = true;

      script.onload = () => resolve();
      script.onerror = () => reject(`Failed to load script: ${src}`);

      this.renderer.appendChild(document.body, script);
    });
  }
}
