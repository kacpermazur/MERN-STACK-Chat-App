const expect = require("chai").expect;

process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const Message = require("../../../models/message.model");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../server");
const should = chai.should();

chai.use(chaiHttp);

describe("/GET message", () => {
  it("Send a Message to the DB", done => {
    chai
      .request(server)
      .get("/messages")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a("object");
        done();
      });
  });
});
