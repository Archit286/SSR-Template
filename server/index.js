import express from "express";
import cors from "cors";
import path from "path";
import { readFile } from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../src/App";

const app = express();
app.use(cors());
app.use(express.static("build"));

app.get("*", (req, res) => {
  readFile(path.resolve("./build/public/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Cannot find HTML file");
    }
    const context = {};
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    const html = data.replace(
      '<div id="app"></div>',
      `<div id="app">${markup}</div>`
    );
    return res.send(html);
  });
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
