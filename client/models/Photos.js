import m from "mithril";

const randomPhotos = (pageNum) => {
  return m
    .request({
      method: "GET",
      dataType: "jsonp",
      url: `https://picsum.photos/v2/list?page=${pageNum}&limit=100`
    })
    .then((result) => {
      let photosLength = result.length;
      let preBuffer = new Array();
      for (let a = 0; a < photosLength; a++) {
        preBuffer.push(result[a]);
      }
      for (let i = photosLength - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [preBuffer[i], preBuffer[j]] = [preBuffer[j], preBuffer[i]];
      }

      //For testing array of randomly placed photos
      // function onlyUnique(value, index, self) {
      //   return self.indexOf(value) === index;
      // }
      // let unique = preBuffer.filter(onlyUnique);
      // console.log(unique);
      return Promise.resolve(preBuffer);
    });
};



export default randomPhotos;
