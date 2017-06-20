import { Foc.Dev.Osynlig.NzPage } from './app.po';

describe('foc.dev.osynlig.nz App', () => {
  let page: Foc.Dev.Osynlig.NzPage;

  beforeEach(() => {
    page = new Foc.Dev.Osynlig.NzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
