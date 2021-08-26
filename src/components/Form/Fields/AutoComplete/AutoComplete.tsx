import {
  AutoComplete as CAutoComplete,
  AutoCompleteProps as CAutoCompleteProps,
} from '@choc-ui/chakra-autocomplete';
import { FieldProps } from 'formik';

export interface AutoCompleteProps extends CAutoCompleteProps, FieldProps {}

export const AutoComplete = ({ field, form, children, ...restProps }: AutoCompleteProps) => {
  const { name } = field;
  const { setFieldValue } = form;

  const $setFieldValue = (value: string | any[]) => setFieldValue(name, value);

  return (
    <CAutoComplete {...field} {...restProps} onChange={$setFieldValue}>
      {children}
    </CAutoComplete>
  );
};

export {
  AutoCompleteGroup,
  AutoCompleteList,
  AutoCompleteTag,
  AutoCompleteItem,
  AutoCompleteInput,
  AutoCompleteGroupTitle,
  useAutoComplete,
} from '@choc-ui/chakra-autocomplete';
