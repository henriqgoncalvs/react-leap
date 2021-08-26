import {
  Slider as CSlider,
  SliderFilledTrack,
  SliderProps as CSliderProps,
  SliderThumb,
  SliderThumbProps,
  SliderTrack,
  SliderTrackProps,
} from '@chakra-ui/react';
import { FieldProps } from 'formik';

export interface SliderProps extends Omit<CSliderProps, 'form'>, FieldProps {
  sliderTrackProps?: SliderTrackProps;
  sliderThumbProps?: SliderThumbProps;
}

export const Slider = ({
  sliderTrackProps,
  sliderThumbProps,
  field,
  form,
  ...restProps
}: SliderProps) => {
  const { name } = field;
  const { setFieldValue } = form;

  const $setFieldValue = (value: number) => setFieldValue(name, value);

  return (
    <CSlider {...field} id={name} onChange={$setFieldValue} {...restProps}>
      <SliderTrack {...sliderTrackProps}>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb {...sliderThumbProps} />
    </CSlider>
  );
};

export default Slider;
