export function getHostname(url) {
  const wURL = new URL(url)
  return wURL.hostname;
}