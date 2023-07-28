export const SHIFTING_TYPES_CONSTANTS = [
  { key: 'local', value: 'LOCAL' },
  { key: 'domestic', value: 'DOMESTIC' }
];

export const MODULES = [
  { key: 'quotation', value: 'QUOTATION' },
  { key: 'invoice', value: 'INVOICE' },
  { key: 'carCondition', value: 'CAR CONDITION' },
  { key: 'moneyReciept', value: 'MONEY RECIEPT' },
  { key: 'bilty', value: 'BILTY' }
];

export const SUBSCRIPTION_PLANS = [
  { key: 'basicPlan', value: 'Basic Plan' },
  { key: 'proPlan', value: 'Pro Plan' },
  { key: 'proPlusPlan', value: 'Pro Plus Plan' }
];
export const MENU_ITENS = [
  {
    label: 'Enquiry',
    index: 0,
    nestedItems: [
      { label: 'Add Enquiry', index: 1, path: '/erp/add-enquiry' },
      { label: 'List Enquiry', index: 2, path: '/erp/list-enquiry' }
    ]
  },
  {
    label: 'Orders',
    index: 3,
    nestedItems: [
      { label: 'Add Order', index: 4 },
      { label: 'List Order', index: 5 }
    ]
  }
];
