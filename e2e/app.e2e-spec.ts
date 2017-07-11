import { App4Page } from './app.po';

describe('app4 App', () => {
  let page: App4Page;

  beforeEach(() => {
    page = new App4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
