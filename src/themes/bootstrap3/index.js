import TextareaWidget from "./TextareaWidget";
import MoneyWidget from "./MoneyWidget";
import PercentWidget from "./PercentWidget";
import ArrayWidget from "./ArrayWidget";
import CheckboxWidget from "./CheckboxWidget";
import ObjectWidget from "./ObjectWidget";
import ChoiceWidget from "./ChoiceWidget";
import ChoiceExpandedWidget from "./ChoiceExpandedWidget";
import ChoiceMultipleExpandedWidget from "./ChoiceMultipleExpandedWidget";
import CompatibleDateWidget from "./CompatibleDateWidget";
import CompatibleDateTimeWidget from "./CompatibleDateTimeWidget";
import FileWidget from "./FileWidget";
import OneOfChoiceWidget from "./oneOfChoiceWidget";
import Oneliners from "./oneliners"

export default {
  object: ObjectWidget,
  textarea: TextareaWidget,
  money: MoneyWidget,
  percent: PercentWidget,
  array: ArrayWidget,
  boolean: CheckboxWidget,
  choice: ChoiceWidget,
  "choice-expanded": ChoiceExpandedWidget,
  "choice-multiple-expanded": ChoiceMultipleExpandedWidget,
  "compatible-date": CompatibleDateWidget,
  "compatible-datetime": CompatibleDateTimeWidget,
  file: FileWidget,
  oneOf: OneOfChoiceWidget,
  ...Oneliners
};
