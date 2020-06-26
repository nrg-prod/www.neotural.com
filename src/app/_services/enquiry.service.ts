import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enquiry } from '../_models/index';

@Injectable()
export class EnquiryService {    
    suburl:string;

    private commonURL = "http://localhost:8095/erp/enquiry/";
	
    constructor(private http: HttpClient) { }

    // Create new Enquiry
    saveEnquiry(enquiry: Enquiry) {
        return this.http.post<Enquiry>(this.commonURL+'saveEnquiry', enquiry);
    }
}
