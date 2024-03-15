import type{ Row } from "../type";

export type Action = {type: "rows/load"; payload: Row[]}|{type: "rows/add"; payload: Row[]};