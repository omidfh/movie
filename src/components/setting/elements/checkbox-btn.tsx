import { ReactNode, memo } from "react";
import { useDispatch } from "react-redux";
import SettingAction from "../../../store/setting/actions";

interface Props {
  sidebarType?: any;
  btnName: keyof typeof SettingAction;
  className: string;
  type?: string;
  id: string | undefined;
  labelclassName: string;
  children?: ReactNode;
  imgComponent?: any;
  label: string;
  value: string | number;
  defaultChecked: (string | number)[];
}

const CheckboxBtn = memo((props: Props) => {
  const dispatch = useDispatch();

  const checkboxCheckValue = (
    selector: (string | number)[],
    value: string | number
  ) => {
    return selector.includes(value);
  };

  const changeDispatch = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = props.value;
    if (checkboxCheckValue(props.defaultChecked, value)) {
      const newArray = props.defaultChecked.filter(
        (item: string | number) => item !== value
      );
      dispatch(SettingAction[props.btnName](newArray as never));
    } else {
      const newArray = [...props.defaultChecked, value];
      dispatch(SettingAction[props.btnName](newArray as never));
    }
  };

  return (
    <div className={props.className}>
      <input
        type="checkbox"
        value={props.value}
        className="btn-check"
        name={props.btnName as string}
        id={props.id}
        autoComplete="off"
        defaultChecked={checkboxCheckValue(props.defaultChecked, props.value)}
        onClick={changeDispatch}
      />
      <label
        className={`btn btn-border btn-setting-panel d-block overflow-hidden ${props.labelclassName}`}
        htmlFor={props.id}
      >
        {props.children}
      </label>
    </div>
  );
});

CheckboxBtn.displayName = "CheckboxBtn";
export default CheckboxBtn;
