import { Selector } from "testcafe";
import { should } from "chai";

should();

fixture`Sandbox`.page`https://www.google.com`;

test("should be on Sandbox", async (t) => {
  const title = await Selector("title").innerText;

  title.should.eql("Google");
});
