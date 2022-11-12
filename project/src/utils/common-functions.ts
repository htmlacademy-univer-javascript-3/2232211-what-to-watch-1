// TS2305: Module '"react-router-dom"' has no exported member 'redirect'.
// native implementation
export function redirect(url: string) {
  return new Response('', {
    status: 302,
    headers: {
      Location: url,
    },
  });
}
