export default async function ServerAction() {
  //3. 서버기능만들었음
  async function handleSubmit(formData) {
    "use server";
    console.log(formData);
    console.log(formData.get("username"));
  }

  return (
    <form action={handleSubmit} className="grid grid-cols-5 gap-4">
      <label htmlFor="username" className="p-2 text-center">
        username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        className="border p-2 rounded-md col-span-1"
      />
      <label htmlFor="password" className="p-2 text-center">
        password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="border p-2 rounded-md col-span-1"
      />
      <button
        type="submit"
        className="p-2 border rounded-md bg-blue-500 text-white"
      >
        Submit
      </button>
    </form>
  );
}
