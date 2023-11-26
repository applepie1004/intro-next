"use client";

import { useRouter } from "next/navigation";

export function CreateCommetns() {
  const router = useRouter();

  return (
    <>
      <form
        className="mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const body = e.target.body.value;

          if (!name || !body) {
            return;
          }
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, body }),
          };

          fetch(`http://localhost:9999/comments`, options)
            .then((res) => res.json())
            .then((result) => {
              e.target.name.value = "";
              e.target.body.value = "";
              router.refresh();
            });
        }}
      >
        <div className="flex items-top">
          <label htmlFor="name" className="w-20">
            name :{" "}
          </label>
          <input
            className="border-2 border-solid rounded-xl w-60 p-2"
            type="text"
            id="name"
            name="name"
          ></input>
        </div>
        <p></p>
        <div className="flex items-top">
          <label htmlFor="body" className="w-20">
            comment :{" "}
          </label>
          <textarea
            className="border-2 border-solid rounded-xl w-60 p-2"
            name="body"
            id="body"
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex w-80 border-solid border-2 rounded-lg justify-center mt-2"
        >
          등록
        </button>
      </form>
    </>
  );
}
