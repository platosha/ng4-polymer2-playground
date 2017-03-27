import { Ng4Polymer2PlaygroundPage } from './app.po';

describe('ng4-polymer2-playground App', () => {
  let page: Ng4Polymer2PlaygroundPage;

  beforeEach(() => {
    page = new Ng4Polymer2PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
