import { useEffect, useMemo, useState } from "react";
import { LocalStorage } from "@raycast/api";
import xor from "lodash/xor";

const KEY_FAVORITES = "crypto-list-favorites";

export async function getLocalFavorites(): Promise<string[]> {
  const favorites = (await LocalStorage.getItem(KEY_FAVORITES)) || "[]";
  return JSON.parse(favorites.toString());
}

const setLocalFavorites = async (favorites: string[]) => {
  const newFavorites = JSON.stringify(favorites);
  await LocalStorage.setItem(KEY_FAVORITES, newFavorites);
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    ;(async () => {
      setFavorites(await getLocalFavorites())
    })()
  }, [])

  useEffect(() => {
    setLocalFavorites(favorites)
  }, [favorites])

  return useMemo(() => ({
    favorites,
    toggleFavorite: (s: string) => setFavorites(xor(favorites, [s])),
  }), [favorites])
}
