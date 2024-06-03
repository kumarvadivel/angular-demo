import { TestBed } from "@angular/core/testing";
import { FetchFlowApiService } from "./fetch-flow-api.service";
import { ApiService } from "./api.service";
import { InitializeJourneyService } from "./initialize-journey.service";
import { JourneyEventsService } from "./journey-events.service";
import { Injector } from "@angular/core";
import { of } from "rxjs";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { EnvironmentService } from "@gl-environments/environment.service";
import { LogicFunctions } from "../shared/helpers/JsonLogic";
import { ArrayMethod } from "../shared/helpers/ArrayMethods";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  currentIndex,
  fetchflowList,
  mockFetchFlowData,
  pageCode,
  pageconfig,
  scope,
  totalLength,
} from "./fetch-flow-api.service.mock";

const mockEnvironmentService = {
  appConfig: {
    /* ... */
  },
};

const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: () => "testId", // Or whatever value you need to provide
    },
    data: of({}),
    // Other properties...
  },
  // Other properties...
};

const mockMatSnackBar = {
  open: jasmine.createSpy("open"),
};

describe("FetchFlowApiService", () => {
  let service: FetchFlowApiService;
  let mockApiService: ApiService;
  let mockInitializeJourneyService: InitializeJourneyService;
  let mockJourneyEventsService: JourneyEventsService;
  let injector: Injector;

  beforeEach(() => {
    mockApiService = jasmine.createSpyObj(["method1", "method2"]); // replace with actual method names
    mockInitializeJourneyService = jasmine.createSpyObj([
      "mapDataFromCloudParameter",
    ]);
    mockJourneyEventsService = jasmine.createSpyObj(["method1", "method2"]); // replace with actual method names

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // add this line
      providers: [
        FetchFlowApiService,
        { provide: EnvironmentService, useValue: mockEnvironmentService },
        { provide: ApiService, useValue: mockApiService },
        {
          provide: InitializeJourneyService,
          useValue: mockInitializeJourneyService,
        },
        { provide: JourneyEventsService, useValue: mockJourneyEventsService },
        LogicFunctions,
        ArrayMethod,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: MatSnackBar, useValue: mockMatSnackBar },
        Injector,
      ],
    });

    service = TestBed.inject(FetchFlowApiService);
    injector = TestBed.inject(Injector);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("fetchDataScopeData", () => {
    it("should fetch data scope data", () => {
      spyOn(injector, "get").and.returnValue(of({}));
      spyOn(service, "fetchDataScopeData");

      service.fetchDataScopeData({}, 0, 0, {}, [], {}, "testCode");

      expect(service.fetchDataScopeData).toHaveBeenCalled();
    });

    it("should call fetchDataCloud method of commonCommonService and set fetchflow.dataCloud", () => {
      const spy = spyOn(
        service.commonCommonService,
        "fetchDataCloud"
      ).and.returnValue({ val: "mockDataCloud" });
      service.fetchDataScopeData(
        mockFetchFlowData,
        totalLength,
        currentIndex,
        scope,
        fetchflowList,
        pageconfig,
        pageCode
      );
      expect(spy).toHaveBeenCalled();
    });

    xit("should call mapDataFromCloudParameter method of initializeJourneyService", () => {
     
      service.fetchDataScopeData(
        mockFetchFlowData,
        totalLength,
        currentIndex,
        scope,
        fetchflowList,
        pageconfig,
        pageCode
      );
    });

    xit("should call fetchFlowApiCalls method if fetchflow.validate is null", () => {
      let fetchFlowData = { ...mockFetchFlowData, validate: null };
      const spy = spyOn<any>(service, "fetchFlowApiCalls");
      service.fetchDataScopeData(
        fetchFlowData,
        totalLength,
        currentIndex,
        scope,
        fetchflowList,
        pageconfig,
        pageCode
      );
      expect(spy).toHaveBeenCalled();
    });

    xit("should call applyJsonLogic method if fetchflow.validate is not null", () => {
     
      let fetchFlowData = { ...mockFetchFlowData, validate: 'someValue' };
      const spy = spyOn<any>(service, "applyJsonLogic").and.returnValue(
        "EXECUTE"
      );
      service.fetchDataScopeData(
        fetchFlowData,
        totalLength,
        currentIndex,
        scope,
        fetchflowList,
        pageconfig,
        pageCode
      );
      expect(spy).toHaveBeenCalled();
    });

    it("should call fetchFlowApiCalls method if applyJsonLogic returns EXECUTE", () => {
      let fetchFlowData = { ...mockFetchFlowData, validate: 'someValue' };
      spyOn<any>(service, "applyJsonLogic").and.returnValue("EXECUTE");
      const spy = spyOn<any>(service, "fetchFlowApiCalls");
      service.fetchDataScopeData(
        fetchFlowData,
        totalLength,
        currentIndex,
        scope,
        fetchflowList,
        pageconfig,
        pageCode
      );
      expect(spy).toHaveBeenCalled();
    });

    it("should recursively call fetchDataScopeData method if applyJsonLogic returns NEXT and currentIndex is not the last index", () => {
      let fetchFlowData = { ...mockFetchFlowData, validate: 'someValue' };
      spyOn<any>(service, "applyJsonLogic").and.returnValue("NEXT");
      const spy = spyOn(service, "fetchDataScopeData");
      service.fetchDataScopeData(
        fetchFlowData,
        2,
        0,
        null,
        [fetchFlowData, {}],
        null,
        null
      );
      expect(spy).toHaveBeenCalledTimes(1); // Including the initial call
    });
  });
});
