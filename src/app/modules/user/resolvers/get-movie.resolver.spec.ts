import { TestBed } from "@angular/core/testing";

import { GetMovieResolver } from "./get-movie.resolver";

describe("GetMovieResolver", () => {
  let resolver: GetMovieResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetMovieResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });
});
