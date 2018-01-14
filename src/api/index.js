
export const apiGet = (url) => () => fetch(url).then(v => v.json());