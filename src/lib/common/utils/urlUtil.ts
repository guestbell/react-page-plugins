export const isSamePageUrl = (urlStr: string) => !isExternalUrl(urlStr);

export const isExternalUrl = (urlStr: string) => {
  try {
    const url = new URL(urlStr); // THROW ON MISSING SCHEME

    // DOES THIS URL ORIGINATE FROM THIS WEBSITE?
    if (url.origin !== new URL(document.URL, document.baseURI).origin) {
      return true; // IS EXTERNAL URL
    }
  } catch (_e) {
    // THROWS WHEN URL DOES NOT HAVE A SCHEME
    try {
      new URL(urlStr, document.baseURI); // THROW AN EXCEPTION IF THE URL IS TRULY MALFORMED IN SOME WAY
    } catch (_e) {}
  }

  return false;
};
