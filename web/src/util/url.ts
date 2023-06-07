

export const filterXSS = function (str: string): string {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
};

export const getUrlParam = function (p: string, url?: string): string {
  const u = url || location.href;
  const reg = new RegExp(`[?&#]${p}=([^&#]+)`, 'gi');

  const matches = u.match(reg);
  let strArr;
  if (matches && matches.length > 0) {
    strArr = matches[matches.length - 1].split('=');
    if (strArr && strArr.length > 1) {
      // 过滤XSS字符
      return filterXSS(strArr[1]);
    }
    return '';
  }
  return '';
};
