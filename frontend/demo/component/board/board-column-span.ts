import 'Frontend/demo/init'; // hidden-source-line
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@vaadin/board';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('board-column-span')
export class Example extends LitElement {
  constructor() {
    super();
    this.classList.add('board-column-span');
  }

  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <!-- tag::snippet[] -->
      <vaadin-board>
        <vaadin-board-row>
          <div class="cell" board-cols="2">Span 2</div>
          <div class="cell">Span 1</div>
          <div class="cell">Span 1</div>
        </vaadin-board-row>
        <vaadin-board-row>
          <div class="cell">Span 1</div>
          <div class="cell" board-cols="2">Span 2</div>
          <div class="cell">Span 1</div>
        </vaadin-board-row>
        <vaadin-board-row>
          <div class="cell">Span 1</div>
          <div class="cell">Span 1</div>
          <div class="cell" board-cols="2">Span 2</div>
        </vaadin-board-row>
      </vaadin-board>
      <vaadin-board>
        <vaadin-board-row>
          <div class="cell" board-cols="3">Span 3</div>
          <div class="cell">Span 1</div>
        </vaadin-board-row>
        <vaadin-board-row>
          <div class="cell">Span 1</div>
          <div class="cell" board-cols="3">Span 3</div>
        </vaadin-board-row>
      </vaadin-board>
      <vaadin-board>
        <vaadin-board-row>
          <div class="cell" board-cols="2">Span 2</div>
          <div class="cell">Span 1</div>
        </vaadin-board-row>
        <vaadin-board-row>
          <div class="cell">Span 1</div>
          <div class="cell" board-cols="2">Span 2</div>
        </vaadin-board-row>
      </vaadin-board>
      <!-- end::snippet[] -->
    `;
  }
}
