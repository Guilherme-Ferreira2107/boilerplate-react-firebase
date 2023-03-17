export function formatValues(item: string) {
  if (checkAvariable(item)) {
    const idxStart = item.indexOf("_[", 0);

    if (idxStart > 0) {
      const idxEnd = item.length;
      const t2 = item.substring(idxStart, idxEnd);
      const t3 = item.replaceAll(t2, "");
      const valueFinal = t3;
      return valueFinal;
    }

    const t4 = item;
    return t4;
  }
  return item;
}

export function removePosName(value: string) {
  if (value.includes("_minima")) return value.replaceAll("_minima", "");
  if (value.includes("_media")) return value.replaceAll("_media", "");
  if (value.includes("_maxima")) return value.replaceAll("_maxima", "");
  if (value.includes("_mediana")) return value.replaceAll("_mediana", "");
  if (value.includes("_moda")) return value.replaceAll("_moda", "");
  return value;
}

export function checkAvariable(value: string) {
  return (
    value.includes("_minima_") ||
    value.includes("_media_") ||
    value.includes("_maxima_") ||
    value.includes("_mediana_") ||
    value.includes("_moda_")
  );
}

export function removeBracketContent(str: string) {
  return (
    str
      .replaceAll(/\[.*?\]/g, "")
      // .replaceAll("_por_usuario", "")
      // .replaceAll("_total", "")
      .replaceAll("_minima_", "_minima")
      .replaceAll("_media_", "_media")
      .replaceAll("_maxima_", "_maxima")
      .replaceAll("_mediana_", "_mediana")
      .replaceAll("_moda_", "_moda")
  );
}

export function handleListConstructs(list: string[]) {
  const dataObj = list.map((ele: string) => {
    const newKey = ele
      .replace(ele[0] === "[" ? "[" : "", "")
      .replaceAll(`"`, "")
      .replace(`_total]`, `_total`)
      .replace(`_por_usuario]`, `_por_usuario`);

    const newLabel = ele
      .replaceAll(/\[.*?\]/g, "")
      .replaceAll(`"`, "")
      .replaceAll("__", "_");

    return {
      key: newKey,
      label: newLabel.replace("[", "").replace("]", ""),
    };
  });

  return dataObj;
}

export function recoverNameConstrutoOriginal(name: string, constructs: any) {
  const dataOriginal = constructs.split(', "');

  const checkAvariable = (value: string) =>
    value.includes("_minima_") ||
    value.includes("_media_") ||
    value.includes("_maxima_") ||
    value.includes("_mediana_") ||
    value.includes("_moda_");

  dataOriginal.every((val: any) => {
    if (val.includes(name) && checkAvariable(val)) {
      name = val
        .replaceAll(" ", "")
        .replaceAll(`"`, "")
        .replaceAll("total]", "total")
        .replaceAll("por_usuario]", "por_usuario");

      return false;
    } else if (val.includes(name)) {
      return false;
    }
    return true;
  });

  return name;
}
