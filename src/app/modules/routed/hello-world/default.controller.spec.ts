import { Injector } from '@holu/core';

import { RequestScopedController } from './request-scoped.controller.js';
import { SomeService } from './some.service.js';

describe('InjScopedController', () => {
  let requestScopedController: RequestScopedController;

  beforeEach(() => {
    const injector = Injector.resolveAndCreate([
      RequestScopedController,
    ]);

    requestScopedController = injector.get(RequestScopedController);
  });

  it('should say "Hello World!"', () => {
    const someService = new SomeService();
    expect(() => requestScopedController.tellHello(someService)).not.toThrow();
    expect(requestScopedController.tellHello(someService)).toBe('Hello World!');
  });

  it('should send post body back', () => {
    const postBody = {};
    expect(() => requestScopedController.postHello(postBody)).not.toThrow();
    expect(requestScopedController.postHello(postBody)).toBe(postBody);
  });

  it('should throw an error', () => {
    expect(() => requestScopedController.thrwoError()).toThrow('Here some error occurred');
  });
});
