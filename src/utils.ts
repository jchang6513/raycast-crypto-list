import { Color, getPreferenceValues } from "@raycast/api";
import { Preference } from "./types";

export const formatNumber = (num: number, style = 'decimal') => {
  return new Intl.NumberFormat(
    'en-US',
    {
      style,
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  ).format(num);
}

export const spotTradingPage = (symbol: string) =>
  `https://www.binance.com/zh-TC/trade/${symbol}`

export const getSign = (num: number) => num >= 0 ? '+' : '-'

const getColorPreference = () => {
  const preference = getPreferenceValues<Preference>();

  return preference.colorPreference
}

export const getPriceColor = (num: number) => {
  const preference = getColorPreference()

  if (num >= 0 ) {
    return preference === 'greenUp' ? Color.Green : Color.Red
  } else {
    return preference === 'greenDown' ? Color.Green : Color.Red
  }
}
