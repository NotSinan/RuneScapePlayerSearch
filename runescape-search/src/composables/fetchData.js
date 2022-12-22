export async function fetchData() {
  const data = await fetch("https://dummyjson.com/quotes/random").then(
    (response) => response.json()
  );

  return data;
}
