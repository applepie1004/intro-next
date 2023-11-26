import { Control } from "./Control";
import { Comments } from "./Comments";

export default async function Home() {
  return (
    <>
      <h1 className="text-xl mb-5">시작하는 법</h1>

      <p className="mt-2">npx create-next-app [폴더명]</p>
      <p className="mt-2">npm run dev</p>

      <Control />

      <div className="mt-5">
        <Comments />
      </div>
    </>
  );
}
