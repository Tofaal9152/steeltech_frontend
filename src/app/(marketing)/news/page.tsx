async function getData() {
await new Promise((resolve) => setTimeout(resolve, 30000)); // 3 sec delay
return { message: "Hello" };
}
const page =async () => {
  const data = await getData();
  return <div>Enter</div>;
};

export default page;
