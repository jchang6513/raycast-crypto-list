import { Action, ActionPanel, Color, Icon, List } from "@raycast/api"
import { Coin } from "../types"
import { useMemo } from "react"
import { Detail } from "./Detail"

type Props = { coin: Coin }

export const ListItem = (props: Props) => {
  const { coin } = props
  const { id, name, fullName, rank, isFavorite, toggleFavorite } = coin

  const icon = useMemo(() => ({
    source: Icon.Star,
    tintColor: isFavorite ? Color.Yellow : Color.SecondaryText,
  }), [isFavorite])

  return (
    <List.Item
      key={id}
      icon={icon}
      title={fullName}
      subtitle={name}
      accessories={[{ text: `#${rank}` }]}
      detail={<Detail coin={coin} />}
      actions={
        <ActionPanel>
          <Action
            icon="favorite.png"
            title={isFavorite ? "Remove From Favorites" : "Add To Favorites"}
            shortcut={{ modifiers: ["cmd"], key: "f" }}
            onAction={toggleFavorite}
          />
        </ActionPanel>
      }
    />
  )
}
