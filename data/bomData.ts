
import type { BomItem } from '../types';

export const bomData: BomItem[] = [
  // Electronics
  { category: 'Electronics', part: 'Host MCU (STM32L4A6VGT6)', qty: 1, unitPrice: 7, unitPrice1k: 6, total20: 140, total200: 1400, total1k: 6000 },
  { category: 'Electronics', part: 'OLED Display (128x64p)', qty: 1, unitPrice: 26, unitPrice1k: 24, total20: 520, total200: 5200, total1k: 24000, reference: 'https://www.displayvisions.us/fileadmin/eng/pdf/grafik/oledm128-6e.pdf' },
  { category: 'Electronics', part: 'Bluetooth MCU (STM32WB55CC)', qty: 1, unitPrice: 3.5, unitPrice1k: 3.2, total20: 70, total200: 700, total1k: 3200 },
  { category: 'Electronics', part: 'Power MOSFET', qty: 1, unitPrice: 5, unitPrice1k: 5, total20: 100, total200: 1000, total1k: 5000 },
  { category: 'Electronics', part: 'Connector 14p Molex', qty: 1, unitPrice: 3, unitPrice1k: 3, total20: 60, total200: 600, total1k: 3000, reference: 'https://www.molex.com/en-us/products/part-detail/0430451402' },
  { category: 'Electronics', part: 'Receptacle 14p Molex', qty: 1, unitPrice: 0.5, unitPrice1k: 0.4, total20: 10, total200: 100, total1k: 400 },
  { category: 'Electronics', part: 'Receptacle Retainer', qty: 2, unitPrice: 0.2, unitPrice1k: 0.15, total20: 8, total200: 80, total1k: 300 },
  { category: 'Electronics', part: 'TACT SWITCH', qty: 4, unitPrice: 0.3, unitPrice1k: 0.15, total20: 24, total200: 240, total1k: 600 },
  { category: 'Electronics', part: 'Passives & Misc small parts', qty: 1, unitPrice: 8, unitPrice1k: 6, total20: 160, total200: 1600, total1k: 6000 },
  { category: 'Electronics', part: 'NFC Tag', qty: 1, unitPrice: 0.7, unitPrice1k: 0.5, total20: 14, total200: 140, total1k: 500, reference: 'https://www.st.com/en/nfc/m24sr02-y.html#sample-buy' },
  { category: 'Electronics', part: 'Volt & current monitor', qty: 1, unitPrice: 2.1, unitPrice1k: 1.5, total20: 42, total200: 420, total1k: 1500 },
  { category: 'Electronics', part: 'CR2032 holder', qty: 1, unitPrice: 1.2, unitPrice1k: 1, total20: 24, total200: 240, total1k: 1000 },

  // PCB & Assembly
  { category: 'PCB & Assembly', part: 'PCB 4L 2oz 80x80 mm ENIG', qty: 1, unitPrice: 2, unitPrice1k: 2, total20: 40, total200: 400, total1k: 2000 },
  { category: 'PCB & Assembly', part: 'PCBA assembly China', qty: 1, unitPrice: 20, unitPrice1k: 18, total20: 500, total200: 4000, total1k: 18000 },

  // Custom Silicone
  { category: 'Custom Silicone', part: 'Vaccum molding 3 part', qty: 1, unitPrice: 20, total20: 400, total200: null, total1k: null, reference: 'https://www.youtube.com/watch?v=koH594LR6Ok' },
  { category: 'Custom Silicone', part: 'Vaccum part top', qty: 1, unitPrice: 20, total20: 400, total200: null, total1k: null },
  { category: 'Custom Silicone', part: 'Vaccum part bottom', qty: 1, unitPrice: 20, total20: 400, total200: null, total1k: null },
  { category: 'Custom Silicone', part: 'Vaccum part holder', qty: 1, unitPrice: 20, total20: 400, total200: null, total1k: null },

  // Custom Tooling & Housing
  { category: 'Tooling', part: 'Steel 3D mold 3 part', qty: 1, unitPrice: 1, unitPrice1k: 1, total20: null, total200: 7000, total1k: 7000, reference: 'https://www.hlhprototypes.com/' },
  { category: 'Custom Housing', part: 'Housing element: top', qty: 1, unitPrice: 3, unitPrice1k: 1.5, total20: null, total200: 600, total1k: 1500 },
  { category: 'Custom Housing', part: 'Housing element: bottom', qty: 1, unitPrice: 3, unitPrice1k: 1.5, total20: null, total200: 600, total1k: 1500 },
  { category: 'Custom Housing', part: 'Housing element: holder', qty: 1, unitPrice: 2, unitPrice1k: 1, total20: null, total200: 400, total1k: 1000 },

  // Other
  { category: 'Other', part: 'Keypad Membrane with OLED window', qty: 1, unitPrice: 4, unitPrice1k: 2, total20: 200, total200: 800, total1k: 2000 },
  
  // Final Assembly
  { category: 'Final Assembly', part: 'Final Assembly & Test', qty: 0.5, unitPrice: 60, unitPrice1k: 60, total20: 600, total200: 6000, total1k: 30000 },
];
