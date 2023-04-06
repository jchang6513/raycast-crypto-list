import { useEffect, useMemo, useState } from "react";
import { Coin } from "../types";
import axios from "axios";
import { useFavorites } from "./useFavorite";
import { sortBy } from "lodash";

export const useSymbolList = () => {
  const [list, setList] = useState<Coin[]>([]);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    axios.get('https://www.binance.com/bapi/composite/v1/public/marketing/symbol/list')
      .then(function (response) {
        setList(response?.data?.data || [])
      })
  }, [favorites])

  return useMemo(() => {
    const sortedData = sortBy(list, 'rank')
    return sortedData.map((d) => ({
      ...d,
      isFavorite: favorites.includes(d.symbol),
      toggleFavorite: () => toggleFavorite(d.symbol),
    }))
  }, [list, favorites])
}
