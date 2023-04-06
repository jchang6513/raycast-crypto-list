import { List } from "@raycast/api"
import { Coin } from "../types"
import { formatNumber } from "../utils"

type Props = { coin: Coin }

export const Detail = (props: Props) => {
  const { coin } = props
  const { fullName, price, marketCap, dayChange, volume } = coin

  return (
    <List.Item.Detail
      metadata={
        <List.Item.Detail.Metadata>
          <List.Item.Detail.Metadata.Label title={fullName} />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label
            title="Last Price"
            text={formatNumber(price, 'currency')}
          />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label
            title="24h Change"
            text={String(dayChange)}
          />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label
            title="24h Volume"
            text={`${formatNumber(volume / 1_000_000)} M`}
          />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label
            title="Market Cap"
            text={`${formatNumber(marketCap / 1_000_000, 'currency')} M`}
          />
        </List.Item.Detail.Metadata>
      }
    />
  )
}
