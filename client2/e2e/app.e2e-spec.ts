import { TemplaterPage } from './app.po';

describe('templater App', () => {
  let page: TemplaterPage;

  beforeEach(() => {
    page = new TemplaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
