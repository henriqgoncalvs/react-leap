import {
  Box,
  Input,
  InputGroup,
  InputProps,
  InputLeftElement,
  useBreakpointValue,
  forwardRef,
  BoxProps,
  Icon,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { FieldProps } from 'formik';
import { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { FiCalendar } from 'react-icons/fi';

const FORMAT = 'DD/MM/YYYY';

const ReactDayPickerInput = forwardRef<InputProps, 'input'>(({ isDisabled, ...rest }, ref) => (
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <Icon as={FiCalendar} fontSize="lg" color={isDisabled ? 'gray.300' : 'gray.400'} />
    </InputLeftElement>
    <Input ref={ref} {...rest} />
  </InputGroup>
));

export interface DayPickerProps extends BoxProps, FieldProps {
  placeholder?: string;
  onChange?: any;
  inputProps?: any;
  dayPickerProps?: any;
}

export const DayPicker = ({
  placeholder = FORMAT,
  defaultValue = '',
  onChange,
  inputProps = {},
  dayPickerProps = {},
  field,
  form,
  ...rest
}: DayPickerProps) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  const isSmartphoneFormat = useBreakpointValue({ base: true, sm: false });

  const formatDate = (date, format) => dayjs(date).format(format);

  const parseDate = (str: string, format: string) => {
    const parsed = dayjs(str, format).toDate();
    if (DateUtils.isDate(parsed)) return parsed;
  };

  const $setFieldValue = (day: Date) => setFieldValue(name, day);

  return (
    <Box {...rest}>
      <DayPickerInput
        component={ReactDayPickerInput}
        onDayChange={onChange || $setFieldValue}
        formatDate={formatDate}
        format={FORMAT}
        parseDate={parseDate}
        placeholder={placeholder}
        value={value || defaultValue}
        dayPickerProps={{
          locale: 'pt-BR',
          months: Array.from({ length: 12 }).map((_, i) => dayjs().month(i).format('MMMM')),
          weekdaysLong: Array.from({ length: 7 }).map((_, i) =>
            dayjs()
              .day(i + 1)
              .format('dddd'),
          ),
          weekdaysShort: Array.from({ length: 7 }).map((_, i) =>
            dayjs()
              .day(i + 1)
              .format('dd'),
          ),
          firstDayOfWeek: 1,
          ...dayPickerProps,
        }}
        inputProps={{
          readOnly: isSmartphoneFormat,
          ...inputProps,
        }}
      />
    </Box>
  );
};
