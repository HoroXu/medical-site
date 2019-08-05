export default (emoji, value) => {
  let codeUrl = new Map();
  for (let i = 0; i < emoji.length; i++) {
    if (emoji[i].emoji) {
      for (let j = 0; j < emoji[i].emoji.length; j++) {
        codeUrl.set(
          `/:${emoji[i].emoji[j].emojiCode}:/`,
          emoji[i].emoji[j].emojiUrl
        );
      }
    }
  }

  return (
    value &&
    value.replace(/(\/:[A-Za-z0-9]{4}-[A-Za-z0-9]{4}:\/)/g, match => {
      return `<img src='${codeUrl.get(
        match
      )}' style="width:15px;height:15px;margin-top: 0px;" />`;
    })
  );
};
