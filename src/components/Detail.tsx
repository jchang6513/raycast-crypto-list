import { List } from "@raycast/api"
import { Coin } from "../types"
import { formatNumber, getPriceColor, getSign } from "../utils"

type Props = { coin: Coin }

export const Detail = (props: Props) => {
  const { coin } = props
  const { fullName, symbol, price, highPrice, lowPrice, marketCap, dayChange, volume } = coin

  return (
    <List.Item.Detail
      metadata={
        <List.Item.Detail.Metadata>
          <List.Item.Detail.Metadata.Label title={`${fullName} (${symbol})`} />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label
            title="Last Price"
            text={formatNumber(price, { style: 'currency' })}
          />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label
            title="24h Change"
            text={{
              color: getPriceColor(dayChange),
              value: `${getSign(dayChange)}${String(formatNumber(Math.abs(dayChange), { precision: 2 }))}%`
            }}
          />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label
            title="High Price"
            text={formatNumber(highPrice, { style: 'currency' })}
          />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label
            title="Low Price"
            text={formatNumber(lowPrice, { style: 'currency' })}
          />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label
            title="24h Volume"
            text={`${formatNumber(volume / 1_000_000)} M`}
          />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label
            title="Market Cap"
            text={`${formatNumber(marketCap / 1_000_000, { style: 'currency' })} M`}
          />
        </List.Item.Detail.Metadata>
      }
    />
  )
}
