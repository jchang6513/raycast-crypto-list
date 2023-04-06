import { List } from "@raycast/api";
import { useSymbolList } from "./useSymbolList";
import { formatNumber } from "./utils";

export default function Command() {
  const list = useSymbolList()

  return (
    <List isShowingDetail>
      {list.map(({ symbol, price, logo, marketCap, rank, dayChange, volume }) => (
        <List.Item
          key={symbol}
          icon="list-icon.png"
          title={symbol}
          accessories={[{ text: `#${rank}` }]}
          detail={
            <List.Item.Detail
              metadata={
                <List.Item.Detail.Metadata>
                  <List.Item.Detail.Metadata.Label title={symbol} />
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
          }
        />
      ))}
    </List>
  );
}
