import { useArray } from "./useArray"

export function ArrayFunction() {
  const INITIAL_ARRAY = [1, 2, 3]
  const { array, set, push, replace } = useArray(INITIAL_ARRAY)

  return (
    <>
      <div>{array.join(", ")}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          alignItems: "flex-start",
          marginTop: "1rem",
        }}
      >
        <button onClick={() => set([4, 5, 6])}>Set to [4, 5, 6]</button>
        <button onClick={() => push(4)}>Push 4</button>
        <button onClick={() => replace(1, 9)}>
          Replace the second element with 9
        </button>
      </div>
    </>
  )
}
