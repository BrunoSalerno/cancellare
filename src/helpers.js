const buildQueryString = (text, deleted) => {
  const encodedText = encodeURIComponent(text);
  let deletedStr;
  if (typeof deleted == "string") {
    deletedStr = deleted;
  } else {
    deletedStr = Array.from(deleted).sort().join(",");
  }
  return `text=${encodedText}&deleted=${deletedStr}`;
}

export { buildQueryString };
