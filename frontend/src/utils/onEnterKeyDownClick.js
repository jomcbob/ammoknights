export default function onEnterKeyDownClick(e) {
  if (e.key === "Enter") {
    e.target.click()
  }
}