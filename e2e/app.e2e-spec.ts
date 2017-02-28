import { Tchvu3ProjPage } from './app.po';

describe('tchvu3-proj App', function() {
  let page: Tchvu3ProjPage;

  beforeEach(() => {
    page = new Tchvu3ProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
