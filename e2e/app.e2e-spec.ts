import { FloodlistPage } from './app.po';

describe('floodlist App', function() {
  let page: FloodlistPage;

  beforeEach(() => {
    page = new FloodlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
