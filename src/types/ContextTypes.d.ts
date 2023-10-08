import React from "react";

export type IShape = {
  type: string;
  id: number;
  data: any;
}

type IFavContext = [IShape, React.Dispatch<React.SetStateAction<IShape>>];