export interface VehicleModel {
    code: string;
    source: number;
    data: Map<any, any>;
}
export interface Vehicle {
    id: string;
    vin: string;
    license_no: string;
    engine_no: string;
    register_date: Date;
    model: VehicleModel;
    is_transfer: boolean;
    receipt_no: string;
    receipt_date: Date;
    last_insurance_company: string;
    insurance_due_date: Date;
    accident_status: number;
    ncd: Map<[Date, Date], number>;
}
