import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpController: HttpTestingController;
  let API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UsersService]
    });
    service = TestBed.inject(UsersService);
    httpController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from API',()=>{
    const mockData = [{id:1}];
    service.getUsers().subscribe(data=>{
      expect(data).toEqual(mockData);
    });

    const req = httpController.expectOne(API_ENDPOINT);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  })
});
