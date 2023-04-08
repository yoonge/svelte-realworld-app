/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }) {
  const jwt = event.cookies.get('jwt')
  // JSON.parse(atob(jwt)) // atob is deprecated
  event.locals.user = jwt ? JSON.parse(Buffer.from(jwt, 'base64')) : null

  return resolve(event)
}
