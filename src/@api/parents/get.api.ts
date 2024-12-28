//import axios from 'axios'

export async function find_all() {
  return [
    {
      class_id: 1,
      class_name: "Class A",
      planet_id: 1,
    },
    {
      class_id: 2,
      class_name: "Class A",
      planet_id: 2,
    },
    {
      class_id: 3,
      class_name: "Class A",
      planet_id: 3,
    },
    {
      class_id: 4,
      class_name: "Class A",
      planet_id: 4,
    },
    {
      class_id: 5,
      class_name: "Class A",
      planet_id: 5,
    },
    {
      class_id: 6,
      class_name: "Class A",
      planet_id: 6,
    },
  ]
}

export async function find_one({ class_id }: { class_id: number }) {
  return {
    id: class_id,
    class_id: 1,
    class_name: "Class A",
    planet_id: 5,
  }
}