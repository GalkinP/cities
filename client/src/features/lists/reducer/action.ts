import type{ List } from "../type";

export type Action = {type: "lists/load"; payload: List[]}|{type: "lists/add"; payload: List}|{type: "lists/remove"; payload: number}