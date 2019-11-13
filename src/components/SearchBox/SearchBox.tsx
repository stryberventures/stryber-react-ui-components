import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './SearchBox.styles';
import { SearchField, ISearchFieldProps } from '../SearchField';

/** Interfaces */
export interface ISearchResult {
  label: string;
  href?: string;
  value?: string,
  onClick?: (e: React.BaseSyntheticEvent) => void;
}

export interface ISearchBoxProps extends ISearchFieldProps {
  results?: ISearchResult[];
  className?: string;
}

/** Main component */
const SearchBox = (props: ISearchBoxProps & WithStyles<typeof styles>) => {
  const {
    classes,
    value,
    className,
    onFocus,
    onBlur,
    results = [] as ISearchResult[],
    ...rest
  } = props;

  const [isFocused, setFocused] = React.useState(false);
  // const [inputValue, setInputValue] = React.useState(value || '');

  return (
    <div
      className={classNames([
        className,
        classes.root,
      ])}
    >
      {/** SearchField*/}
      <SearchField
        {...rest}
        onFocus={(e: React.BaseSyntheticEvent) => { onFocus && onFocus(e); setFocused(true); }}
        onBlur={(e: React.BaseSyntheticEvent) => { onBlur && onBlur(e); setFocused(false) }}
      />
      {/** Search dropdown */}
      {
        (isFocused && results.length)
          ? (
            <div
              className={classes.dropdownWrapper}
            >
              {
                results.map((d: ISearchResult, i: number) => {
                  return (
                    <a
                      key={i}
                      onClick={ d.onClick || undefined }
                      href={ d.href || undefined }
                      className={classes.dropdownItem}
                    >
                      { d.label }
                    </a>
                  );
                })
              }
            </div>
          ) : null
      }
    </div>
  );
};

/** Wrappers */
const StyledSearchBox = withStyles(styles)(SearchBox);
const PropsWrappedStyledSearchBox = (props: ISearchBoxProps) => <StyledSearchBox {...props} />;

/** Exports */
export default PropsWrappedStyledSearchBox;
export {
  PropsWrappedStyledSearchBox as SearchBox,
};
