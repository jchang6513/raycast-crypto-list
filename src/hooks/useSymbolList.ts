import { useEffect, useMemo, useState } from "react";
import { Coin, Ticker } from "../types";
import axios from "axios";
import { useFavorites } from "./useFavorite";
import { sortBy } from "lodash";
import { DAY_TICKER_URL, SYMBOL_LIST_URL } from "../constants";

export const useSymbolList = () => {
  const [list, setList] = useState<Coin[]>([]);
  const [tickerMap, setTickerMap] = useState<Record<string, Ticker>>({});
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    axios.get(SYMBOL_LIST_URL)
      .then(function (response) {
        setList(response?.data?.data || [])
      })
  }, [])

  useEffect(() => {
    axios.get(DAY_TICKER_URL)
      .then(function (response) {
        setTickerMap(
          response?.data?.reduce(
            (acc: Record<string, Ticker>, d: Ticker) => {
              acc[d.symbol] = d
              return acc
            }, {})
          )
      })
  }, [])

  return useMemo(() => {
    const sortedData = sortBy(list, 'rank')
    return sortedData.map((d) => ({
      ...d,
      price: tickerMap[d.symbol]?.openPrice || d.price,
      highPrice: tickerMap[d.symbol]?.highPrice || d.price,
      lowPrice: tickerMap[d.symbol]?.lowPrice || d.price,
      dayChange: tickerMap[d.symbol]?.priceChangePercent || d.dayChange,
      isFavorite: favorites.includes(d.symbol),
      toggleFavorite: () => toggleFavorite(d.symbol),
    }))
  }, [list, tickerMap, favorites])
}
