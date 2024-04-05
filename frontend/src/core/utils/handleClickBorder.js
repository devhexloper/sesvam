const onClickBorderH = (e, rect, borderWidth) => {
  const { clientX } = e;
  const { right } = rect;
  return clientX >= right - borderWidth && clientX <= right;
};

const onClickBorderD = (e, rect, borderWidth) => {
  const { clientY } = e;
  const { bottom } = rect;
  return clientY >= bottom - borderWidth && clientY <= bottom;
};

export { onClickBorderH, onClickBorderD };
