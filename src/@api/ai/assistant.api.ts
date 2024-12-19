//import axios from 'axios'

export default async function api() {
  await new Promise(r => setTimeout(r, 4000))
  return {
    actions: [
      {
        name: "navigate",
        target: "/",
      },
      {
        name: "click",
        target: "new_class",
      },
      {
        name: "write",
        target: "new_class_form_name",
        value: "Class B B B B B B B B B B B ",
      },
      {
        name: "write",
        target: "new_class_form_level",
        value: "4",
      },
    ]
  }
}