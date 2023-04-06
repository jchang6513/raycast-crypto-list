import { useEffect, useState } from "react";
import { SymbolList } from "./types";
import axios from "axios";

export const useSymbolList = () => {
  const [list, setList] = useState<SymbolList[]>([]);

  useEffect(() => {
    axios.get('https://www.binance.com/bapi/composite/v1/public/marketing/symbol/list')
      .then(function (response) {
        setList(response?.data?.data?.sort((a: SymbolList, b: SymbolList) => {
          return Number(a.rank || Infinity) - Number(b.rank || Infinity);
        }))
      })
  }, [])

  return list
}
