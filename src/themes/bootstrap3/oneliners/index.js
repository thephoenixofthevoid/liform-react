import StringWidget from "./StringWidget";
import EmailWidget from "./EmailWidget";
import NumberWidget from "./NumberWidget";
import ColorWidget from "./ColorWidget";
import DateTimeWidget from "./DateTimeWidget";
import DateWidget from "./DateWidget";
import PasswordWidget from "./PasswordWidget";
import SearchWidget from "./SearchWidget";
import UrlWidget from "./UrlWidget";
import TimeWidget from "./TimeWidget";

export default {
    string: StringWidget,
    email: EmailWidget,
    integer: NumberWidget,
    number: NumberWidget,
    time: TimeWidget,
    password: PasswordWidget,
    search: SearchWidget,
    url: UrlWidget,
    color: ColorWidget,
    date: DateWidget,
    datetime: DateTimeWidget,
};