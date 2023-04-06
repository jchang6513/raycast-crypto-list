import { List } from "@raycast/api";
import { useSymbolList } from "./hooks/useSymbolList";
import { ListItem } from "./components/ListItem";
import { useMemo } from "react";

export default function Command() {
  const list = useSymbolList()

  const [favorites, nonFavorites] = useMemo(() => ([
    list.filter(l => l.isFavorite),
    list.filter(l => !l.isFavorite)
  ]), [list])

  return (
    <List isShowingDetail>
      <List.Section title="Favorites">
        {favorites.map((coin) => <ListItem key={coin.id} coin={coin} />)}
      </List.Section>
      <List.Section title="List">
        {nonFavorites.map((coin) => <ListItem key={coin.id} coin={coin} />)}
      </List.Section>
    </List>
  );
}
