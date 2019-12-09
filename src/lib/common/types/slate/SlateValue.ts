export interface SlateValue {
  version: string;
  // This is the actual slate value. Since we don't care about it,
  // better keep it untyped as it might change between version. Also this way, we don't have to import anything from slate.
  // tslint:disable-next-line: no-any
  data: any;
}
