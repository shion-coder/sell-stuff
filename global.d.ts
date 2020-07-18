interface FormDataValue {
  name: string;
  type: string;
  uri: string;
}

interface FormData {
  append(name: string, value: FormDataValue, fileName?: string): void;
  set(name: string, value: FormDataValue, fileName?: string): void;
}
