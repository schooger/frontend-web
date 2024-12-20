
export default async function click(id: string) {
  let n = 0
  while (true) {
    n++
    if (n > 12) break

    const $ = document.getElementById(id)
    if ($) {
      $.click()
      break
    }

    console.log('no element exists, retrying...', id)
    await new Promise((r) => setTimeout(r, 1000))
  }
}