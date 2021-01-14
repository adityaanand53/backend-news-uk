const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const assert = chai.assert;
chai.use(chaiHttp);
const server = require("../server");

describe("News App", () => {
  describe("/GET news headlines", () => {
    it("it should GET news headlines", (done) => {
      chai
        .request(server)
        .get("/api/headlines")
        .end((err, res) => {
          res.should.have.status(200);
          assert.equal(res.body.data.status, "ok");
          assert.typeOf(res.body.data.articles, "array");
          done();
        });
    });
  });

  describe("/GET everything news", () => {
    it("it should GET news from everything", (done) => {
      chai
        .request(server)
        .get("/api/news?q=vogue")
        .end((err, res) => {
          res.should.have.status(200);
          assert.equal(res.body.data.status, "ok");
          assert.typeOf(res.body.data.articles, "array");
          done();
        });
    });
  });
});
