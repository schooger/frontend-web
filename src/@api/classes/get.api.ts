//import axios from 'axios'

export async function find_one({ class_id }: { class_id: number }) {
  await new Promise(r => setTimeout(r, 2000))
  return {
    id: class_id,
    class_id: 1,
    class_name: "Class A",
    planet_id: 6,
  }
}