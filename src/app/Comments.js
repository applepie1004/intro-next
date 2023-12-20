import { CreateCommetns } from "./CreateComments";
export async function Comments() {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + "comments", {
    cache: "no-store",
  });
  const comments = await resp.json();
  return (
    <>
      <CreateCommetns />

      <p>Comments</p>
      {comments.map((c) => {
        return (
          <li key={c.id}>
            {c.name} : {c.body}
          </li>
        );
      })}
    </>
  );
}
