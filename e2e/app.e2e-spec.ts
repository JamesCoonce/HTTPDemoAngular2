import { HTTPDemoAngular2Page } from './app.po';

describe('httpdemo-angular2 App', function() {
  let page: HTTPDemoAngular2Page;

  beforeEach(() => {
    page = new HTTPDemoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
