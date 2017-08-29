import { AngularSchedulePage } from './app.po';

describe('angular-schedule App', () => {
  let page: AngularSchedulePage;

  beforeEach(() => {
    page = new AngularSchedulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
