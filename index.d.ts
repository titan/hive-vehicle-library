export interface VehicleModel {
    code: string;
    source: number;
    vehicle_code: string;
    vehicle_name: string;
    brand_name: string;
    family_name: string;
    body_type?: string;
    engine_desc: string;
    gearbox_name: string;
    year_pattern: string;
    group_name?: string;
    cfg_level: string;
    purchase_price: string;
    purchase_price_tax: string;
    seat: string;
    effluent_standard: string;
    pl: string;
    driven_type: string;
}
export interface Vehicle {
    id: string;
    vin: string;
    license_no: string;
    engine_no: string;
    register_date: Date;
    model?: VehicleModel;
    is_transfer: boolean;
    receipt_no: string;
    receipt_date: Date;
    last_insurance_company: string;
    insurance_due_date: Date;
    accident_status: number;
    ncd?: Map<[Date, Date], number>;
}
