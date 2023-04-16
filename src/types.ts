export type Coin = {
  id: number;
  name: string;
  fullName: string;
  logo: string;
  symbol: string;
  volume: number;
  rank: number;
  dayChange: number,
  dayChangeAmount: number;
  marketCap: number;
  price: number;
  lowPrice: number;
  highPrice: number;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

export type Ticker = {
  symbol: string;
  priceChangePercent: string;
  lastPrice: string;
  highPrice: string;
  lowPrice: string;
}

export type Preference = {
  colorPreference: 'greenUp' | 'greenDown'
}
