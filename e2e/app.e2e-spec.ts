import { BazerantPage } from './app.po';

describe('bazerant App', function() {
  let page: BazerantPage;

  beforeEach(() => {
    page = new BazerantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
