import Image from "next/image";

export default async function Home() {

  
const res = await fetch(
	`https://torchproxies.com/wp-json/wp/v2/posts`
);
const data = await res.json();
console.log(data);

  return (
    <div>
      Blog
    </div>
  );
}
