async function getData() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  return data;
}

const page = async () => {
  const data = await getData();
  return <div>this is team page</div>;
};

export default page;
