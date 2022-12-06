const PowerNumber = () => {
  const getRandom = (x: number) => Math.floor(Math.random() * x) + 1;

  const getPowerNum = () => {
    let status = '第一區號碼：';

    for (let i = 0; i <= 5; i++) {
      const n = getRandom(38).toString();
      if (status.indexOf(n) > 0) {
        i -= 1;
        continue;
      } else {
        status += n + ' ';
      }
    }
    return status + '第二區號碼：' + getRandom(8);
  };

  return (
    <div>
      <h2>台灣威力彩號碼</h2>
      <p>{getPowerNum()}</p>
    </div>
  );
};

export default PowerNumber;
