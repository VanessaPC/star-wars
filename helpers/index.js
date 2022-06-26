export const truncate = (str, len) =>
  str.substring(0, (str + " ").lastIndexOf(" ", len));

export const descendentSort = (arr) =>
  arr.sort(function (a, b) {
    return Date.parse(b.data?.release_date) - Date.parse(a.data?.release_date);
  });
