require("dotenv").config();
const http = require("http");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const FormData = require("form-data");
const mm = require("music-metadata");
const util = require("util");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  //console.log(returnData);
  const host = "https://audiotag.info/api";
  const options = {
    action: "identify",
    apikey: process.env.AUDIOTAG_KEY,
  };

  const file_path = path.join(__dirname, "source.mp3");

  mm.parseFile("./source.mp3")
    .then((metadata) => {
      console.log(util.inspect(metadata, { showHidden: false, depth: null }));
    })
    .catch((err) => {
      console.error(err.message);
    });

  // const file = fs.readFileSync("./source.mp3");

  // let readStream = Readable.from(file).read();

  // axios
  //   .post(host, form_data, {
  //     params: options,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //   .then((resp) => {
  //     console.log(resp);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  //const stream = Buffer.from(data).toString("base64");
  // axios
  //   .post(host, fs.createReadStream(file), {
  //     params: options,
  //     headers: {
  //       "Content-Type": "audio/mp3",
  //     },
  //   })
  //   .then((resp) => {
  //     console.log("resp", resp);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
