import { CUIAutoComplete, CUIAutoCompleteProps, Item } from 'chakra-ui-autocomplete';
import { FieldProps } from 'formik';
import { useEffect, useState } from 'react';

import { convertArrayToString } from './utils';

export interface AutoCompleteProps
  extends Omit<CUIAutoCompleteProps<Item>, 'selectedItems' | 'onSelectedItemsChange'>,
    FieldProps {}

export function AutoComplete({
  field,
  form,
  items,
  label,
  onCreateItem,
  ...restProps
}: AutoCompleteProps) {
  const { name } = field;
  const { setFieldValue } = form;

  const [pickerItems, setPickerItems] = useState(items);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const handleCreateItem = (item: Item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  useEffect(() => {
    setFieldValue(name, convertArrayToString(selectedItems));
  }, [selectedItems, name, setFieldValue]);

  return (
    <CUIAutoComplete
      {...field}
      label={label}
      onCreateItem={handleCreateItem || onCreateItem}
      items={pickerItems}
      selectedItems={selectedItems}
      onSelectedItemsChange={(changes) => handleSelectedItemsChange(changes.selectedItems)}
      listStyleProps={{
        bg: 'gray.700',
      }}
      highlightItemBg="gray.500"
      listItemStyleProps={{
        _hover: {
          bg: 'gray.500',
        },
        _active: {
          bg: 'gray.500',
        },
        _focus: {
          bg: 'gray.500',
        },
      }}
      toggleButtonStyleProps={{
        color: 'black',
      }}
      {...restProps}
    />
  );
}
