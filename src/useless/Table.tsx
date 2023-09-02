import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import styled from "styled-components";

export const Table = () => {
  const [data, setData] = useState<photoType[]>([]);

  useEffect(() => {
    axios
      .get<AxiosResponse>("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const Row = ({ index, style }) => (
    <div style={style}>
      <Box>
        <img src={data[index]?.thumbnailUrl} alt={`Thumbnail ${index}`} />
        <p>{data[index]?.title}</p>
      </Box>
    </div>
  );

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={1000}
          itemSize={35}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

type photoType = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

const Box = styled.div`
  display: flex;
  gap: 2rem;
`;

const Root = styled.div`
  margin: 16px;
`;
