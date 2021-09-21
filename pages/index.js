import Head from "next/head";

export default function Home({ posts }) {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(`http://localhost:8081/api/posts`);
//   const posts = await res.json();
//   return {
//     props: { posts },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    props: { posts },
    revalidate: 20, // build된 파일을 20s이후 새로 build하도록
  };
};
