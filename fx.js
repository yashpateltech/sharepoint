import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart
} from '@microsoft/sp-webpart-base';

export interface IMyWebPartProps {
  description: string;
}

export default class MyWebPart extends BaseClientSideWebPart<IMyWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<div>${this.properties.description}</div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
