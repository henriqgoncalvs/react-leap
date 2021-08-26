import { Textarea as CTextArea, TextareaProps as CTextareaProps } from '@chakra-ui/react';
import { FieldProps } from 'formik';

export type TextAreaProps = Omit<CTextareaProps, 'form'> & FieldProps;

export const TextArea = ({ placeholder, field, form, ...restProps }: TextAreaProps) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
    <CTextArea
      {...field}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setFieldValue(name, e.target.value)}
      {...restProps}
    />
  );
};

export default TextArea;
