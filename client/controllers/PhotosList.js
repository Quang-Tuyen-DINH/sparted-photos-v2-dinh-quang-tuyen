import m from "mithril";
import infinite from "mithril-infinite";
import imagesLoaded from "imagesloaded";
import randomPhotos from "../models/photos";

const photos = (pageNum) => {
  const photos = randomPhotos(pageNum);
  return photos;
};

const item = (data, options, index) => {
  return m("figure", [
    m("img", {
      src: `${data.download_url}`,
      oncreate: ({ dom }) => {
        imagesLoaded(dom, { background: true }, () => {
          dom.classList.add("loaded");
        });
      }
    }),
    m("figcaption", m("a", { href: data.url, target: "_new" }, data.author))
  ]);
};

const processPageData = (content, options) => {
  return m(
    ".photos-page",
    content.map((data, index) => item(data, options, index))
  );
};

export const photosList = () => {
  return {
    view: () => {
      return m(infinite, {
        pageData: photos,
        processPageData,
        autoSize: true
      });
    }
  };
};
