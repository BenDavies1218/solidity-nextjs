export default function LoginFormSkeleton() {
  return (
    <form className="flex flex-col rounded-md bg-gray-500 p-2">
      <label>Username</label>
      <input
        className="rounded border-2 border-white bg-transparent"
        type="text"
      />
      <label>Password</label>
      <input type="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
