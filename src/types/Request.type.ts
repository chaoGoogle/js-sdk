import { IEtag } from "./Etag.type";
import { IRequestMetadata } from "./RequestMetadata.type";
import { IStateOptions } from "./state/StateOptions.type";

export type IRequest = {
  key: string;
  value?: any;
  etag?: IEtag;
  metadata?: IRequestMetadata;
  options?: IStateOptions;
}