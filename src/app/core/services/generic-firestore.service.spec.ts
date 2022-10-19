import { TestBed } from "@angular/core/testing";

import { GenericFirestoreService } from "./generic-firestore.service";

describe("GenericFirestoreService", () => {
  let service: GenericFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericFirestoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
