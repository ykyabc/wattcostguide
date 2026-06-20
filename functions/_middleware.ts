export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  if (url.hostname === "www.wattcostguide.com") {
    url.hostname = "wattcostguide.com";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
