export function base64ToFile(base64: string, filename: string): File {
  const arr = base64.split(",");
  const getType = arr[0]?.match(/:(.*?);/);
  const mime = getType !== null ? getType[1] : "application/octet-stream";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
