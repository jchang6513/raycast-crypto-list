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
  isFavorite: boolean;
  toggleFavorite: () => void;
}
