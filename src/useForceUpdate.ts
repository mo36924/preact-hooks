import { useReducer } from "preact/hooks";

const reducer = (x: number) => x + 1;

export const useForceUpdate = (): (() => void) => useReducer<number, void>(reducer, 0)[1] as any;
