import {Element as PolymerElement} from '@polymer/polymer/polymer-element';
import view from './view1.template.html';
import style from './view1.style.scss';
import sharedStyles from '../shared-styles.scss';

export class MyView1 extends PolymerElement {
  $: any;

  static get is() {
    return 'my-view1';
  }

  static get template() {
    return `<style>${sharedStyles} ${style}</style>${view}`;
  }
}

window.customElements.define(MyView1.is, MyView1);