export const moneyFormat = (amount: any = 0, lang: string = "en") => {
    let eng_money = Number(amount)
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  let tmp: any = {
    "0": "၀",
    1: "၁",
    2: "၂",
    3: "၃",
    4: "၄",
    5: "၅",
    6: "၆",
    7: "၇",
    8: "၈",
    9: "၉",
  };
  let mm_money = eng_money.replace(/([0-9])/g, (s, key: any) => tmp[key] || s);
  return lang === "en" ? eng_money : mm_money;
};
