import { MeanPage } from './app.po';

describe('mean App', () => {
  let page: MeanPage;

  beforeEach(() => {
    page = new MeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
