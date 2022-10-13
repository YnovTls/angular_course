import { TestBed } from "@angular/core/testing";

import { GetMoviesResolver } from "./get-movies.resolver";

describe("GetMoviesResolver", () => {
  let resolver: GetMoviesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetMoviesResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });
});
