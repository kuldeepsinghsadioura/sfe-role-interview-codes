import { FixedSizeList as List } from "react-window";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

export default function VirtualizedList() {
  return (
    <List height={400} itemCount={items.length} itemSize={35} width="100%">
      {({ index, style }) => <div style={style}>{items[index]}</div>}
    </List>
  );
}
