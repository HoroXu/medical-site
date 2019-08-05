import getRealLength from "@/utils/getRealLength";

export function handleCheckEmoji(type, emoji, length) {
  const { emojiCode } = emoji;
  const { getFieldValue, setFieldsValue } = this.props.form;
  const value = getFieldValue(type) || "";
  if (length - getRealLength(value) < 4) {
    return;
  }
  setFieldsValue({ [type]: `${value}/:${emojiCode}:/` });
  const newIndex = type[type.length - 1];
  const index =
    newIndex === "0" || newIndex === "1" || newIndex === "2" ? newIndex : "";
  if (/pushTitle/.test(type)) {
    setFieldsValue({ [`title${index}`]: `${value}/:${emojiCode}:/` });
  }
  if (/title/.test(type)) {
    setFieldsValue({ [`pushTitle${index}`]: `${value}/:${emojiCode}:/` });
  }
}

export function handleScriptChange(type, record) {
  console.log(type, record,this.props, "handleScriptChange方法===========");
  const { title = "", content = "", imgUrl = "" } = record;
  const { index = "" } = this.props;
  const { setFieldsValue } = this.props.form;

  if (type === "push") {
    setFieldsValue({
      [`pushTitle${index}`]: title,
      [`title${index}`]: title,
      [`content${index}`]: content,
      [`picture${index}`]: imgUrl
    });
  }
  if (type === "sms") {
    setFieldsValue({
      smsContent: content.replace(/\/:[A-Za-z0-9]{4}-[A-Za-z0-9]{4}:\//, "")
    });
  }
  if (type === "msg") {
    setFieldsValue({
      [`pushTitle${index}`]: title,
      [`title${index}`]: title,
      [`content${index}`]: content,
      [`centerPicture${index}`]: imgUrl
    });
  }
}

export const handleNickName = (type, length) => {
  const { getFieldValue, setFieldsValue } = this.props.form;
  const value = getFieldValue(type) || "";
  if (length - getRealLength(value) < 4) {
    return;
  }
  setFieldsValue({ [type]: `${value}[ALIAS]` });
  const newIndex = type[type.length - 1];
  const index =
    newIndex === "0" || newIndex === "1" || newIndex === "2" ? newIndex : "";
  if (/pushTitle/.test(type)) {
    setFieldsValue({ [`title${index}`]: `${value}[ALIAS]` });
  }
  if (/title/.test(type)) {
    setFieldsValue({ [`pushTitle${index}`]: `${value}[ALIAS]` });
  }
};
