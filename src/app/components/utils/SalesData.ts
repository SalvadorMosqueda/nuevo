export interface Venta {
  id: number;
  fecha: string;
  producto: string;
  cantidad: number;
  ingreso: number;
}


export const ventas: Venta[] = [
  {
    id: 1,
    fecha: '2025-01-10',
    producto: 'Motor',
    cantidad: 120,
    ingreso: 15000
  },
  {
    id: 2,
    fecha: '2025-02-15',
    producto: 'suspesion',
    cantidad: 150,
    ingreso: 18000
  },
  {
    id: 3,
    fecha: '2025-03-20',
    producto: 'frenos',
    cantidad: 200,
    ingreso: 22000
  },
  {
    id: 4,
    fecha: '2025-04-25',
    producto: 'flechas',
    cantidad: 180,
    ingreso: 20000
  },
  {
    id: 5,
    fecha: '2025-05-30',
    producto: 'cofres',
    cantidad: 220,
    ingreso: 25000
  }
];

