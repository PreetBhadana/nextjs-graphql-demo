export default async function SSRPage() {
  const currentTime = new Date().toLocaleString();

  // This is demo of SSR
  // it will render the page on server side
  // and send the html to client side
  // and this is recommended for production
  // A page will remain SSR if it is not using client side features
  // like useState, useEffect, etc
  // Or if it is not using any client side API calls
  // like fetch, axios, etc
  // and Not use cache

  return (
    <div>
      <h1>Server-Side Rendered Page (App Router)</h1>
      <p>Time: {currentTime}</p>
    </div>
  );
}