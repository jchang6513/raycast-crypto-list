import { Color, getPreferenceValues } from "@raycast/api";
import { Preference } from "./types";

export const formatNumber = (num: number, option?: { style?: string, precision?: number }) => {
  const defaultPrecision = Math.abs(num) >= 1 ? 2 : 8

  const { style = 'decimal', precision = defaultPrecision } = option || {}

  return new Intl.NumberFormat(
    'en-US',
    {
      style,
      currency: 'USD',
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
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
