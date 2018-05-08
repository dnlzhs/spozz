import { SpozzPage } from './app.po';

describe('spozz App', () => {
  let page: SpozzPage;

  beforeEach(() => {
    page = new SpozzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
