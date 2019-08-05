import { message } from "antd";

// 检查标签
export const validateTag = valueTotal => {
  if (!valueTotal.length) {
    message.info(`请至少选择一个标签`);
    return false;
  }
  let flag = true;
  const tagValues = valueTotal.map(item => Object.assign({}, item, item.value));
  const nullTag = tagValues.find(item => !("param" in item.value));
  if (nullTag) {
    message.info(`请选择或填写${nullTag.name}的值`);
    return false;
  }
  // 组合标签，整体时下一个参数可以为空
  const brandTagType = [4, 6, 13, 14];
  const brandTag = tagValues.filter(item => brandTagType.includes(item.type));
  const notBrandTag = tagValues.filter(item => !brandTagType.includes(item.type));
  for (let item of notBrandTag) {
    let noop = Object.keys(item.param).find(v => item["param"][v].length === 0);
    if (noop) {
      message.info(`请选择或填写${item.name}的值`);
      flag = false;
      break;
    }
  }
  for (let item of brandTag) {
    const param = item.param;
    const msg = `请选择或填写${item.name}的值`;
    if (item.type === 4 || item.type === 6) {
      if (param.p1.length === 0 || param.p2.length === 0 || param.p5 === "") {
        message.info(msg);
        flag = false;
        break;
      }
      if (param.p3 !== "1" && param.p4.length === 0) {
        message.info(msg);
        flag = false;
        break;
      }
    } else {
      if (param.p1.length === 0 || (param.p2 !== "1" && param.p3.length === 0)) {
        message.info(msg);
        flag = false;
        break;
      }
    }
  }
  return flag;
};

// 生成组合方式文本
export const getCombString = (lengthA, lengthB) => {
  let groupARe = "A";
  let groupBRe = "B";
  if (lengthA) {
    let aRe = "";
    for (let i = 1; i <= lengthA; i++) {
      aRe += "A" + i + " ∩ ";
    }
    groupARe = aRe.slice(0, -3);
  }
  if (lengthB) {
    let bRe = "";
    for (let i = 1; i <= lengthB; i++) {
      bRe += "B" + i + " ∩ ";
    }
    groupBRe = bRe.slice(0, -3);
  }
  return { groupARe, groupBRe };
};

// 生成标签文本描述
export const getTagsString = (aNames, bNames, relations) => {
  let strA = [];
  let strB = [];
  const spTags = [4, 6, 13, 14];
  const strFromTag = [9, 12, 15, 16, 17, 18]; // 标签里拼好传过来，以后便签使用这种方式
  aNames.forEach(element => {
    let value = Object.values(element.value)[0];
    if (spTags.includes(element.type)) {
      let valueArr = Object.entries(value[0]);
      let tpye4 = [];
      valueArr.forEach(([key, inValue]) => {
        tpye4.push(`${key}: ${inValue}`);
      });
      strA.push(`${element.name}: (${tpye4.join(";")})`);
    } else if (strFromTag.includes(element.type)) {
      strA.push(element.value);
    } else {
      strA.push(`${element.name}: ${value.join("、")}`);
    }
  });
  bNames.forEach(element => {
    let value = Object.values(element.value)[0];
    if (spTags.includes(element.type)) {
      let valueArr = Object.entries(value[0]);
      let tpye4 = [];
      valueArr.forEach(([key, inValue]) => {
        tpye4.push(`${key}: ${inValue}`);
      });
      strB.push(`${element.name}: (${tpye4.join(";")})`);
    } else if (strFromTag.includes(element.type)) {
      strB.push(element.value);
    } else {
      strB.push(`${element.name}: ${value.join("、")}`);
    }
  });
  let [relation] = relations;
  // const relationDisplay = relation === '1' ? '∩' : relation === '2' ? '∪' : '-'
  const relationDisplay = relation === "1" ? "交" : relation === "2" ? "并" : "差";
  let competeStr = `A: {${strA.join("; ")}} ${relationDisplay} B: {${strB.join("; ")}}`;
  if (strA.length === 0) {
    // competeStr = `{ ${strB.join(' ∩ ')} }`
    competeStr = `B: {${strB.join(";")}}`;
  }
  if (strB.length === 0) {
    competeStr = `A: {${strA.join(";")}}`;
  }
  competeStr = competeStr.replace(/整体: /g, "整体");
  return competeStr;
};
