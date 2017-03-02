import { UtilifyPage } from './app.po';

describe('utilify App', function() {
  let page: UtilifyPage;

  beforeEach(() => {
    page = new UtilifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
