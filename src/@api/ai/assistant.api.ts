//import axios from 'axios'

export default async function api() {
  await new Promise(r => setTimeout(r, 8000))
  return {
    actions: [
      {
        name: "navigate",
        page: "classes",
      },
      {
        name: "open_form",
        form: "new_class",
      },
      {
        name: "fill_form",
        data: {
          "name": "Class A",
          "level": 4
        }
      },
      {
        name: "fill_form",
        data: {
          "name": "Class B",
          "level": 4
        }
      }
    ]
  }
}