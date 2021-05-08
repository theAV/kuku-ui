import { HTMLStencilElement } from "@stencil/core/internal";
import { AlertOptions } from "./interfaces";

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}


const createController = <htmlElement extends any, Opt extends object>(tagName: string) => {
  return {
    create(options: Opt): Promise<htmlElement> {
      return createElement(tagName, options) as any;
    }
  }

}

const createElement = async <T extends HTMLStencilElement>(tagName: string, options: object | undefined): Promise<T> => {
  await customElements.whenDefined(tagName);
  const element = document.createElement(tagName) as HTMLStencilElement;
  Object.assign(element, options);
  document.body.prepend(element);
  return new Promise(resolve => componentOnReady(element, resolve)) as any;
}


const componentOnReady = (element: HTMLStencilElement, callback: any) => {
  if (element.componentOnReady) {
    element.componentOnReady().then((resolvedElm: any) => callback(resolvedElm));
  }
}



export const ToastController = /*@__PURE__*/createController<HTMLKuAlertElement, AlertOptions>('ku-alert');