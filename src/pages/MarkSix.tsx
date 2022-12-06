import PowerNumber from '../components/MarkSix/PowerNumber';

const MarkSix = () => {
  const randomIn = (x: number) => {
    return Math.floor(Math.random() * x) + 1;
  };

  const getOneSet = () => {
    let numberSet = '';
    // 每期六合彩攪珠均從 49 個號碼中攪出七個號碼。首六個號碼稱為「攪出號碼」，而第七個號碼稱為「特別號碼」。

    for (let i = 0; i <= 5; i++) {
      const n = randomIn(49).toString();
      if (numberSet.indexOf(n) > 0) {
        i -= 1;
        continue;
      } else {
        numberSet += n + ' ';
      }
    }

    return numberSet;
  };

  const filterMethod = () => {
    let arr = Array.from(Array(49).keys()).map((number) => {
      return number + 1;
    });
    do {
      arr = arr.filter((item) => item !== randomIn(49));
    } while (arr.length > 6);

    return arr.join(' ');
  };

  const filterOneNum = () => {
    let arr = Array.from(Array(49).keys()).map((number) => {
      return number + 1;
    });
    do {
      arr = arr.filter((item) => item !== randomIn(49));
    } while (arr.length > 1);
    console.log(arr);
    return arr[0];
  };

  const filterMethod2 = () => {
    const numberSet: number[] = [];

    do {
      const num = filterOneNum();
      if (numberSet.includes(num)) {
        continue;
      } else {
        numberSet.push(num);
      }
    } while (numberSet.length < 6);

    return numberSet.join(' ');
  };
  return (
    <div className="">
      <div className="flex flex-col w-80 border-8 border-double p-4 m-8  justify-center items-center ">
        <h1>Mark Six</h1>
        <h2>六合彩</h2>

        <img
          src="https://play-lh.googleusercontent.com/Z-9XRe5JCxRTfDlwF7omVTXID9-35kjL7Zeh2H0ebubpsyOxTP_zORCaVe3jUV9wfyc"
          className="logo self-center"
          alt="logo"
        />

        <p>~ lucky you ~</p>
        <div>
          <span>幸運號碼：</span> <br />
          {getOneSet()}
        </div>
        <div>* {filterMethod()}</div>
        <div>** {filterMethod2()}</div>
      </div>

      <div className="border-8 p-4 ">
        <PowerNumber />
      </div>
    </div>
  );
};

export default MarkSix;
