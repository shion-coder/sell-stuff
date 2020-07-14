export interface Category {
  id: number;
  name: string;
  icon?: string;
  backgroundColor?: string;
}

export interface PickerProps {
  item: Category;
  onPress: () => void;
}
