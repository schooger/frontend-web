import wait from "@ai/wait.ai";

async function typeLikeHuman($: HTMLInputElement, text: string, delayTime: number) {
  if (!$) return;

  let index = 0;
  while (index < text.length) {
    $.value = text.slice(0, index + 1);
    index++;
    await wait(delayTime);
  }
}

// change to obj instead array!!!!!!!!!!!!!!!!!!!!
export default async function write(id: string, value: any) {
  let n = 0
  while (true) {
    n++
    if (n > 12) break

    const $ = document.getElementById(id) as HTMLInputElement
    if ($) {
      await typeLikeHuman($, value, 10);
      break
    }

    console.log('no element exists, retrying...')
    await new Promise((r) => setTimeout(r, 1000))
  }
}