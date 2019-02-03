import React from "react";
import App from "./App";
import * as api from "./api";
import { rejects } from "assert";
const fs = require("fs");
const path = require("path");

//function to re-seed database/json
const reSeedDatbase = () => {
  fs.copyFileSync(
    path.resolve(__dirname, "../data/originalDB.json"),
    path.resolve(__dirname, "../data/db.json"),

    err => {
      if (err) console.log(err);
    }
  );
  console.log("reseeded");
  return "reseeded";
};

//after all tests re-seed database

describe("React Tests", () => {
 
  it("renders without crashing", () => {});
});

describe("function tests", function() {
  beforeAll(function(done) {
    reSeedDatbase();
    new Promise(function(resolve) {
      setTimeout(resolve, 100);
    }).then(function() {
      
      done();
    });
  }, 20000);

  describe("api tests", function() {
  

    it("retrieves 9 cards from api fetch", async () => {
      return api.fetchCards().then(data => {
        expect(Array.isArray(data)).toBe(true);
        expect(data).toHaveLength(9);
        expect(data[0].is_liked).toBe(true);
      });
    });

    it("retrieves 3 cards from api fetch when given range", async () => {
      return api.fetchCards(2, 5).then(data => {
        expect(Array.isArray(data)).toBe(true);
        expect(data).toHaveLength(3);
      });
    });

    it("patch like", async () => {
          const result = await api.likeCard(1, false);
      
          expect(result.is_liked).toBe(false);
        });
  });
});
