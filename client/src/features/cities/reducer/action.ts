import type{ City } from "../type";

export type Action = {type: "cities/load"; payload: City[]}