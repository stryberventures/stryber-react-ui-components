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

interface ISearchBoxPropsBase extends ISearchFieldProps {
  onSelect?: (result: ISearchResult) => void;
}

interface ISearchBoxPropsWithFetch extends ISearchBoxPropsBase {
  /** Fetch info */
  requestInfo?: (input: string) => string | RequestInfo;
  fetchTimeout?: number;
  parseResponse?: (response: any) => ISearchResult[];
}

interface ISearchBoxPropsWithResults extends ISearchBoxPropsBase {
  /** External results */
  results?: ISearchResult[];
}

export type ISearchBoxProps = ISearchBoxPropsWithFetch & ISearchBoxPropsWithResults;

/** Main component */
const SearchBox = (props: ISearchBoxProps & WithStyles<typeof styles>) => {
  const {
    className,
    classes,
    value,
    onFocus,
    onBlur,
    onSelect,
    onChange,
    /** Fetch */
    requestInfo,
    parseResponse,
    fetchTimeout = 500,
    /** External results */
    results,
    ...rest
  } = props;

  const [internalInputValue, setInternalInputValue] = React.useState('');
  const [requestTimeout, setRequestTimeout] = React.useState(setTimeout(() => {}, 0));

  /** Focused state */
  const [isFocused, setFocused] = React.useState(false);

  /** Internal results */
  const [internalResults, setInternalResults] = React.useState([] as ISearchResult[]);

  /** Default functions */
  const defautParseResponse = (data: any) => data.map((d: any) => ({
    label: d.name,
  }));

  /** Fetch data function */
  const fetchData = (value: string) => {
    if (typeof requestInfo === 'function') {
      const generatedRequestInfo = requestInfo(value);
      if (generatedRequestInfo) {
        fetch(requestInfo(value) as RequestInfo)
          .then(response => response.json())
          .then(parseResponse || defautParseResponse)
          .then((parsedData: any) => setInternalResults(parsedData));
      } else {
        setInternalResults(() => []);
      }
    }
  };

  /** Function wrapper to update internal input value */
  const updateInternalValue = (value: string) => {
    setInternalInputValue(value);
    clearTimeout(requestTimeout);
    setRequestTimeout(() => setTimeout(() => fetchData(value), fetchTimeout));
  };

  /** Mount / unmount */
  React.useEffect(() => {
    fetchData(internalInputValue);
    return () => {
    };
  }, []);

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
        onChange={(value: string) => { onChange && onChange(value); updateInternalValue(value); }}
        onFocus={(e: React.BaseSyntheticEvent) => { onFocus && onFocus(e); setFocused(true); }}
        onBlur={(e: React.BaseSyntheticEvent) => { onBlur && onBlur(e); setFocused(false) }}
      />
      {/** Search dropdown */}
      {
        (isFocused && (results || internalResults).length)
          ? (
            <div
              className={classes.dropdownWrapper}
            >
              {
                (results || internalResults).map((d: ISearchResult, i: number) => {
                  const onMouseDown = (e: React.BaseSyntheticEvent) => {
                    e.stopPropagation();
                    onSelect && onSelect(d);
                    d.onClick && d.onClick(e);
                    d.href && window.open(d.href, '_self');
                  };
                  return (
                    <a
                      key={i}
                      onMouseDown={ onMouseDown }
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
