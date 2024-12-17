//import axios from 'axios'

export default async function api(){
  await new Promise(r=>setTimeout(r, 8000))
  return 'assistance.api'
}