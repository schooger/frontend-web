export default async function api(){
  await new Promise(r=>setTimeout(r, 2000))
  return 'sign-out'
}