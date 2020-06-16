import * as React from 'react';
export interface ISliderProps {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    errorMessage?: string;
    controlled?: boolean;
    onChange?: (e: React.BaseSyntheticEvent) => void;
    onFocus?: (e: React.BaseSyntheticEvent) => void;
    onBlur?: (e: React.BaseSyntheticEvent) => void;
    name?: string;
    clearFormValueOnUnmount?: boolean;
    containerClassName?: any;
    className?: any;
    sizeVariant?: 'normal' | 'small' | 'large';
}
declare const PropsWrappedStyledSlider: (props: ISliderProps & React.HTMLProps<HTMLInputElement>) => JSX.Element;
/** Exports */
export default PropsWrappedStyledSlider;
export { PropsWrappedStyledSlider as Slider, };
