import * as React from 'react';
import classNames from 'classnames';
import MultiSelectBadge from './MultiSelectBadge';
import styles from './styles';


export interface IChoiceData {
  label: any;
  value: any;
}

export interface IProps {
  classes?: any;
  style?: CSSProperties;
  className?: string;
  variant:
    any
    | 'primary'
    | 'glance'
    | 'lightOutline'
    | 'textOnly';

  placeholder?: any;
  multiSelect?: boolean;
  onChange: (value: any) => void;
  choices: IChoiceData[];
  label?: string;
  value?: any | any[];
  customDropdownContainerClassName?: string;
  customDropdownItemClassName?: string;
}

export interface IState {
  selected: number[];
  isOpen: boolean;
  isRightSideOut: boolean;
}

class DropdownMenuSelect extends React.Component<IProps, IState> {
  private mainContainerRef = createRef<HTMLDivElement>();

  state = {
    // @ts-ignore
    selected: [],
    isOpen: false,
    isRightSideOut: false,
  };

  checkDropdownContainerAlignment = () => {
    if (this.mainContainerRef && this.mainContainerRef.current) {
      const bounding = this.mainContainerRef.current.getBoundingClientRect();
      const { isRightSideOut } = this.state;

      const isNewRightSideOut = bounding.left + Math.abs(bounding.right - bounding.left) / 2 > (window.innerWidth || document.documentElement.clientWidth) / 2;
      if (isNewRightSideOut !== isRightSideOut) {
        // Right side is out of viewport
        this.setState({ isRightSideOut: isNewRightSideOut });
      }
    }
  }


  componentDidMount() {
    this.checkDropdownContainerAlignment();
    window.addEventListener('resize', this.checkDropdownContainerAlignment);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkDropdownContainerAlignment);
  }

  onSelect = (index: any) => {
    const { onChange, choices, multiSelect, value } = this.props;
    const { selected, isOpen }: IState = this.state;

    let newSelected = [];
    if (multiSelect) {
      if (value && Array.isArray(value)) {
        const selectedChoices =
          choices
            .map((data: any, i: number) => value.find((d: any) => d === data.value) ? i : -1)
            .filter((d: number) => d > -1);
        if (selectedChoices.indexOf(index) > -1) {
          newSelected = [...selectedChoices].filter((d: number) => d !== index);
        } else {
          newSelected = [...selectedChoices, index];
        }
      } else {
        if (selected.indexOf(index) > -1) {
          newSelected = [...selected].filter((d: number) => d !== index);
        } else {
          newSelected = [...selected, index];
        }
      }
    } else {
      newSelected = [index];
    }

    const returnValues = newSelected
      .map((index: number) => choices[index].value);
    onChange && onChange(multiSelect ? returnValues : returnValues[0]);

    this.setState({ selected: newSelected, isOpen: multiSelect ? isOpen : !isOpen });
  }

  render() {
    const { classes, choices, style, className, multiSelect, placeholder, value, variant, customDropdownContainerClassName, customDropdownItemClassName }: IProps = this.props;
    const { selected, isOpen, isRightSideOut }: IState = this.state;

    const selectedSource = typeof value === 'undefined'
      ? selected
      : (Array.isArray(value) ? value.map(v => choices.findIndex(d => d.value === v)).filter(d => d >= 0) : [choices.findIndex(d => d.value === value)]).filter(d => d >= 0);

    let selectedContent = null;
    if (selectedSource.length) {
      if (multiSelect) {
        selectedContent = (<>
          {
            selectedSource
              .map((selectedIndex: number, i: number) => (
                <MultiSelectBadge
                  key={i}
                  onClose={() => this.onSelect(selectedIndex)}
                >
                  { choices[selectedIndex] && choices[selectedIndex].label }
                </MultiSelectBadge>
              ))
          }
        </>);
      } else if (choices[selectedSource[0]]) {
        selectedContent = choices[selectedSource[0]].label;
      }
    }

    return (
      <Form.Group>
        { this.props.label && (
          <Form.Label>{this.props.label}</Form.Label>
        )}
        <div
          ref={this.mainContainerRef}
          className={combineClassnames([
            classes.wrapper,
            isOpen ? classes.opened : null,
            variant ? `${classes.wrapper}_${variant}` : classes.primaryWrapper,
            className,
          ])}
          style={style}
          onClick={() => ((!multiSelect || !selectedSource.length) && !isOpen) ? this.setState({ isOpen: true }) : null}
        >
          {
            selectedContent ? (
              <div
                className={combineClassnames([
                  classes.selectedValue,
                  variant ? `${classes.selectedValue}_${variant}` : classes.primarySelectedValue,
                ])}
              >
                { selectedContent }
              </div>
            ) : (
              <div className={classes.placeholder}>
                { placeholder }
              </div>
            )
          }
          <div
            className={classes.expandSection}
            onClick={() => this.setState({ isOpen: true })}
          >
            <MdExpandMore className={classes.expandIcon} />
          </div>
          {/** Dropdown menu & click-away area */}
          {
            isOpen ? (
              <>
                <div
                  className={
                    combineClassnames([
                      customDropdownContainerClassName || null,
                      isRightSideOut ? classes.dropdownContainerRight : null,
                      classes.dropdownContainer,
                      variant ? `${classes.dropdownContainer}_${variant}` : classes.primaryDropdownContainer,
                    ])
                  }
                >
                  {
                    choices
                      .map((d: IChoiceData, i: number) => (
                        <div
                          key={i}
                          className={combineClassnames([
                            customDropdownItemClassName || null,
                            classes.item,
                            (!multiSelect && selectedSource.indexOf(i) > -1) ? classes.selectedItem : null,
                            variant ? `${classes.item}_${variant}` : classes.primaryItem,
                          ])}
                          onClick={() => this.onSelect(i)}
                        >
                          {
                            multiSelect ? (
                              <CheckBox
                                className={classes.itemCheckbox}
                                checked={selectedSource.indexOf(i) > -1}
                              />
                            ) : null
                          }
                          <div className={classes.itemBody}>
                            { d.label }
                          </div>
                        </div>
                      ))
                  }
                </div>
                <div
                  className={classes.clickAway}
                  onClick={() => this.setState({ isOpen: false })}
                >
                </div>
              </>
            ) : null
          }
        </div>
      </Form.Group>
    );
  }

  public static defaultProps = {
    variant: 'primary'
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DropdownMenuSelect));
